package br.com.core.apps.produto;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.core.apps.FotoRetriever;
import br.com.model.entities.manager.Product;
import br.com.model.enums.CategoryType;
import br.com.model.enums.ProductType;

@Loggable
public interface ProductApp extends FotoRetriever {
	
	byte[] findFoto(String nome, Integer type);
	
	void save(Product produto);
	
	void update(Product product);
	
	void delete(Integer id);
	
	Product find(Integer id);
	
	Product findWithOutItens(Integer id);
	
	List<Product> searchProdutosPagination(int start, int qtd);
	
	List<Product> searchLanchesPagination(int start, int qtd);
	
	List<Product> search(ProductType tipoProduto);
	
	List<Product> search(ProductType tipoProduto, Integer categoriaId);
	
	List<Product> search(Integer categoriaId);
	
	List<Product> search(CategoryType tipoCategoria);
	
	Integer countProdutos();
	
	Integer countLanches();
	
	Product checkIntegrity(Product product);

	Product find(String name, ProductType type);
	
}
