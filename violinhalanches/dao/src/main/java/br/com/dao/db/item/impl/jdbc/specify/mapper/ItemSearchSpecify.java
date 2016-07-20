package br.com.dao.db.item.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.item.impl.jdbc.rowmapper.ItemMapped;

public class ItemSearchSpecify implements QueryMapperSpecify {

	public String getSql() {
		return "SELECT id, nome, v_padrao FROM item ORDER BY nome";
	}

	public Object[] getParameters() {
		return null;
	}

	public RowMapper<?> getMapper() {
		return new ItemMapped();
	}

}
