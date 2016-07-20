package br.com.core.test.apps.parameter;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.core.apps.parameter.ParameterApp;
import br.com.model.entities.manager.Parameter;
import br.com.model.enums.ParameterEnum;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

public class ParameterAppSearchTest {
	
	@Resource(name="parameterFacade")
	ParameterApp app;
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void findByKey() {
		Parameter p = new Parameter(ParameterEnum.DELIVERY_PRICE);
		String value = app.findParameter( p.getKey() );
		Assert.assertNotNull( value );
		Assert.assertTrue( value.equals(p.getValue()) );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void searchAll() {
		List<Parameter> parameters = app.search();
		Assert.assertNotNull( parameters );
		Assert.assertTrue( parameters.size() == 3 );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void findDeliveryPrice() {
		BigDecimal deliveryPrice = app.findDeliveryPrice();
		Assert.assertNotNull( deliveryPrice );
		Assert.assertTrue( deliveryPrice.equals( new BigDecimal("3.00")) );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void findInactivityTime() {
		Integer inactivityTime = app.findInactivityTime();
		
		Assert.assertNotNull( inactivityTime );
		Assert.assertTrue( inactivityTime.equals(2) );
		
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	public void findAnswerInactivityTime() {
		Integer inactivityTime = app.findAnswerInactivityTime();
		
		Assert.assertNotNull( inactivityTime );
		Assert.assertTrue( inactivityTime.equals(1) );
		
	}
	
	
}
