package br.com.biblia.test;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.biblia.Application;
import br.com.biblia.core.apps.expressao.ExpressaoApp;
import br.com.biblia.core.dao.ExpressaoDAO;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoDicionario;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.ExpressaoMapa;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.test.base.ExpressaoBaseTest;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.NONE)
@Transactional
@Rollback
public class ExpressaoAppTest extends ExpressaoBaseTest {

	@Autowired
	private ExpressaoApp app;

	@Autowired
	private ExpressaoDAO dao;
	
	@Test
	public void testSaveWhenDoesNotHaveAnyExpression() {
		
		Versiculo mateus1_1 = getMateus1_1();
		
		Expressao expressao = addOneExpressaoDicionario( saveDicionario(), mateus1_1.getKey() );
		addOneExpressaoMapa(expressao);
		
		expressao.getKey().setExpressaoId(null);
		
		Assert.assertNull( expressao.getKey().getExpressaoId() );
		
		app.save(expressao);
		
		Expressao expressaoInBD = dao.getOne( expressao.getKey() );
		
		Assert.assertNotNull(expressaoInBD);
		Assert.assertNotNull(expressaoInBD.getDescricao());
		Assert.assertNotNull(expressaoInBD.getTexto());
		Assert.assertNotNull(expressaoInBD.getFim());
		Assert.assertNotNull(expressaoInBD.getInicio());
		Assert.assertNotNull(expressaoInBD.getFim());
		
		assertExpressaoKey( expressaoInBD.getKey() );
		Assert.assertEquals( new Integer(1), expressaoInBD.getKey().getExpressaoId() );
		
		assertDicionarios( expressao.getDicionarios() );
		assertMapas( expressao.getMapas() );
		
	}

	private void assertMapas(List<ExpressaoMapa> mapas) {
		Assert.assertNotNull( mapas );
		for (ExpressaoMapa mapa : mapas) {
			Assert.assertNotNull(mapa);
			Assert.assertNotNull(mapa.getKey());
			assertExpressaoKey(mapa.getKey().getExpressaoKey());
			Assert.assertNotNull(mapa.getKey().getId());
		}
	}

	private void assertDicionarios(List<ExpressaoDicionario> dicionarios) {
		Assert.assertNotNull( dicionarios );
		for (ExpressaoDicionario dicionario : dicionarios) {
			Assert.assertNotNull( dicionario );
			Assert.assertNotNull( dicionario.getKey() );
			assertExpressaoKey( dicionario.getKey().getExpressaoKey() );
			Assert.assertNotNull( dicionario.getKey().getId() );
			Assert.assertNotNull( dicionario.getKey().getIdioma() );
		}
	}

	private void assertExpressaoKey(ExpressaoKey key) {
		Assert.assertNotNull(key);
		Assert.assertNotNull(key.getCapituloId());
		Assert.assertNotNull(key.getExpressaoId());
		Assert.assertNotNull(key.getLivroId());
		Assert.assertNotNull(key.getVersiculoId());
	}
	
}
