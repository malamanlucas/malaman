package br.com.web.controladores.gestor;

import java.util.List;

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
import org.springframework.web.multipart.MultipartFile;

import br.com.comum.constantes.Constantes;
import br.com.core.apps.carousel.CarouselApp;
import br.com.model.entities.manager.Carousel;
import br.com.web.annotations.Message;

@Scope("prototype")
@Controller(value = "carouselController")
@RequestMapping(value = "/carousel")
@SessionAttributes(value = { Constantes.FOTO_TEMPORARIA })
 public class CarouselController {

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String initCarousel(Model model, Carousel carousel) {
		return carregarForm(model, carousel);
	}
	
	public String carregarForm(Model model, Carousel carousel) {
		model.addAttribute("carousel", carousel);
		return "carousel/inicio";
	}
	
	@Message("Carousel pronto para edição!")
	@RequestMapping(value="/edit", method=RequestMethod.GET)
	public String edit(Model model, @RequestParam(required=false) Integer id) {
		model.addAttribute("editImage", "true");
		model.addAttribute("urlGetImage", "/carousel/off/foto?id=" + id);
		return carregarForm( model, new Carousel(id) );
	}
	
	@Message("Carousel Salvo Com Sucesso!")
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String save(Carousel carousel, Model model, 
			@RequestParam(Constantes.IMAGEM) MultipartFile imagem,
			SessionStatus status, WebRequest request,
			@RequestParam("hasImage") String hasImage) {
		
		CarouselApp carouselApp = getCarouselApp();
		
		setImage(hasImage, request, imagem,	carousel, carouselApp);
		
		carouselApp.save( carousel );
		
		status.setComplete();
		
		return gerenciar(model);
	}

	@RequestMapping(value = "/gerenciar", method = RequestMethod.GET)
	public String gerenciar(Model model) {
		model.addAttribute("total", getCarouselApp().countCarousel());
		return "carousel/gerenciar";
	}
	
	@RequestMapping(value = "/off/foto", method = RequestMethod.GET, headers = "Accept=image/jpeg, image/jpg, image/png, image/gif")
	public @ResponseBody byte[] getFoto(Model model, @RequestParam("id") Integer id) {
		return getCarouselApp().retrieveFotoById( id );
	}
	
	@RequestMapping(value="/off/carousels", method=RequestMethod.POST)
	public String getCarouselsByAjax(Model model) {
		model.addAttribute( "carousels", getCarouselApp().searchAll() );
		return "carousel/list/ajax";
	}
	
	@RequestMapping(value = "/gerenciar/paginate", method = RequestMethod.GET)
	public String carouselPaginate(Model model, @RequestParam("start") int start,
								   @RequestParam("qtd") int qtd, @RequestParam("page") String page) {
		List<Carousel> carousels = getCarouselApp().searchPagination(start, qtd);
		model.addAttribute("carousels", carousels );
		return page;
	}

	@RequestMapping(value = "/deletar", method = RequestMethod.GET)
	public @ResponseBody int deletar(@RequestParam("id") Integer id) {
		CarouselApp app = getCarouselApp();
		app.delete(id);
		return app.countCarousel();
	}
	
}
