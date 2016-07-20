package br.com.core.apps.item.impl;

import java.util.List;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.item.ItemApp;
import br.com.dao.db.item.ItemDAO;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemFindByIdSpecify;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemSearchPaginationSpecify;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemSearchSpecify;
import br.com.dao.db.item.impl.jdbc.specify.primitive.ItemCountByProductIdSpecify;
import br.com.dao.db.item.impl.jdbc.specify.primitive.ItemCountSpecify;
import br.com.model.entities.manager.Item;
import br.com.model.exception.SystemException;

@Scope("prototype")
@Service("itemFacade")
@Transactional(readOnly=true)
public class ItemFacade implements ItemApp {

	@Resource(name="itemJDBC")
	private ItemDAO itemDAO;
	
	
	@Transactional(noRollbackFor=SystemException.class)
	public byte[] retrieveFotoById(Integer id) {
		return itemDAO.findFoto(id);
	}

	@Transactional(readOnly=false)
	public void delete(int id) {
		itemDAO.delete(id);
	}

	public Item retrieveById(int id) {
		return itemDAO.find( new ItemFindByIdSpecify(id) );
	}

	@Transactional(readOnly=false)
	public void save(@Valid Item item) {
		Integer id = item.getId();
		
		item.setName( item.getName().trim().replaceAll(" ", "-") );
		
		if (id == null) 
			itemDAO.insert(item);
		else
			itemDAO.update(item);;
	}

	public List<Item> searchAll() {
		return itemDAO.search( new ItemSearchSpecify() );
	}

	public List<Item> searchPagination(int start, int qtd) {
		return itemDAO.search( new ItemSearchPaginationSpecify(start, qtd) );
	}

	
	public List<Item> searchByProdutoId(Integer idProduto) {
		return itemDAO.search(idProduto);
	}

	public Integer countItens() {
		return (Integer) itemDAO.find( new ItemCountSpecify() );
	}

	@Override
	public Integer countItensByProductId(Integer id) {
		return (Integer) itemDAO.find( new ItemCountByProductIdSpecify(id) );
	}

}
