package br.com.biblia.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.biblia.Application;
import br.com.biblia.apps.mapa.MapaApp;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.MOCK)
@Transactional
@Rollback
public class MapaAppTest {
	
	@Autowired
	MapaApp app;
	
	@Sql(executionPhase=ExecutionPhase.BEFORE_TEST_METHOD, statements="DELETE FROM mapa")
	@Test
	public void testCreateDefaultIfNotExistsWhenDoesNotHaveAnyMapa() {
		app.createDefaultIfNotExists(1);
	}
	
}
