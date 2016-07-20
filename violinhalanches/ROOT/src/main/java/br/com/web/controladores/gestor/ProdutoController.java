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
import br.com.core.apps.produto.ProductApp;
import br.com.model.entities.manager.Product;
import br.com.model.enums.CategoryType;
import br.com.model.enums.ProductType;
import br.com.web.annotations.Message;

import com.google.common.base.Preconditions;

@Scope("prototype")
@Controller(value = "produtoController")
@RequestMapping(value = "/produto")
@SessionAttributes({ Constantes.FOTO_TEMPORARIA })
public class ProdutoController {


	@Message("Tela de cadastro carregada com sucesso")
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String iniciarFormulario(Model model, Product p) {
		return carregarForm(model, p);
	}

	public String carregarForm(Model model, Product p) {
		model.addAttribute("produto", (p == null) ? new Product() : p);
		model.addAttribute("categorias", getCategoriaApp().searchByTipo(CategoryType.PRODUTO));
		model.addAttribute("tiposProduto", ProductType.values());
		return "produto/inicio";
	}
	
	@RequestMapping(value = "/off/foto", method = RequestMethod.GET, headers = "Accept=image/jpeg, image/jpg, image/png, image/gif")
	public @ResponseBody byte[] getFotoProduto(Model model, 
						@RequestParam(value="id",required=false)   Integer id,
						@RequestParam(value="nome",required=false) String nome,
						@RequestParam(value="type", required=false) Integer type) {
		if (id != null)
			return getProductApp().retrieveFotoById(id);
		else if (nome != null) {
			Preconditions.checkNotNull(type, "Passe o tipo do produto para buscar a foto");
			return getProductApp().findFoto(nome, type);
		}
		return null;
	}
	
	@RequestMapping(value = "/gerenciar/paginate", method = RequestMethod.GET)
	public String produtosPaginate(Model model, @RequestParam("start") int start,
			@RequestParam("qtd") int qtd, @RequestParam("page") String page) {
		List<Product> produtos = getProductApp().searchProdutosPagination(start, qtd);
		model.addAttribute("produtos", produtos);
		return page;
	}

	@Message("Produto salvo com sucesso")
	@RequestMapping(value = "/salvar", method = RequestMethod.POST)
	@Loggable public String save(Product produto, Model model,
					   @RequestParam(Constantes.IMAGEM) MultipartFile imagem,
					   SessionStatus status, WebRequest request,
				       @RequestParam("hasImage") String hasImage) {
		
		ProductApp produtoApp = getProductApp();
		
		setImage(hasImage, request, imagem, produto, produtoApp);
		prepareForSave(produto);
		
		produtoApp.save(produto);
		status.setComplete();

		return gerenciar(model);
	}
	
	private void prepareForSave(Product produto) {
		produto.setType(ProductType.PRODUCT);
		if (produto.getCategoryId() == -1) {
			produto.setCategory(null);
		}
	}
	
	@RequestMapping(value = "/gerenciar", method = RequestMethod.GET)
	public String gerenciar(Model model) {
		model.addAttribute("total", getProductApp().countProdutos());
		return "produto/gerenciar";
	}
	
	@Message("Produto pronto para edição")
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String iniciarEdicao(Model model, @RequestParam("id") Integer id) {
		Product produto = getProductApp().findWithOutItens(id);
		model.addAttribute("editImage", "true");
		model.addAttribute("urlGetImage", "/produto/off/foto?id=" + id);
		return carregarForm(model, produto);
	}
	
	@RequestMapping(value = "/deletar", method = RequestMethod.GET)
	public @ResponseBody int deletar(@RequestParam("id") Integer id) {
		ProductApp produtoApp = getProductApp();
		produtoApp.delete(id);;
		return produtoApp.countProdutos();
	}
	
	@RequestMapping(value="/enabled", method=RequestMethod.GET)
	public @ResponseBody boolean refreshEnabled(Model model, @RequestParam Boolean enabled, @RequestParam Integer id) {
		Product product = new Product();
		product.setId(id);
		product.setEnabled(enabled);
		getProductApp().update(product);
		return enabled;
	}
	
	@RequestMapping(value="/isEnabled", method={RequestMethod.POST,RequestMethod.GET})
	public @ResponseBody boolean isEnabled(Model model, @RequestParam Integer id) {
		Product product = getProductApp().find(id);
		return product.getEnabled();
	}

}

