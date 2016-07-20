package br.com.dao.db.user.impl.jdbc;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.dao.db.general.jdbc.GenericDAO;
import br.com.dao.db.user.UserDAO;
import br.com.dao.db.user.impl.jdbc.relations.UserInsertRelations;
import br.com.dao.db.user.impl.jdbc.rowmappers.AddressMapped;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindWithAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserSearchAuthoritiesSpecify;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.Authority;
import br.com.model.entities.user.User;
import br.com.model.entities.user.UserWEB;

@Scope("prototype")
@Repository("userJDBC")
public class UserJDBCImpl extends GenericDAO<User> implements UserDAO, UserDetailsService {

	private static final String SQL_INSERT_ADDRESS =
		"INSERT INTO endereco (usuario, logradouro, nro, bairro, cep, complemento) "
	  + "VALUES (:userId, :street, :number, :bairro, :cep, :complement)";
	
	private static final String SQL_UPDATE_ADDRESS =
		"UPDATE endereco SET logradouro = :street, nro = :number, "
	  + "complemento = :complement, bairro = :bairro, cep = :cep WHERE usuario = :userId";
	
	private String SQL_INSERT = 
		"INSERT INTO usuario(telefone, nome, senha, email, confiavel, habilitado, qt_pedido, qt_pago, qt_nao_pago) "
	  + "VALUES(:phone, :name, :password, :email, :reliable, :enable, :quantityPedido, :quantityPayed, :quantityCancelled)";
	
	private String SQL_UPDATE =
		"UPDATE usuario SET nome=:name, telefone=:phone, senha=:password, email=:email, "
	  + "habilitado=:enable, confiavel=:reliable, qt_pedido=:quantityPedido, "
	  + "qt_pago=:quantityPayed, qt_nao_pago=:quantityCancelled WHERE id=:id";
	
	public User insert(User user) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		npJdbcTemplate.update(SQL_INSERT, new BeanPropertySqlParameterSource(user), keyHolder, new String[]{"id"} );
		
		user.setId( extractGeneratedKey(keyHolder));
		
		new UserInsertRelations(npJdbcTemplate, jdbcTemplate).createRelations(user);
		Address address = user.getAddress();
		
		if (address != null) {
			address.setUserId( user.getId() );
			insertAddress( address );
		}
		
		return user;
	}

	public void update(User user) {
		String sql = UserSQLUpdate.build( user );
		
		npJdbcTemplate.update(sql, new BeanPropertySqlParameterSource( user ) );
	}

	public void delete(Integer id) {
		jdbcTemplate.update("DELETE FROM usuario WHERE id=?", id);
	}

	@Transactional(propagation=Propagation.NOT_SUPPORTED)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = find( new UserFindWithAddressSpecify(username) );
		if (user == null) 
			throw new UsernameNotFoundException("Login ou senha incorretos");
		UserWEB userCart = new UserWEB( user );
		userCart.setAuthorities( searchAuthorities( user.getId() ) );
		return userCart;
	}
	
	@Transactional(propagation=Propagation.SUPPORTS)
	public List<Authority> searchAuthorities(Integer id) {
		return search( new UserSearchAuthoritiesSpecify( id ), Authority.class);
	}

	public Address insertAddress(Address address) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		npJdbcTemplate.update(SQL_INSERT_ADDRESS, new BeanPropertySqlParameterSource( address ),
							  keyHolder, new String[]{"id"} );
		
		address.setId( extractGeneratedKey(keyHolder) );
		
		return address;
	}

	public void updateAddress(Address address) {
		npJdbcTemplate.update(SQL_UPDATE_ADDRESS, new BeanPropertySqlParameterSource( address ) );
	}

	public Address findAdressById(Integer id) {
		try {
			return jdbcTemplate.queryForObject( "SELECT * FROM endereco WHERE usuario=?" , new AddressMapped(), id);
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}

	public void updateAll(User user) {
		
		npJdbcTemplate.update( SQL_UPDATE, new BeanPropertySqlParameterSource(user) );
		
		new UserInsertRelations(npJdbcTemplate, jdbcTemplate).createRelations(user);
		Address address = user.getAddress();
		if (address != null) {
			updateAddress( address );
		}
		
	}

}
