package br.com.dao.db.novidade.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.produto.impl.jdbc.rowmappers.ProdutoMapped;

public class NovidadeSearchProductSpecify implements QueryMapperSpecify {

	private static final String QUERY = "SELECT p.id, p.nome, p.valor, p.tipo, "+
										"p.categoria, p.descricao, p.habilitado FROM novidade n "+
										"LEFT JOIN produto p ON (p.id = n.produto) "
									  + "WHERE p.habilitado=true";	
	
	public String getSql() {
		return QUERY;
	}

	public Object[] getParameters() {
		return null;
	}

	public RowMapper<?> getMapper() {
		return new ProdutoMapped();
	}
	
}
