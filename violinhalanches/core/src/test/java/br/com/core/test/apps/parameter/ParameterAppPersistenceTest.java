package br.com.core.test.apps.parameter;

import java.util.Arrays;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.core.apps.parameter.ParameterApp;
import br.com.model.entities.manager.Parameter;
import br.com.model.enums.ParameterEnum;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class ParameterAppPersistenceTest {

	@Resource(name="parameterFacade")
	private ParameterApp app;
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/update.xml")
	public void update() {
		Parameter parametro = new Parameter(ParameterEnum.DELIVERY_PRICE.getKey(), "99");
		app.update( parametro );
	}
	
	@Test
	@DatabaseSetup(value="/dbunit/parametro/populate_1.xml", type=DatabaseOperation.CLEAN_INSERT)
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT, value="/dbunit/parametro/expected/update.xml")
	public void updateBatch() {
		Parameter parametro = new Parameter(ParameterEnum.DELIVERY_PRICE.getKey(), "99");
		app.update( Arrays.asList( parametro ) );
	}
	
	
}
