package br.com.web.controladores.usuario;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.comum.log.Loggable;
import br.com.model.entities.user.User;
import br.com.model.enums.Profile;
import br.com.web.annotations.FormError;
import br.com.web.annotations.Message;
import br.com.web.model.CaptchaChecker;


@Scope("prototype")
@Controller(value = "userController")
@RequestMapping(value = "/user/off")
public class UserController {
	
	@Message("Um email de confirmação foi enviado ao seu email.")
	@RequestMapping(value="/register/confirm", method=RequestMethod.POST)
	@FormError public String registerConfirmation(Model model, User user, CaptchaChecker checker) {
		
		checkCaptcha(checker);
		user.setProfiles( new Profile[]{ Profile.USER });
		user.setEnable  ( true );
		user.setReliable( true );
		getUserApp().requestRegister(user);
		
		return carregarForm(model, new User() );
		
	}
	
	@RequestMapping(value="/register/", method=RequestMethod.GET)
	@FormError public String iniciarForm(Model model) {
		return carregarForm(model, new User() );
	}
	
	@Message("Cadastro realizado com sucesso! Boas Compras.")
	@RequestMapping(value="/save", method={RequestMethod.GET, RequestMethod.POST})
	@Loggable
	public String save(Model model, @RequestParam String user) {
		getUserApp().register(user);
		return getHomeController().iniciar(model);
	}
	
	public String carregarForm(Model model, Object user) {
		enviarCaptcha(model);
		model.addAttribute("user", user);
		return "usuario/cadastro";
	}
	
}
