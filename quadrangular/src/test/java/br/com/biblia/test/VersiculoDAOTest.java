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
import br.com.biblia.core.dao.VersiculoDAO;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;
import br.com.biblia.test.base.VersiculoBaseTest;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.NONE)
@Transactional
@Rollback
public class VersiculoDAOTest extends VersiculoBaseTest {

	@Autowired
	private VersiculoDAO dao;
	
	@Test
	public void testFindAllAfterDeleteAll() {
		dao.deleteAllInBatch();
		List<Versiculo> list = dao.findAll();
		Assert.assertNotNull(list);
		Assert.assertTrue(list.isEmpty());
	}
	
	@Test
	public void testGetOne() {
		VersiculoKey key = new VersiculoKey(994, 25, 12);
		Versiculo versiculoToSave = dao.getOne(key);
		versiculoToSave.getExpressoes().add( instanceExpressao(1, key, 1, 2, "a", "bla") );
		dao.saveAndFlush( versiculoToSave );
		Versiculo one = dao.getOne( key );
		Assert.assertNotNull(one);
		Assert.assertNotNull( one.getTexto() );
		Assert.assertNotNull( one.getExpressoes() );
		Assert.assertFalse( one.getExpressoes().isEmpty() );
	}
	
	private Expressao instanceExpressao(Integer expressaoId, VersiculoKey k, Integer start, Integer fim, String texto, String descricao) {
		return Expressao
					.builder()
					.key( ExpressaoKey
								.builder()
								.expressaoId(expressaoId)
								.versiculoId(k.getId())
								.capituloId(k.getCapituloId())
								.livroId(k.getLivroId())
								.build() )
					.inicio(start)
					.fim(fim)
					.texto(texto)
					.build();
	}
	
}
