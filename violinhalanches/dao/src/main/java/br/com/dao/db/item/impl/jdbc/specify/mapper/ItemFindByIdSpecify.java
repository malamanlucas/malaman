package br.com.dao.db.item.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.item.impl.jdbc.rowmapper.ItemMapped;

public class ItemFindByIdSpecify implements QueryMapperSpecify {

	private Object[] param;
	
	public ItemFindByIdSpecify(Integer id) {
		param = new Object[]{id};
	}

	public String getSql() {
		return "SELECT id, nome, v_padrao FROM item WHERE id=?";
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new ItemMapped();
	}

}
