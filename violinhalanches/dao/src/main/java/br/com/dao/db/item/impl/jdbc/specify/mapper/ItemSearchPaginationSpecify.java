package br.com.dao.db.item.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.item.impl.jdbc.rowmapper.ItemMapped;

public class ItemSearchPaginationSpecify implements QueryMapperSpecify {

	private Object[] params;
	
	public ItemSearchPaginationSpecify(Integer start, Integer qtd) {
		params = new Object[]{ start, qtd };
	}
	
	public String getSql() {
		return "SELECT id, nome, v_padrao FROM item ORDER BY nome OFFSET ? LIMIT ?";
	}

	@Override
	public Object[] getParameters() {
		return params;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new ItemMapped();
	}

}
