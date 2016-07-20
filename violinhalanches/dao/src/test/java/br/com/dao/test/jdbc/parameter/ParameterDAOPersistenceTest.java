package br.com.dao.test.jdbc.parameter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.dao.db.parameter.ParameterDAO;
import br.com.model.entities.manager.Parameter;
import br.com.model.enums.ParameterEnum;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class ParameterDAOPersistenceTest {

	@Resource(name="parameterJDBC")
	ParameterDAO dao;
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/insert.xml")
	public void insert() {
		dao.insert( new Parameter(ParameterEnum.DELIVERY_PRICE) );
	}
	
	@Test
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/insert_batch.xml")
	public void insertBatch() {
		List<Parameter> parameters = new ArrayList<>();
		for (ParameterEnum p : ParameterEnum.values()) {
			parameters.add( new Parameter(p) );
		}
		dao.insert( parameters );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/update.xml")
	public void update() {
		Parameter parametro = new Parameter(ParameterEnum.DELIVERY_PRICE.getKey(), "99");
		dao.update(parametro);
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/update.xml")
	public void updateBatch() {
		Parameter parametro = new Parameter(ParameterEnum.DELIVERY_PRICE.getKey(), "99");
		dao.update( Arrays.asList( parametro ) );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/delete.xml")
	public void deleteAll() {
		dao.deleteAll();
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/delete.xml")
	public void delete() {
		dao.delete( ParameterEnum.DELIVERY_PRICE.getKey() );
	}
	
}
