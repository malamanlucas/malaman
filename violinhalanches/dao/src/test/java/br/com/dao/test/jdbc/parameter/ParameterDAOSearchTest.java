package br.com.dao.test.jdbc.parameter;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.parameter.ParameterDAO;
import br.com.dao.db.parameter.impl.jdbc.specify.mapper.ParameterFindValueByKeySpecify;
import br.com.dao.db.parameter.impl.jdbc.specify.mapper.ParameterSearchSpecify;
import br.com.model.entities.manager.Parameter;
import br.com.model.enums.ParameterEnum;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;


public class ParameterDAOSearchTest {

	@Resource(name="parameterJDBC")
	ParameterDAO dao;
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void findByKey() {
		Parameter p = new Parameter(ParameterEnum.DELIVERY_PRICE);
		String value = (String) dao.find( new ParameterFindValueByKeySpecify(p.getKey()) );
		Assert.assertNotNull( value );
		Assert.assertTrue( value.equals(p.getValue()) );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void searchAll() {
		List<Parameter> parameters = dao.search( new ParameterSearchSpecify() );
		Assert.assertNotNull( parameters );
		Assert.assertTrue( parameters.size() == 3 );
	}
}
