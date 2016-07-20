package br.com.dao.db.produto.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.produto.impl.jdbc.rowmappers.ProdutoMapped;
import br.com.model.enums.CategoryType;

public class ProductSearchPaginationByCategoryTypeSpecify implements QueryMapperSpecify {

	private static final String QUERY = 
			"SELECT p.id, p.nome, p.valor, p.descricao, p.categoria, p.tipo, p.habilitado FROM produto p "+
			"INNER JOIN categoria         c  ON (p.categoria = c.id) "+
			"WHERE c.tipo = ? ORDER BY p.nome OFFSET ? LIMIT ?";
	private Object[] param;
	
	public ProductSearchPaginationByCategoryTypeSpecify(CategoryType type, Integer start, Integer qtd) {
		param = new Object[]{ type.getCode(), start, qtd };
	}
	
	public String getSql() {
		return QUERY;
	}

	@Override
	public Object[] getParameters() {
		return param;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new ProdutoMapped();
	}

}
