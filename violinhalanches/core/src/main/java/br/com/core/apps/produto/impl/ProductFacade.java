package br.com.core.apps.produto.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.produto.ProductApp;
import br.com.core.apps.produto.validate.ProductUtils;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemSearchByProductIdSpecify;
import br.com.dao.db.produto.ProductDAO;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductFindByIdSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductFindByNameSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductSearchByCategoryIdAndByTypeSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductSearchByCategoryIdSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductSearchByCategoryTypeSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductSearchByTypeSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.mapper.ProductSearchPaginationByCategoryTypeSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.primitive.ProductCountByCategoryTypeSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.primitive.ProductFindPhotoByNameSpecify;
import br.com.model.entities.manager.Product;
import br.com.model.enums.CategoryType;
import br.com.model.enums.ProductType;
import br.com.model.exception.SystemException;

import com.google.common.base.Preconditions;

@Scope("prototype")
@Service("produtoFacade")
@Transactional(readOnly=true)
public class ProductFacade implements ProductApp {

	@Resource(name="produtoJDBC") 
	private ProductDAO productDAO;
	
	public byte[] retrieveFotoById(Integer id) {
		return productDAO.findFoto(id); 
	}

	@Transactional(readOnly=false)
	public void save(@Valid Product produto) {
		try {
			Integer id = produto.getId();
			
			if (id == null) {
				if (produto.getType() != ProductType.PRODUCT) {
					ProductUtils.validateItens( produto.getItens() );
				}
				productDAO.insert(produto);
			} else {
				productDAO.update(produto);
			}
		} catch (DuplicateKeyException e) {
			ProductType type = produto.getType();
			String msg = type == ProductType.PRODUCT 
						? "Já existe um Lanche com este nome para este tipo de pão. Não se pode ter lanches com mesmo nome para um mesmo tipo de pão" 
						: "Já existe um produto com este nome, por favor escolha outro"	;
			throw new SystemException(msg);
		}
	}

	@Transactional(readOnly=false)
	public void delete(Integer id) {
		productDAO.delete(id);
	}

	public Product find(Integer id) {
		Product product = productDAO.find( new ProductFindByIdSpecify(id) );
		product.setItens( getItemDAO().search(new ItemSearchByProductIdSpecify(id)) );
		return product;
	}
	
	public Product find(String name, ProductType type) {
		Product product = productDAO.find( new ProductFindByNameSpecify(name, type.getCode()) );
		product.setItens( getItemDAO().search(new ItemSearchByProductIdSpecify( product.getId() )) );
		return product;
	}

	public Integer countProdutos() {
		return (Integer) productDAO.find( new ProductCountByCategoryTypeSpecify(CategoryType.PRODUTO) );
	}

	public Product findWithOutItens(Integer id) {
		return productDAO.find( new ProductFindByIdSpecify(id) );
	}

	public List<Product> searchProdutosPagination(int start, int qtd) {
		QueryMapperSpecify specify = new ProductSearchPaginationByCategoryTypeSpecify(CategoryType.PRODUTO, start, qtd);
		return productDAO.search( specify );
	}

	public List<Product> searchLanchesPagination(int start, int qtd) {
		QueryMapperSpecify specify = new ProductSearchPaginationByCategoryTypeSpecify(CategoryType.LANCHE, start, qtd);
		return productDAO.search( specify );
	}

	public Integer countLanches() {
		return (Integer) productDAO.find( new ProductCountByCategoryTypeSpecify(CategoryType.LANCHE) );
	}

	public List<Product> search(ProductType tipoProduto) {
		return productDAO.search( new ProductSearchByTypeSpecify(tipoProduto) );
	}

	public List<Product> search(CategoryType tipoCategoria) {
		return productDAO.search( new ProductSearchByCategoryTypeSpecify(tipoCategoria) );
	}

	public List<Product> search(ProductType tipoProduto, Integer categoriaId) {
		return productDAO.search( new ProductSearchByCategoryIdAndByTypeSpecify(categoriaId, tipoProduto) );
	}

	public List<Product> search(Integer categoriaId) {
		return productDAO.search( new ProductSearchByCategoryIdSpecify(categoriaId) );
	}

	public byte[] findFoto(String nome, Integer type) {
		return (byte[]) productDAO.find( new ProductFindPhotoByNameSpecify(nome, type) );
	}

	public Product checkIntegrity(Product product) {
		Product original = productDAO.find( new ProductFindByNameSpecify( product.getName(), product.getTypeAsCode() ) );
		Preconditions.checkNotNull( original, "Produto com este nome, não existe em nossa base dados" );
		if (original.getType() != ProductType.PRODUCT ) {
			original.setItens( getItemDAO().search(new ItemSearchByProductIdSpecify( original.getId() )) );
		}
		ProductUtils.validate( product, original );
		return original;
	}

	@Transactional(readOnly=false)
	public void update(Product product) {
		productDAO.update( product );
	}

}
