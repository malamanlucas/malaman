package br.com.core.apps.categoria.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.categoria.CategoryApp;
import br.com.dao.db.categoria.CategoryDAO;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategoryFindByIdSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategorySearchByTypeSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategorySearchPaginationSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.mapper.CategorySearchSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.primitive.CategoryCountByTypeSpecify;
import br.com.dao.db.categoria.impl.jdbc.specify.primitive.CategoryCountSpecify;
import br.com.model.entities.manager.Category;
import br.com.model.enums.CategoryType;
import br.com.model.exception.SystemException;

@Scope("prototype")
@Service("categoriaFacade")
@Transactional(readOnly=true)
public class CategoryFacade implements CategoryApp {
	
	@Resource(name="categoriaJDBC")
	private CategoryDAO categoryDAO;
	
	public byte[] retrieveFotoById(Integer id) {
		return categoryDAO.findFoto(id);
	}

	public List<Category> searchAll() {
		return categoryDAO.search( new CategorySearchSpecify() );
	}

	public List<Category> searchByTipo(CategoryType tipo) {
		return categoryDAO.search( new CategorySearchByTypeSpecify(tipo) );
	}

	public List<Category> searchPagination(Integer start, Integer qtd) {
		return categoryDAO.search( new CategorySearchPaginationSpecify(start, qtd) );
	}

	@Transactional(readOnly=false)
	public void delete(Integer id) {
		categoryDAO.delete(id);
	}

	public Category find(Integer id) {
		return categoryDAO.find( new CategoryFindByIdSpecify(id) );
	}

	@Transactional(readOnly=false)
	public void save(@Valid Category categoria) {
		
		try {
			Integer id = categoria.getId();
			
			if (id == null) {
				categoryDAO.insert(categoria);
			} else {
				categoryDAO.update(categoria);
			}
 		} catch (DuplicateKeyException e) {
			throw new SystemException("Já existe uma categoria com este nome");
 		}
	}

	public Integer countCategoria() {
		return (Integer) categoryDAO.find( new CategoryCountSpecify() );
	}

	public Integer countCategoria(CategoryType tipoCategoria) {
		return (Integer) categoryDAO.find( new CategoryCountByTypeSpecify(tipoCategoria) );
	}

}
