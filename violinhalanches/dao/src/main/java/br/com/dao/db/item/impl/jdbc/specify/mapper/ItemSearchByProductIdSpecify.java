package br.com.dao.db.item.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.item.impl.jdbc.rowmapper.ItemMappedInProduto;

public class ItemSearchByProductIdSpecify implements QueryMapperSpecify {

	private static final String SEARCH_BYPRODUTOID =
			  "SELECT i.id, i.nome, ip.valor,"
			+ "ip.qtd, ip.qtd_max  FROM item i "
			+ "INNER JOIN item_produto ip ON (ip.item = i.id AND ip.produto = ?) "
			+ "ORDER BY i.nome";
	
	private Object[] params;
	
	public ItemSearchByProductIdSpecify(Integer productId) {
		params = new Object[]{ productId };
	}
	
	public String getSql() {
		return SEARCH_BYPRODUTOID;
	}

	public Object[] getParameters() {
		return params;
	}

	public RowMapper<?> getMapper() {
		return new ItemMappedInProduto();
	}

}
