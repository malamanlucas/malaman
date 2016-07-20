package br.com.core.apps.manager.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.comum.config.ConfigProperties;
import br.com.core.apps.manager.ManagerUserApp;
import br.com.core.email.VelocityEmailSender;
import br.com.dao.db.payment_method.PaymentMethodDAO;
import br.com.dao.db.payment_method.impl.jdbc.specify.mapper.PaymentMethodSearchAllSpecify;
import br.com.dao.db.payment_method.impl.jdbc.specify.mapper.PaymentMethodSearchEnabledSpecify;
import br.com.dao.db.receiver_method.ReceiverMethodDAO;
import br.com.dao.db.receiver_method.impl.jdbc.specify.mapper.ReceiverMethodSearchAllSpecify;
import br.com.dao.db.receiver_method.impl.jdbc.specify.mapper.ReceiverMethodSearchEnabledSpecify;
import br.com.dao.db.user.UserDAO;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindByPhoneWithoutAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserFindEmailOfGestor;
import br.com.dao.db.user.impl.jdbc.specify.primitive.UserFindIdByPhoneSpecify;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.ReceiverMethod;
import br.com.model.entities.user.User;

import com.google.common.base.Preconditions;

@Scope("prototype")
@Service("managerUserFacade")
@Transactional(readOnly=true)
public class ManagerUserFacade implements ManagerUserApp {

	@Resource(name="paymentMethodJDBC")
	private PaymentMethodDAO  paymentMethodDAO;
	
	@Resource(name="receiverMethodJDBC")
	private ReceiverMethodDAO receiverMethodDAO;
	
	@Resource(name="userJDBC")
	private UserDAO userDAO;
	
	@Resource(name="emailSender")
	private VelocityEmailSender emailSender;
	
	@Transactional(readOnly=false)
	public void update(PaymentMethod method) {
		paymentMethodDAO.update( method );
	}

	@Transactional(readOnly=false)
	public void update(ReceiverMethod method) {
		receiverMethodDAO.update( method );
	}

	public List<PaymentMethod> searchPaymentMethodsEnabled() {
		return paymentMethodDAO.search( new PaymentMethodSearchEnabledSpecify() );
	}

	public List<ReceiverMethod> searchReceiverMethodsEnabled() {
		return receiverMethodDAO.search( new ReceiverMethodSearchEnabledSpecify() );
	}

	public List<PaymentMethod> searchPaymentMethods() {
		return paymentMethodDAO.search( new PaymentMethodSearchAllSpecify() );
	}

	public List<ReceiverMethod> searchReceiverMethods() {
		return receiverMethodDAO.search( new ReceiverMethodSearchAllSpecify() );
	}

	public void requestUnblock(String phone) {
		
		User user = userDAO.find( new UserFindByPhoneWithoutAddressSpecify(phone) );
		
		Preconditions.checkNotNull(  user             , "Este telefone não existe cadastrado em nossa base dados, passe um existente" );
		Preconditions.checkArgument( !user.getEnable(), "Este telefone não está bloqueado. Não é possível requisitar um desbloqueio para o mesmo.");
		
		String emailGestor = (String) userDAO.find( new UserFindEmailOfGestor() );
		
		sendRequestUnblock( emailGestor, user);
		
	}
	
	private void sendRequestUnblock(String emailGestor, User user) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("user", user);
		map.put("urlUnblock", ConfigProperties.getURL("/manager_user/unblock"));
		
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo     ( emailGestor );
		msg.setFrom   ( ConfigProperties.getFromEmail() );
		msg.setSubject( "Solicitação de Desbloqueio - "+user.getPhone() + " - "+user.getName() );
		
		String template = "velocity/template/user_request_unblock.vm";
		
		emailSender.sendWithAttchments(msg, map, template);
	}

	@Transactional(readOnly=false)
	public void unblock(String phone) {
		User user = new User();
		Integer userId = (Integer) userDAO.find( new UserFindIdByPhoneSpecify(phone) );
		user.setId( userId );
		user.setEnable( true );
		userDAO.update( user );
	}

}
