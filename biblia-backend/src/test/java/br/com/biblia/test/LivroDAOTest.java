package br.com.biblia.test;

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
import br.com.biblia.dao.LivroDAO;
import br.com.biblia.enums.LivroEnum;
import br.com.biblia.test.base.VersiculoBaseTest;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.MOCK)
@Transactional
@Rollback
public class LivroDAOTest extends VersiculoBaseTest {

	@Autowired
	private LivroDAO dao;
	
	@Test
	public void testGetQtdCapitulosByLivroNome() {
		Integer qtdCapitulos = dao.getQtdCapitulosByNome( LivroEnum.MATEUS.getNomeNoBD() );
		Assert.assertEquals(new Integer(28), qtdCapitulos);
	}
	
	@Test
	public void testGetQtdCapitulosByLivroId() {
		Integer qtdCapitulos = dao.getQtdCapitulosById( dao.findByNome(LivroEnum.MATEUS.getNomeNoBD()).getId() );
		Assert.assertEquals(new Integer(28), qtdCapitulos);
	}
	
}
