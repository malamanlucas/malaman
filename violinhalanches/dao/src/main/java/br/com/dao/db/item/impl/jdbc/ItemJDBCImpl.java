package br.com.dao.db.item.impl.jdbc;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.item.ItemDAO;
import br.com.dao.db.item.impl.jdbc.specify.mapper.ItemSearchByProductIdSpecify;
import br.com.dao.db.item.impl.jdbc.specify.primitive.ItemFindPhotoSpecify;
import br.com.model.entities.manager.Item;

@Scope(value="prototype", proxyMode=ScopedProxyMode.TARGET_CLASS)
@Repository("itemJDBC")
@Loggable
public class ItemJDBCImpl extends GenericDAO<Item> implements ItemDAO {

	private static final String INSERT = "INSERT INTO item(nome,v_padrao,foto) "
									   + "values(:name, :price, :photoAsBytes)";

	public Item insert(Item i) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		
		npJdbcTemplate.update(INSERT, new BeanPropertySqlParameterSource(i),
				 			  keyHolder, new String[]{"id"});
		
		i.setId( extractGeneratedKey(keyHolder) );
		return i;
	}

	public void update(Item i) {
		String sql = ItemSQLUpdate.build(i);
		
		npJdbcTemplate.update(sql, new BeanPropertySqlParameterSource(i));
	}

	public void delete(Integer id) {
		jdbcTemplate.update("DELETE FROM item WHERE id=?", id);
	}

	public List<Item> search(Integer produtoId) {
		return search( new ItemSearchByProductIdSpecify(produtoId) );
	}

	public void insert(final List<Item> lstItem) {
		batchUpdate( lstItem, INSERT );
	}

	@Override
	public byte[] findFoto(Integer id) {
		try {
			return (byte[]) find( new ItemFindPhotoSpecify(id) );
		} catch (EmptyResultDataAccessException e) {
			return getDefaultPhoto();
		}
	}

}
