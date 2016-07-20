package br.com.core.apps.user.impl;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.comum.config.ConfigProperties;
import br.com.comum.converters.ConversorJSON;
import br.com.comum.cripto.Criptografador;
import br.com.comum.file.ResourceLoader;
import br.com.comum.validate.Validador;
import br.com.core.apps.user.UserApp;
import br.com.core.email.VelocityEmailSender;
import br.com.core.entity.ConfirmUserParams;
import br.com.dao.db.user.UserDAO;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindByIdWithoutAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindByPhoneWithoutAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindWithAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserSearchPaginationSpecify;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserCountByPhoneSpecify;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserCountSpecify;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserFindDuplicateDataSpecify;
import br.com.model.entities.Attachment;
import br.com.model.entities.user.Authority;
import br.com.model.entities.user.User;
import br.com.model.exception.SystemException;

import com.google.common.base.Preconditions;

@Scope("prototype")
@Service("userFacade")
@Transactional(readOnly=true)
public class UserFacade implements UserApp {

	private static final String MSG_DUPLICATE_KEY = "Já existe um usuário com este email ou este telefone em nossa Base de Dados";
	
	@Resource(name="userJDBC")
	private UserDAO dao;
	
	@Resource(name="emailSender")
	private VelocityEmailSender emailSender;
	
	public void requestRegister(@Valid User user) {
		checkPreconditions(user);
		
		sendConfirmRegisterUser(user);
	}

	@Transactional(readOnly=false)
	public User register(@Valid User user) {
		checkPreconditions(user);
		try {
			user.encriptPassword();
			return dao.insert(user);
		} catch (DuplicateKeyException e) {
			throw new SystemException( MSG_DUPLICATE_KEY );
		}
	}

	@Transactional(readOnly=false)
	public User register(String userAsJson) {
		userAsJson = userAsJson.replaceAll("'", "\"");
		User user = ConversorJSON.convertToObject( userAsJson, User.class );
		return register(user);
	}

	@Transactional(readOnly=false)
	public void delete(Integer id) {
		dao.delete(id);
	}
	
	private void checkPreconditions(User user) {
		UserUtils.checkMandatoryFields( user );
		
		String password = user.getPassword();
		String confirm = user.getConfirmPassword();
		
		Preconditions.checkArgument(password.equals(confirm), "Confirme a senha corretamente");
		
		Preconditions.checkArgument( !hasDuplicateData(user), MSG_DUPLICATE_KEY);
	}
	
	private boolean hasDuplicateData(User user) {
		String phone = user.getPhone();
		String email = user.getEmail();
		Integer count = (Integer) dao.find( new UserFindDuplicateDataSpecify(phone, email));
		return count != 0;
	}

	@Override
	public User findWithAddress(String phone) {
		return dao.find( new UserFindWithAddressSpecify(phone) );
	}

	@Transactional(readOnly=false)
	public void update(@Valid User user) {
		Preconditions.checkNotNull( user.getId(), "Para atualizar passe o ID" );
		
		dao.update( user );
	}
	
	public void requestChangeEmail(String name, String email) {
		
		Preconditions.checkArgument( Validador.isEmailValid(email) , "Email inválido" );
		Preconditions.checkNotNull( email, "Nome obrigatório");
		User user = new User();
		user.setName( name );
		user.setEmail( email );
		
		sendConfirmChangeEmail(user);
	}
	
	@Transactional(readOnly=false)
	public void changePassword(String newPassword, String confirmPassword, String oldPassword, User user) {
		
		Preconditions.checkNotNull( newPassword    , "Nova senha obrigatório" );
		Preconditions.checkNotNull( oldPassword    , "Senha antiga obrigatória" );
		
		String password = user.getPassword();
		oldPassword = Criptografador.encodeMD5( oldPassword ); 
		Preconditions.checkArgument( password.equals(oldPassword), "Por favor, informe a senha antiga corretamente" );
		Preconditions.checkArgument(  newPassword.equals(confirmPassword), "Por favor, confirme a nova senha corretamente" );
		
		newPassword = Criptografador.encodeMD5( newPassword );
		
		System.out.println( newPassword.length() );
		
		User userToUpdate = new User();
		userToUpdate.setId( user.getId() );
		userToUpdate.setPassword( newPassword );
		userToUpdate.setConfirmPassword( newPassword ); 
		
		update( userToUpdate );
	}
	
	private void sendConfirmChangeEmail(User user) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("user", user );
		map.put("url", ConfigProperties.getURL("/user/change/email"));
		
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo     ( user.getEmail() );
		msg.setFrom   ( ConfigProperties.getFromEmail() );
		msg.setSubject( "ViolinhaLanches - Confirmação de alteração de email" );
		
		String template = "/velocity/template/change_email_confirm.vm";
		emailSender.send(msg, map, template);
	}
	
	private void sendConfirmRegisterUser(User user) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("params", new ConfirmUserParams(user) );
		
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo     ( user.getEmail() );
		msg.setFrom   ( ConfigProperties.getFromEmail() );
		msg.setSubject( "ViolinhaLanches - Confirmação de cadastro" );
		
		String template = "velocity/template/user_confirm_register.vm";
		
		String resourceName = "contrato.pdf";
		InputStream inputStream = ResourceLoader.loadInputStream("user/"+resourceName);
		Attachment attch = new Attachment(resourceName, inputStream);
		emailSender.sendWithAttchments(msg, map, template, attch);
	}

	@Override
	public List<User> searchPagination(Integer start, Integer qtd) {
		return dao.search( new UserSearchPaginationSpecify(start, qtd) );
	}

	@Transactional(readOnly=false)
	public void updateAll(User user) {
		dao.updateAll(user);
	}

	@Override
	public Integer countUser() {
		return (Integer) dao.find( new UserCountSpecify() );
	}

	@Override
	public List<Authority> searchRolesById(Integer id) {
		return dao.searchAuthorities(id);
	}

	@Override
	public User find(Integer id) {
		return dao.find( new UserFindByIdWithoutAddressSpecify(id) );
	}

	@Override
	public boolean userExists(String phone) {
		Integer count = (Integer) dao.find( new UserCountByPhoneSpecify(phone) );
		return count > 0;
	}

	@Override
	public User find(String phone) {
		return dao.find( new UserFindByPhoneWithoutAddressSpecify(phone) );
	}

}
