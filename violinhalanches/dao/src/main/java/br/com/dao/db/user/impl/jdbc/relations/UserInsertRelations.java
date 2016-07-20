package br.com.dao.db.user.impl.jdbc.relations;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;

import br.com.model.entities.user.User;
import br.com.model.enums.Profile;

public class UserInsertRelations {

	private static String SQL_PERFIL_RELATIONS = 
		"INSERT INTO usuario_papel(papel, usuario)"
	  + "VALUES(:role, :user)";
	
	private NamedParameterJdbcTemplate npJdbcTemplate;

	private JdbcTemplate jdbcTemplate;
	
	public UserInsertRelations(NamedParameterJdbcTemplate npJdbcTemplate, JdbcTemplate jdbcTemplate) {
		this.npJdbcTemplate = npJdbcTemplate;
		this.jdbcTemplate   = jdbcTemplate;
	}
	
	public void createRelations(User user) {
		
		Integer userId = user.getId();
		Profile[] profiles = user.getProfiles();
		
		if (profiles == null)
			return;
		
		Integer id = user.getId();
		jdbcTemplate.update("DELETE FROM usuario_papel WHERE usuario=?", id);
		
		SqlParameterSource[] params = new BeanPropertySqlParameterSource[profiles.length];
		for (int i = 0; i < profiles.length; i++) {
			String role = profiles[i].getDescription();
			UserProfile userProfile = new UserProfile( role, userId );
			params[i] = new BeanPropertySqlParameterSource( userProfile );
		}
		
		npJdbcTemplate.batchUpdate( SQL_PERFIL_RELATIONS, params );
		
	}
	
	
}
