package br.com.dao.db.produto.impl.jdbc.relations;

import org.springframework.jdbc.core.JdbcTemplate;

import br.com.dao.db.produto.impl.jdbc.rowmappers.ProdutoCategoriaMapped;
import br.com.model.entities.manager.Category;
import br.com.model.entities.manager.Product;

public class PopulateCategoriaProduto {

	private static final String QUERY = "SELECT categoria, tipo from produto_categoria WHERE produto=?";
	private JdbcTemplate jdbcTemplate;

	public PopulateCategoriaProduto(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public void populate(Product produto) {
		ProdutoCategoriaRelated pc = jdbcTemplate.queryForObject(QUERY, new ProdutoCategoriaMapped(), produto.getId());
		produto.setCategory  ( new Category(pc.getCategoriaId()) );
		produto.setType( pc.getTipo() );
	}
	
//	public void populateAsCollection(Produto produto) {
//		List<ProdutoCategoriaRelated> lstPC = jdbcTemplate.query("SELECT categoria, tipo from produto_categoria WHERE produto=?", 
//				new ProdutoCategoriaMapped(), produto.getId());
//		
//		if (!CollectionUtils.isEmpty(lstPC)) {
//			Integer categoriaId = lstPC.get(0).getCategoriaId();
//			produto.setCategoria(new Categoria(categoriaId));
//			TipoProduto[] tipos = new TipoProduto[lstPC.size()];
//			for (int i = 0; i < lstPC.size() ; i++) {
//				tipos[i] = lstPC.get(i).getTipo();
//			}
//			produto.setTipos(tipos);
//		}
//		
//	}
	
}
