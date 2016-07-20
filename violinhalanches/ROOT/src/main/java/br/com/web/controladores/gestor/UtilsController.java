package br.com.web.controladores.gestor;

import java.io.IOException;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.context.request.WebRequest;

import br.com.comum.captcha.CaptchaUtils;
import br.com.comum.constantes.Constantes;
import br.com.model.entities.manager.Photo;

@Scope("prototype")
@Controller(value = "utilController")
@RequestMapping(value = "/util/off")
@SessionAttributes(value = { Constantes.FOTO_TEMPORARIA })
public class UtilsController {

	@RequestMapping(value = "/fotoTmp", method = RequestMethod.GET, headers = "Accept=image/jpeg, image/jpg, image/png, image/gif")
	public @ResponseBody byte[] getFotoTemporaria(Model model, WebRequest request, SessionStatus status) {
		byte[] bytes = ((Photo) request.getAttribute(Constantes.FOTO_TEMPORARIA, WebRequest.SCOPE_SESSION)).getBytes();
		return bytes;
	}
	
	@RequestMapping(value="/captcha")
	public void captcha(HttpServletResponse response,
					 	@RequestParam String key) throws IOException {
		ImageIO.write(CaptchaUtils.getImage(key), "jpeg", response.getOutputStream());
	}
	
	@RequestMapping(value="/error")
	public String error() {
		return "error";
	}

}
