package br.com.biblia.test;

import java.util.List;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.quadrangular.Application;
import br.com.quadrangular.core.dao.VersiculoDAO;
import br.com.quadrangular.core.model.versiculo.Versiculo;
import br.com.quadrangular.core.model.versiculo.VersiculoKey;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.NONE)
@Transactional
public class VersiculoDAOTest {

	@Autowired
	private VersiculoDAO dao;
	
	@Test @Ignore
	public void testFindAll() {
		List<Versiculo> list = dao.findAll();
		Assert.assertNotNull(list);
	}
	
	@Test
	public void testGetOne() {
		Versiculo one = dao.getOne( new VersiculoKey(994, 25, 12));
		Assert.assertNotNull(one);
		Assert.assertNotNull( one.getFormatado() );
		Assert.assertNotNull( one.getTexto() );
		Assert.assertNotNull( one.getExpressoes() );
		Assert.assertFalse( one.getExpressoes().isEmpty() );
		System.out.println(one.getExpressoes());
	}
	
}
