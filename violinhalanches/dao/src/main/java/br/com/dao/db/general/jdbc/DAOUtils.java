package br.com.dao.db.general.jdbc;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import br.com.comum.config.ConfigProperties;

public final class DAOUtils {
	
	public static JdbcTemplate getJdbcTemplate(DataSource source) {
		return new JdbcTemplate(source);
	}
	
	public static DataSource getDataSource(String url, String username, String password, String driver) {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUrl( url );
		dataSource.setUsername( username );
		dataSource.setPassword( password );
		dataSource.setDriverClassName( driver );
		return dataSource;
	}
	
	public static DataSource dataSourceForLocalhost() {
		String url      = ConfigProperties.getJDBCUrl();
		String username = ConfigProperties.getJDBCUsername();
		String password = ConfigProperties.getJDBCPassword();
		return getDataSource( url, username, password, "org.postgresql.Driver" );
	}
}
