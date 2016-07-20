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
import br.com.core.apps.categoria.CategoryApp;
import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;
import br.com.web.annotations.Message;

@Scope("prototype")
@Controller
@RequestMapping("/categoria")
@SessionAttributes(value = { Constantes.FOTO_TEMPORARIA })
public class CategoryController {

	@Message("Tela de cadastro carregada com sucesso")
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String iniciarFormulario(Model model, Category c) {
		return carregarForm(model, c);
	}
	
	@Message("Categoria pronto para edição")
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String iniciarEdicao(Model model, @RequestParam("id") Integer id) {
		model.addAttribute("editImage", "true");
		model.addAttribute("urlGetImage", "/categoria/off/foto?id=" + id);
		return carregarForm(model, getCategoriaApp().find(id) );
	}

	@Message("Categoria Salvo Com Sucesso!")
	@RequestMapping(value = "/salvar", method = RequestMethod.POST)
	public String save(Category categoria, Model model, 
			@RequestParam(Constantes.IMAGEM) MultipartFile imagem,
			SessionStatus status, WebRequest request,
			@RequestParam("hasImage") String hasImage) {
		
		CategoryApp categoriaApp = getCategoriaApp();
		
		setImage(hasImage, request, imagem,	categoria, categoriaApp);
		
		categoriaApp.save(categoria);
		
		status.setComplete();
		
		return gerenciar(model);
	}
	
	@RequestMapping(value = "/gerenciar", method = RequestMethod.GET)
	public String gerenciar(Model model) {
		model.addAttribute("total", getCategoriaApp().countCategoria());
		return "categoria/gerenciar";
	}
	
	@RequestMapping(value = "/off/foto", method = RequestMethod.GET, headers = "Accept=image/jpeg, image/jpg, image/png, image/gif")
	public @ResponseBody byte[] getFoto(Model model, @RequestParam("id") int id) {
		return getCategoriaApp().retrieveFotoById(id);
	}

	@RequestMapping(value = "/gerenciar/paginate", method = RequestMethod.GET)
	public String categoriaPaginate(Model model, @RequestParam("start") int start, @RequestParam("qtd") int qtd, @RequestParam("page") String page) {
		List<Category> categorias = getCategoriaApp().searchPagination(start, qtd);
		model.addAttribute("categorias", categorias );
		return page;
	}

	@RequestMapping(value = "/deletar", method = RequestMethod.GET)
	public @ResponseBody int deletar(@RequestParam("id") Integer id) {
		CategoryApp app = getCategoriaApp(); 
		app.delete(id);
		return app.countCategoria();
	}
	

	public String carregarForm(Model model, Category c) {
		model.addAttribute( "tiposCategoria" , CategoryType.values() );
		model.addAttribute( "categoria" , c != null ? c : new Category() );
		return "categoria/inicio";
	}
	
}
