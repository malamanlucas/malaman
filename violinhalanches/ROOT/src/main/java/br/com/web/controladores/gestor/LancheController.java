package br.com.web.controladores.gestor;

import static br.com.comum.constantes.Constantes.FOTO_TEMPORARIA;
import static br.com.comum.constantes.Constantes.LANCHE_SESSAO;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

import br.com.comum.constantes.Constantes;
import br.com.core.apps.produto.ProductApp;
import br.com.core.validate.BeanValidator;
import br.com.model.entities.manager.Item;
import br.com.model.entities.manager.Product;
import br.com.model.enums.CategoryType;
import br.com.model.enums.ProductType;
import br.com.web.annotations.FormError;
import br.com.web.annotations.Message;
import br.com.web.converters.IngredienteConverter;

@Scope("prototype")
@Controller(value = "lancheController")
@RequestMapping(value = "/lanche")
@SessionAttributes({ LANCHE_SESSAO, FOTO_TEMPORARIA, "totalItens"})
public class LancheController {
	
	@Message("Tela de cadastro carregada com sucesso")
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String iniciarFormulario(Model model, Product p) {
		return carregarForm(model, p);
	}
	
	@Message("Lanche pronto para edição")
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String iniciarEdicao(Model model, @RequestParam("id") Integer id) {
		Product produto = getProductApp().find(id);
		model.addAttribute("editImage", "true");
		model.addAttribute("urlGetImage", "/produto/off/foto?id=" + id);
		return carregarForm(model, produto);
	}
	
	@Message("Lanche salvo com sucesso")
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(@RequestParam(Constantes.IMAGEM) MultipartFile imagem,
					   Product produto, Model model, SessionStatus status, WebRequest request,
				       @RequestParam("hasImage") String hasImage) {
		
		ProductApp produtoApp = getProductApp();
		
		setImage(hasImage, request, imagem, produto, produtoApp);
		
		produtoApp.save(produto);
		status.setComplete();

		return gerenciar(model);
	}
	
	public String carregarForm(Model model, Product p) {
		model.addAttribute("produto", (p == null) ? new Product() : p);
		model.addAttribute("categorias", getCategoriaApp().searchByTipo(CategoryType.LANCHE) );
		model.addAttribute("tiposProduto", new ProductType[]{ ProductType.PAO_HAMBURGUER, ProductType.PAO_MATA_FOME } );
		return "lanche/inicio";
	}
	
	@RequestMapping(value="/itens", method=RequestMethod.POST)
	@FormError public String itens(Product produto, Model model, 
						@RequestParam(Constantes.IMAGEM) MultipartFile imagem,
						BindingResult bindingResult, WebRequest request, 
						@RequestParam("hasImage") String hasImage,
						@RequestParam("itensXml") String itensXml) {
		
		
		ProductApp produtoApp = getProductApp();
		setImage(hasImage, request, imagem, produto, produtoApp);
		
		produto.setDescription( "<items />" );
		new BeanValidator().validate( produto );
		
//		Preconditions.checkNotNull(produto.getPhotoAsBytes(), "Foto obrigatória");
		
		model.addAttribute(LANCHE_SESSAO, produto);
		model.addAttribute(FOTO_TEMPORARIA, produto.getPhoto());
		model.addAttribute("itensXml", itensXml);
		model.addAttribute("totalItens", getItemApp().countItens());
		
		return "lanche/itens";
	}
	
	@RequestMapping(value="/itens/extras", method=RequestMethod.POST)
	public String itensExtras(Model model, @RequestParam("itensXml") String itensXml) {
		model.addAttribute("itensXml", itensXml);
		return "lanche/itensExtras";
	}
	
	@RequestMapping(value="/off/detail", method=RequestMethod.POST)
	public String detail(Model model, @RequestParam Integer id) {
		Product product = getProductApp().findWithOutItens(id);
		Integer amountItens = getItemApp().countItensByProductId(id);
		model.addAttribute( "lanche", product );
		model.addAttribute( "amountItens", amountItens );
		return "lanche/detail";
	}
	
	@RequestMapping(value="/detail/itens", method=RequestMethod.POST)
	public String detailItens(Model model, @RequestParam Integer id) {
		List<Item> itens = getItemApp().searchByProdutoId(id);
		model.addAttribute("itens", itens);
		return "lanche/detail/paginate";
	}
	
	@RequestMapping(value="/voltarLanche", method=RequestMethod.POST)
	public String voltarLanche(@ModelAttribute(LANCHE_SESSAO) Product produto,
							   Model model, @RequestParam("itensXml") String itensXml) {
		model.addAttribute("itensXml", itensXml);
		model.addAttribute("getFotoTmp", "true");
		return carregarForm(model, produto);
	}
	
	@RequestMapping(value="/voltarItens", method=RequestMethod.POST)
	public String voltarItens(Model model, @RequestParam("itensXml") String itensXml) {
		model.addAttribute("itensXml", itensXml);
		return "lanche/itens";
	}
	
	@Message("Lanche salvo com sucesso")
	@RequestMapping(value="/salvar", method=RequestMethod.POST)
	public String save(@ModelAttribute(LANCHE_SESSAO) Product produto, Model model,  
						@RequestParam("itensXml") String itensXml, 
						WebRequest request, SessionStatus status) {
		
		prepareForSave(produto, itensXml);
		
		getProductApp().save(produto);
		
		status.setComplete();

		return gerenciar(model);
	}

	private void prepareForSave(Product produto, String itensXml) {
		List<Item> itens = IngredienteConverter.convert( itensXml );
		if (itens != null) {
			produto.setDescription( IngredienteConverter.forString(itens) ); 
			produto.setItens( itens );
		}
	}
	
	@RequestMapping(value = "/gerenciar", method = RequestMethod.GET)
	public String gerenciar(Model model) {
		model.addAttribute("total", getProductApp().countLanches());
		return "lanche/gerenciar";
	}
	
	@RequestMapping(value = "/gerenciar/paginate", method = RequestMethod.GET)
	public String lanchesPaginate(Model model, @RequestParam("start") int start,
			@RequestParam("qtd") int qtd, @RequestParam("page") String page) {
		List<Product> produtos = getProductApp().searchLanchesPagination(start, qtd);
		model.addAttribute("lanches", produtos);
		return page;
	}
	
	@RequestMapping(value = "/deletar", method = RequestMethod.GET)
	public @ResponseBody int deletar(@RequestParam("id") Integer id) {
		ProductApp produtoApp = getProductApp();
		produtoApp.delete(id);;
		return produtoApp.countLanches();
	}
	
	
}