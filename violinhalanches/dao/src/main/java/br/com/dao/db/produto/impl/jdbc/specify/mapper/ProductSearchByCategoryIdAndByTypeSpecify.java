package br.com.dao.db.produto.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.produto.impl.jdbc.rowmappers.ProdutoMapped;
import br.com.model.enums.ProductType;

public class ProductSearchByCategoryIdAndByTypeSpecify implements QueryMapperSpecify {

	private static final String QUERY = 
			"SELECT p.id, p.nome, p.valor, p.descricao, p.categoria, p.tipo, p.habilitado FROM produto p "+
			"INNER JOIN categoria         c  ON (p.categoria = c.id) "+
			"WHERE p.habilitado=true AND p.categoria = ? AND p.tipo = ? ORDER BY p.nome";
	
	private Object[] param;
	
	public ProductSearchByCategoryIdAndByTypeSpecify(Integer id, ProductType tipo) {
		param = new Object[]{ id, tipo.getCode() };
	}
	
	public String getSql() {
		return QUERY;
	}

	public Object[] getParameters() {
		return param;
	}

	public RowMapper<?> getMapper() {
		return new ProdutoMapped();
	}

}
