package br.com.dao.db.produto.impl.jdbc;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.produto.ProductDAO;
import br.com.dao.db.produto.impl.jdbc.relations.ProdutoInsertRelations;
import br.com.dao.db.produto.impl.jdbc.specify.primitive.ProductFindPhotoByNameSpecify;
import br.com.dao.db.produto.impl.jdbc.specify.primitive.ProductFindPhotoSpecify;
import br.com.model.entities.manager.Product;

@Scope("prototype")
@Repository("produtoJDBC")
public class ProductJDBCImpl extends GenericDAO<Product> implements ProductDAO {

	private static final String SQL_INSERT = 
			"INSERT INTO produto(nome, valor, descricao,foto, tipo, categoria) "
		  + "VALUES(:name, :price, :description, :photoAsBytes, :typeAsCode, :categoryId)";
	
	public Product insert(Product t) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		npJdbcTemplate.update(SQL_INSERT, new BeanPropertySqlParameterSource(t), keyHolder, new String[]{"id"});
		
		t.setId( extractGeneratedKey(keyHolder) );
		
		new ProdutoInsertRelations(npJdbcTemplate).createRelations(t);
		return t;
	}
	
	public void update(Product t) {
		String sql = ProdutoSQLUpdate.build(t);
		npJdbcTemplate.update(sql, new BeanPropertySqlParameterSource(t) );
	}
	
	public void delete(Integer k) {
		jdbcTemplate.update("DELETE FROM produto WHERE id=?", k);
	}
	
	public void delete(String name) {
		jdbcTemplate.update("DELETE FROM produto WHERE nome=?", name);
	}

	public byte[] findFoto(Integer id) {
		try {
			return (byte[]) find( new ProductFindPhotoSpecify(id) );
		} catch (EmptyResultDataAccessException e) {
			return getDefaultPhoto();
		}
	}

	@Override
	public byte[] findFoto(String nome, Integer type) {
		try {
			return (byte[]) find( new ProductFindPhotoByNameSpecify(nome, type) );
		} catch (EmptyResultDataAccessException e) {
			return getDefaultPhoto();
		}
	}
	
	

}
