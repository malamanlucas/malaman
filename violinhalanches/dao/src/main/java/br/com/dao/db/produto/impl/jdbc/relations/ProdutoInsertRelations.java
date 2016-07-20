package br.com.dao.db.produto.impl.jdbc.relations;

import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;

import br.com.model.entities.manager.Item;
import br.com.model.entities.manager.Product;

public class ProdutoInsertRelations {
	
	private static final String QUERY_RELATED_ITEMS = 
		"INSERT INTO item_produto(item, produto, qtd, qtd_max, valor) "
		+ "VALUES(:id, :productId, :amount, :maxAmount, :price)";
	
	private NamedParameterJdbcTemplate npJdbcTemplate;

	public ProdutoInsertRelations(NamedParameterJdbcTemplate npJdbcTemplate) {
		this.npJdbcTemplate = npJdbcTemplate;
	}
	
	public void createRelations(Product p) {
		
		if ( !CollectionUtils.isEmpty( p.getItens() ) ) { 
			relateWithItens(p);
		}
	}
	
	private void relateWithItens(Product p) {
		List<Item> lstItem = p.getItens();
		Integer productId  = p.getId();
		
		SqlParameterSource[] params = new BeanPropertySqlParameterSource[lstItem.size()];
		for (int i = 0; i < lstItem.size() ; i++) {
			Item item = lstItem.get(i);
			item.setProductId(productId);
			params[i] = new BeanPropertySqlParameterSource(item);
		}
		
		npJdbcTemplate.batchUpdate(QUERY_RELATED_ITEMS, params); 
	}
	
}
