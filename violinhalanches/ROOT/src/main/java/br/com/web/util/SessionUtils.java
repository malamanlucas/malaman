package br.com.web.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.context.request.WebRequest;

import br.com.comum.constantes.Constantes;
import br.com.model.entities.manager.Photo;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.Cart;
import br.com.model.entities.user.User;
import br.com.model.entities.user.UserWEB;

public class SessionUtils {

	private static final String GET_FOTO_TMP = "getFotoTmp";
	private static final String SIZE_FOTO = "sizeFoto";
	private static final String NOME_FOTO = "nomeFoto";

	public static void setarImagemTemporaria(Model model, Photo foto) {
		if (foto != null) {
			model.addAttribute(GET_FOTO_TMP, true);
			model.addAttribute(Constantes.FOTO_TEMPORARIA, foto);
			model.addAttribute(NOME_FOTO, foto.getName());
			model.addAttribute(SIZE_FOTO, (int)Math.ceil(foto.getSize()/1024));
		}
	}
	
	public static void cleanSession(WebRequest request, String... attrs) {
		for (String name : attrs) {
			request.removeAttribute(name, WebRequest.SCOPE_SESSION);
		}
	}
	
	public static void cleanSessionAndComplete(SessionStatus status, WebRequest request, String... attrs) {
		status.setComplete();
		for (String name : attrs) {
			request.removeAttribute(name, WebRequest.SCOPE_SESSION);
		}
	}
	
	public static Integer getUserId() {
		return getUserWEB().getEntity().getId();
	}
	
	public static UserWEB getUserWEB() {
		Authentication authentication = SecurityContextHolder
						    								.getContext()
					    									.getAuthentication();
		return (UserWEB) authentication.getPrincipal();
	}
	
	public static User getEntity() {
		return getUserWEB().getEntity();
	}

	public static String getUserName() {
		return getUserWEB().getEntity().getName();
	}

	public static Address getUserAddress() {
		return getUserWEB().getEntity().getAddress();
	}

	public static String getUserEmail() {
		return getUserWEB().getEntity().getEmail();
	}

	public static Cart getCart() {
		return getUserWEB().getCart();
	}
	
}
