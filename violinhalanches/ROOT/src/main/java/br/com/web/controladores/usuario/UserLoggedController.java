package br.com.web.controladores.usuario;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.comum.config.ConfigProperties;
import br.com.comum.log.Loggable;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.User;
import br.com.model.entities.user.UserWEB;
import br.com.web.annotations.FormError;
import br.com.web.annotations.Message;
import br.com.web.model.ChangePasswordEntity;
import br.com.web.util.SessionUtils;

@Scope("prototype")
@Controller(value = "userLoggedController")
@RequestMapping(value = "/user")
public class UserLoggedController {

	
	@Message("Email atualizado com sucesso!.")
	@RequestMapping(value="/change/email", method={RequestMethod.GET})
	@Loggable
	public String changeEmail(Model model, @RequestParam String email) {
		
		UserWEB user = SessionUtils.getUserWEB();
		
		User userToUpdate = new User();
		userToUpdate.setId( user.getId() );
		userToUpdate.setEmail( email );
		getUserApp().update( userToUpdate );
		user.setEmail(email);
		
		return getHomeController().iniciar(model);
	}
	
	@Message("Senha alterada com sucesso!.")
	@RequestMapping(value="/password/save", method={RequestMethod.POST})
	@FormError(methodName="initFormChangePassword")
	@Loggable
	public String changePassword(Model model, ChangePasswordEntity entity) {
		
		UserWEB user = SessionUtils.getUserWEB();
		String newPassword     = entity.getNewPassword();
		String confirmPassword = entity.getConfirmPassword();
		String oldPassword     = entity.getOldPassword();
		getUserApp().changePassword( newPassword, confirmPassword, oldPassword, user.getEntity() );
		
		return conta(model);
	}
	
	@Message("Cheque sua caixa de email e clique no link de confirmação!.")
	@RequestMapping(value="/request/change/email", method={RequestMethod.POST})
	@FormError(methodName="initChangeEmail")
	@Loggable
	public String requestChangeEmail(Model model, @RequestParam String email) {
		
		String name = SessionUtils.getUserName();
		getUserApp().requestChangeEmail( name, email );
		
		return conta(model);
	}
	
	public String initChangeEmail(Model model, String email) {
		model.addAttribute("email", email);
		return "user/change/email";
	}
	
	@Message("Tela de edição de email carregada com sucesso.")
	@RequestMapping(value="/email", method={RequestMethod.GET})
	public String loadFormChangeEmail(Model model) {
		return initChangeEmail( model, SessionUtils.getUserEmail() );
	}
	
	@Message("Tela de edição de senha carregada com sucesso.")
	@RequestMapping(value="/password", method={RequestMethod.GET})
	@Loggable
	public String loadFormChangePassword(Model model) {
		return initFormChangePassword(model, new ChangePasswordEntity());
	}
	
	public String initFormChangePassword(Model model, ChangePasswordEntity entity) {
		return "user/change/password";
	}
	
	@Message("Tela de cadastramento de endereço carregada com sucesso.")
	@RequestMapping(value="/address", method={RequestMethod.GET})
	@Loggable
	public String initAddress(Model model) {
		
		Address address = SessionUtils.getUserAddress();
		
		if (address == null) {
			address = new Address();
		}
		
		return initAddressForm(model, address);
	}
	
	@RequestMapping(value="/conta")
	public String conta(Model model) {
		return "usuario/conta";
	}
	
	@Message("Endereço salvo com sucesso")
	@RequestMapping(value="/address/save", method=RequestMethod.POST)
	@FormError(methodName="initAddressForm")
	@Loggable
	public String saveAddress(Model model, Address address) {
		
		Integer userId = SessionUtils.getUserId();
		address.setUserId( userId );
		address = getAddressApp().save( address );
		SessionUtils.getEntity().setAddress( address );

		return conta(model);
	}
	
	public String initAddressForm(Model model, Address address) {
		model.addAttribute( "address", address );
		model.addAttribute( "uf", ConfigProperties.getUF() );
		model.addAttribute( "city", ConfigProperties.getCity() );
		return "user/address/form";
	}
	
	@RequestMapping(value="/pedidos", method=RequestMethod.GET)
	public String meusPedidos(Model model) {
		
		String phone = SessionUtils.getEntity().getPhone();
		model.addAttribute( "pedidos", getPedidoApp().searchByUserPhone(phone) );
	
		return "user/pedidos";
	}
	
}
