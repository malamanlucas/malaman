package br.com.dao.db.produto.impl.jdbc.rowmappers;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.produto.impl.jdbc.relations.ProdutoCategoriaRelated;
import br.com.model.enums.ProductType;

public class ProdutoCategoriaMapped implements RowMapper<ProdutoCategoriaRelated>{

	@Override
	public ProdutoCategoriaRelated mapRow(ResultSet rs, int rowNum)
			throws SQLException {
		ProdutoCategoriaRelated pc = new ProdutoCategoriaRelated();
		pc.setCategoriaId(rs.getInt("categoria"));
		pc.setTipo(ProductType.fromCode(rs.getInt("tipo")));
		return pc;
	}

}
