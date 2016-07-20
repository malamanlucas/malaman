package br.com.dao.db.general.jdbc;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.comum.file.ResourceLoader;
import br.com.comum.log.LogMessage;
import br.com.comum.log.LoggerMessager;
import br.com.comum.test.TesteUtils;
import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.general.jdbc.interfaces.QueryPrimitiveSpecify;
import br.com.dao.factory.DAOFactory;

@Transactional(propagation=Propagation.MANDATORY,isolation=Isolation.READ_UNCOMMITTED)
public abstract class GenericDAO<T> implements LoggerMessager {
	
	public GenericDAO() {
		TesteUtils.showMsg("DAO",this);
	}
	
	private static final String FOTO_DEFAULT_PATH = "sem_imagem.jpg";
	
	private static byte[] bytes;
	
	private LogMessage logger;
	
	protected static byte[] getDefaultPhoto() {
		if (bytes == null) {
			bytes = ResourceLoader.loadAndRetrieveBytes(FOTO_DEFAULT_PATH);
		}
		return bytes;
	}
	
	@Autowired
	protected DAOFactory daoFactory;
	
	@Autowired
	protected JdbcTemplate jdbcTemplate;
	
	@Autowired
	protected NamedParameterJdbcTemplate npJdbcTemplate;
	
	@Autowired
	protected DataSource dataSource;
	
	protected NamedParameterJdbcTemplate getNamedJdbcTemplate() {
		return new NamedParameterJdbcTemplate( dataSource );
	}
	
	protected Integer extractGeneratedKey(KeyHolder keyHolder) {
		return keyHolder
					  .getKey()
					  .intValue();
	}
	
	protected KeyHolder createNewKeyHolder() {
		return new GeneratedKeyHolder();
	}
	
	protected SimpleJdbcInsert createSimpleJdbcInsert() {
		return new SimpleJdbcInsert( jdbcTemplate );
	}
	
	@SuppressWarnings("unchecked")
	public List<T> search(QueryMapperSpecify specify) {
		return (List<T>) jdbcTemplate.query(specify.getSql(), specify.getMapper(), specify.getParameters());
	}
	
	
	@SuppressWarnings("unchecked")
	protected <X> List<X> search(QueryMapperSpecify specify, Class<X> clazz) {
		return (List<X>) jdbcTemplate.query(specify.getSql(), specify.getMapper(), specify.getParameters());
	}

	@SuppressWarnings("unchecked")
	public T find(QueryMapperSpecify specify) {
		try {
			return (T) jdbcTemplate.queryForObject(specify.getSql(), specify.getMapper(), specify.getParameters());
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}

	public List<?> search(QueryPrimitiveSpecify specify) {
		return jdbcTemplate.queryForList(specify.getSql(), specify.getReturnedType(), specify.getParameters());
	}
	
	public Object find(QueryPrimitiveSpecify specify) {
		return jdbcTemplate.queryForObject(specify.getSql(), specify.getReturnedType(), specify.getParameters());
	}
	
	public void setDataSource(DataSource ds) {
		jdbcTemplate = new JdbcTemplate( ds );
		npJdbcTemplate = new NamedParameterJdbcTemplate( ds );
	}
	
	public void setLog(LogMessage logger) {
		this.logger = logger;
	}
	
	public LogMessage getLog() {
		return this.logger;
	}
	
	protected void update(Object object, String sql) {
		npJdbcTemplate.update( sql, new BeanPropertySqlParameterSource(object) );
	}
	
	protected void batchUpdate(List<?> list, String sql) {
		SqlParameterSource[] lstParam = new BeanPropertySqlParameterSource[list.size()];
		for (int i = 0; i < list.size() ; i++) {
			Object o = list.get(i);
			lstParam[i] = new BeanPropertySqlParameterSource( o );
		}
		
		npJdbcTemplate.batchUpdate( sql, lstParam );
	}
	
	
}
