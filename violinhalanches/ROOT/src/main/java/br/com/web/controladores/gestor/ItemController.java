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
import br.com.comum.log.Loggable;
import br.com.core.apps.item.ItemApp;
import br.com.model.entities.manager.Item;
import br.com.web.annotations.Message;

@Scope("prototype")
@Controller(value = "itemController")
@RequestMapping(value = "/item")
@SessionAttributes(value = { Constantes.FOTO_TEMPORARIA })
public class ItemController {

	@Message("Tela de cadastro carregada com sucesso")
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String iniciarFormulario(Model model, Item i) {
		return carregarForm(model, i);
	}

	@Message("Ingrediente pronto para edição")
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	@Loggable public String iniciarEdicao(Model model, @RequestParam("id") Integer id) {
		Item i = getItemApp().retrieveById(id);
		model.addAttribute("editImage", "true");
		model.addAttribute("urlGetImage", "/item/off/foto?id=" + id);
		return carregarForm(model, i);
	}

	@Message("Ingrediente Salvo Com Sucesso!")
	@RequestMapping(value = "/salvar", method = RequestMethod.POST)
	@Loggable public String save(Item item, Model model, 
			@RequestParam(Constantes.IMAGEM) MultipartFile imagem,
			SessionStatus status, WebRequest request,
			@RequestParam("hasImage") String hasImage) {
		
		ItemApp itemApp = getItemApp();
		
		setImage(hasImage, request, imagem,	item, itemApp);
		
		itemApp.save(item);
		
		status.setComplete();
		
		return gerenciar(model);
	}
	
	@RequestMapping(value = "/gerenciar", method = RequestMethod.GET)
	@Loggable public String gerenciar(Model model) {
		model.addAttribute("total", getItemApp().countItens());
		return "item/gerenciar";
	}
	
	@RequestMapping(value = "/off/foto", method = RequestMethod.GET, headers = "Accept=image/jpeg, image/jpg, image/png, image/gif")
	@Loggable public @ResponseBody byte[] getFotoItem(Model model, @RequestParam("id") int id) {
		return getItemApp().retrieveFotoById(id);
	}

	@RequestMapping(value = "/gerenciar/paginate", method = RequestMethod.GET)
	@Loggable public String itensPaginate(Model model, @RequestParam("start") int start,
			@RequestParam("qtd") int qtd, @RequestParam("page") String page) {
		List<Item> lstItem = getItemApp().searchPagination(start, qtd);
		model.addAttribute("itens", lstItem);
		return page;
	}

	@RequestMapping(value = "/deletar", method = RequestMethod.GET)
	@Loggable public @ResponseBody int deletar(@RequestParam("id") Integer id) {
		ItemApp facadeItem = getItemApp();
		facadeItem.delete(id);
		return facadeItem.countItens();
	}
	
	public String carregarForm(Model model, Item i) {
		model.addAttribute("item", i == null ? new Item() : i);
		return "item/inicio";
	}

}
