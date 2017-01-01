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
import br.com.biblia.core.apps.versiculo.VersiculoApp;
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
public class VersiculoAppTest extends VersiculoBaseTest {

	@Autowired
	private VersiculoDAO dao;
	
	@Autowired
	private VersiculoApp app;
	
	@Test
	public void testDeleteByKey() {
	    
		Versiculo mateus1_1 = getMateus1_1();
		app.deleteByKey( mateus1_1.getKey() );
	    Assert.assertNull( dao.findOne(mateus1_1.getKey()) );
	}
	
	@Test
	public void testGetVersiculoMontado() {
		Versiculo mateus1_1 = getMateus1_1();
		
		VersiculoKey k = mateus1_1.getKey();
		
		List<Expressao> expressoes = mateus1_1.getExpressoes();

		expressoes.add( instanceExpressao(1, k, 9, 16, "geração") ); 
		expressoes.add( instanceExpressao(2, k, 17, 25, "de Jesus") ); 
		expressoes.add( instanceExpressao(3, k, 49, 64, "Filho de Abraão") ); 
		
		dao.saveAndFlush(mateus1_1);
		
		mateus1_1 = dao.findOne(k);
		
		String oldExpected = "Livro da geração de Jesus Cristo, Filho de Davi, Filho de Abraão.";
		String newExpected = "Livro da <span class=\"texto\" dic=\"0\">geração</span> <span class=\"texto\" dic=\"1\">de Jesus</span> Cristo, Filho de Davi, <span class=\"texto\" dic=\"2\">Filho de Abraão</span>.";
		
		Assert.assertEquals(oldExpected, mateus1_1.getLimpo());
		Assert.assertEquals(newExpected, mateus1_1.getVersiculoMontado());
		
	}

	private Expressao instanceExpressao(Integer expressaoId, VersiculoKey k, Integer start, Integer fim, String texto) {
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
