package br.com.web.controladores.usuario;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.comum.log.Loggable;
import br.com.core.validate.BeanValidator;
import br.com.web.annotations.FormError;
import br.com.web.annotations.Message;
import br.com.web.model.CaptchaChecker;
import br.com.web.model.LoginForm;
import br.com.web.model.UserAuthentication;
import br.com.web.util.MessageUtils;
import br.com.web.util.SessionUtils;


@Scope("prototype")
@Controller(value="loginController")
@RequestMapping(value="/login/off")
public class LoginController {
	
	private static final String MSG_SESSAO_TIMEOUT = "Sua Sessão Expirou, logue novamente";
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
    private AuthenticationSuccessHandler successHandler;
	
	@Resource(name="beanValidator")
	private BeanValidator validator;
	
	@RequestMapping(value="/")
	public String login(Model model, LoginForm loginForm) {
		model.addAttribute("login", loginForm);
		enviarCaptcha(model);
		return "login";
	}
	
	@RequestMapping(value="/request/unblock", method=RequestMethod.GET)
	public String initRequestUnblock(Model model) {
		return initFormRequestUnblock( model, "" );
	}
	
	@Message("Uma solicitação foi enviada ao gestor")
	@RequestMapping(value="/unblock/send", method=RequestMethod.GET)
	@FormError(methodName="initFormRequestUnblock")
	public String requestUnblock(Model model, @RequestParam String phone) {
		getManagerApp().requestUnblock( phone );
		return initFormRequestUnblock( model, phone );
	}
	
	public String initFormRequestUnblock(Model model, String phone) {
		model.addAttribute( "phone", phone );
		return "request/unblock";
	}
	
	@RequestMapping(value="/logout")
	public String timeout(Model model, 
				@RequestParam(required=false) String timeout,
				@RequestParam(required=false) String alreadyLogged) {
		if (timeout != null) {
			MessageUtils.deliverError(model, MSG_SESSAO_TIMEOUT);
		} else if (alreadyLogged != null) {
			MessageUtils.deliverError(model, "Já existe um usuário logado");
		} else {
			MessageUtils.deliverSucess(model, "Logout feito com Sucesso!");
		}
		return login(model, new LoginForm() );
	}
	
	@RequestMapping(value="/negado")
	public String denied(Model model, HttpServletRequest request) {
		System.out.println( request.getRequestURL() );
		return "negado";
	}
	
	@Loggable
	@RequestMapping(value="/logar", method=RequestMethod.POST)
	public String logar(Model model, LoginForm loginForm, CaptchaChecker checker, 
						HttpServletRequest request,	HttpServletResponse response) {
		
		try {
			checkCaptcha(checker);
			validator.validate(loginForm);
			
			String         phone    = loginForm.getTelefone(); 
			String         password = loginForm.getSenha();
			UserAuthentication token      = new UserAuthentication(phone, password);
			Authentication authentication = authenticationManager.authenticate(token);
			
			SecurityContextHolder
							     .getContext()
							     .setAuthentication(authentication);
			
			successHandler.onAuthenticationSuccess(request, response, authentication);
			SessionUtils.getCart().clean();
		} catch (Exception e) {
			MessageUtils.deliverError(model, e.getMessage());
			return login(model,loginForm);
		}
		return null;
	}
	
}
