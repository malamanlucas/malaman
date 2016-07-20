package br.com.web.controladores.abstracts;

import org.springframework.ui.Model;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

import br.com.comum.captcha.CaptchaUtils;
import br.com.comum.constantes.Constantes;
import br.com.comum.cripto.Criptografador;
import br.com.comum.log.LogMessage;
import br.com.comum.log.LoggerMessager;
import br.com.comum.test.TesteUtils;
import br.com.comum.validate.Validador;
import br.com.core.apps.FotoRetriever;
import br.com.model.entities.manager.Photo;
import br.com.model.entities.manager.SystemStatus;
import br.com.model.interfaces.PhotoWrapper;
import br.com.web.model.CaptchaChecker;
import br.com.web.util.FileUploadUtils;

import com.google.common.base.Preconditions;

public abstract class AbstractController extends AppController implements LoggerMessager {

	private LogMessage message;
	
	public AbstractController() {
		TesteUtils.showMsg("Controller", this);
	}
	
	protected void checkIfSalesIsOpened() {
		SystemStatus system = getSystemStatusApp().find();
		Preconditions.checkArgument( system.isSaleOpened(), "A venda online não está aberta." );
	}

	protected void setImage(String hasImage, 
			WebRequest request, MultipartFile imagem, PhotoWrapper wrapper, 
			FotoRetriever fotoRetriever) {
		Photo foto = null;
		if (hasImage.equals("true")) {
			foto = FileUploadUtils.obterFoto(imagem);
		} else if (hasImage.equals("tmp")) {
			foto = (Photo) request.getAttribute(Constantes.FOTO_TEMPORARIA, WebRequest.SCOPE_SESSION);
		} else if (hasImage.equals("edit")) {
			Integer id = wrapper.getId();
			foto = new Photo(fotoRetriever.retrieveFotoById(id));
		}
		wrapper.setPhoto(foto);
	}
	
	protected void enviarCaptcha(Model model) {
		model.addAttribute("key", Criptografador.
				encodeBase64(CaptchaUtils.getInstance().getAnswer()));
	}
	
	private void checkCaptcha(String answer, String original) {
		Preconditions.checkArgument( !Validador.isStringEmpty(answer),
					"Por favor, preencha o código da imagem (Captcha)");
		boolean isCorrect = answer.equalsIgnoreCase( Criptografador.decodeBase64(original) );
		Preconditions.checkArgument( isCorrect, 
				"Por favor, preencha o código da imagem corretamente");
	}
	
	protected void checkCaptcha(CaptchaChecker checker) {
		String answer   = checker.getAnswer();
		String original = checker.getOriginal();
		checkCaptcha(answer, original);
	}
	
	protected void redirecionar(Model model, String url) {
		model.addAttribute("redirecionar", "true");
		model.addAttribute("url", url);
	}
	
	public void setLog(LogMessage message) {
		this.message = message;
	}
	
	public LogMessage getLog() {
		return message;
	}
	
}
