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
import br.com.biblia.core.dao.CapituloDAO;
import br.com.biblia.core.dao.LivroDAO;
import br.com.biblia.core.dao.VersiculoDAO;
import br.com.biblia.core.enums.LivroEnum;
import br.com.biblia.core.enums.TipoExpressao;
import br.com.biblia.core.model.Livro;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.NONE)
@Transactional
@Rollback
public class VersiculoAppTest {

	@Autowired
	private LivroDAO livroDAO;
	
	@Autowired
	private CapituloDAO capituloDAO;
	
	@Autowired
	private VersiculoDAO dao;
	
	@Autowired
	private VersiculoApp app;
	
	@Test
	public void testGetVersiculoMontado() {
		Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
		
		Versiculo mateus1_1 = dao.search(mateus.getId(), 1).get(0);
		
		VersiculoKey k = mateus1_1.getKey();
		
		List<Expressao> expressoes = mateus1_1.getExpressoes();
		
		expressoes.add( new Expressao(new ExpressaoKey(1, k.getId(), k.getCapituloId(), k.getLivroId()), 9, 16, "3345", "geração", null, TipoExpressao.DICIONARIO, null) ); 
		expressoes.add( new Expressao(new ExpressaoKey(2, k.getId(), k.getCapituloId(), k.getLivroId()), 17, 25, "1234", "de Jesus", null,TipoExpressao.DICIONARIO, null) ); 
		expressoes.add( new Expressao(new ExpressaoKey(3, k.getId(), k.getCapituloId(), k.getLivroId()), 49, 64, "9999", "Filho de Abraão", null, TipoExpressao.DICIONARIO, null) ); 
		
		dao.saveAndFlush(mateus1_1);
		
		mateus1_1 = dao.findOne(k);
		
		String oldExpected = "Livro da geração de Jesus Cristo, Filho de Davi, Filho de Abraão.";
		String newExpected = "Livro da <span class=\"texto\" dic=\"3345\">geração</span> <span class=\"texto\" dic=\"1234\">de Jesus</span> Cristo, Filho de Davi, <span class=\"texto\" dic=\"9999\">Filho de Abraão</span>.";
		
		Assert.assertEquals(oldExpected, mateus1_1.getLimpo());
		Assert.assertEquals(newExpected, mateus1_1.getVersiculoMontado());
		
	}
	
	
}
