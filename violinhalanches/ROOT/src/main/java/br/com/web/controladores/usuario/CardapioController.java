package br.com.web.controladores.usuario;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.com.model.entities.manager.Category;
import br.com.model.entities.manager.Product;
import br.com.model.enums.CategoryType;
import br.com.model.enums.ProductType;

@Scope("prototype")
@Controller
@RequestMapping("/cardapio/off")
public class CardapioController {

	@RequestMapping(value="/", method={RequestMethod.GET, RequestMethod.POST} )
	public String categorias(Model model) {
		CategoryType tipoCategoria = CategoryType.LANCHE;
		model.addAttribute("tipo", tipoCategoria.getCode());
		model.addAttribute("tiposCategoria", CategoryType.values() );
		model.addAttribute("killHungry", ProductType.PAO_MATA_FOME.getCode());
		model.addAttribute("breadNormal", ProductType.PAO_HAMBURGUER.getCode());
		return "cardapio/categorias";
	}
	
	@RequestMapping(value="/paginate", method=RequestMethod.GET)
	public String paginateCategoria(Model model, @RequestParam Integer tipo) {
		CategoryType tipoCategoria = CategoryType.fromCode( tipo );
		model.addAttribute("categorias", getCategoriaApp().searchByTipo(tipoCategoria) );
		return "cardapio/paginate";
	}
	
	@RequestMapping(value="/lanches", method={RequestMethod.GET, RequestMethod.POST})
	public String lanches(Model model, 
			@RequestParam(value="tipo", required=false) Integer tipoAsCode,
			@RequestParam("categoria") Integer categoriaId) {
		
		ProductType tipoProduto = ProductType.fromCode(tipoAsCode);
		List<Product> lanches = null;
		
		StringBuilder titulo = new StringBuilder("Lanches de ");
		
		Category categoria = getCategoriaApp().find(categoriaId);
		titulo.append(categoria.getName());
		
		if (tipoProduto == null) {
			lanches = getProductApp().search( categoria.getId() );
			titulo.append(" em todos os tipos de pão");
		} else {
			lanches = getProductApp().search( tipoProduto, categoria.getId() );
			titulo.append(" "+tipoProduto.getDescription());
		}
		
		model.addAttribute("titulo", titulo.toString());
		model.addAttribute("produtos", lanches);
		model.addAttribute("categoria", categoria);
		model.addAttribute("descricao", "Passe o mouse em cima da foto para ver os ingredientes");
		return "cardapio/produtos";
	}
	
	@RequestMapping(value="/produtos", method={RequestMethod.GET, RequestMethod.POST})
	public String produtos(Model model, @RequestParam("categoria") Integer categoriaId) {
		
		Category categoria = getCategoriaApp().find(categoriaId);
		
		List<Product> produtos = getProductApp().search( categoria.getId() );
		
		model.addAttribute( "produtos", produtos );
		model.addAttribute( "titulo", categoria.getName() );
		model.addAttribute( "descricao", "Passe o mouse em cima da foto para ver os ingredientes" );
		return "cardapio/produtos";
	}
	
	
	
}
