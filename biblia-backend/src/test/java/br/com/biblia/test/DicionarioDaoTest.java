package br.com.biblia.test;

import java.util.List;

import org.assertj.core.util.Lists;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.biblia.Application;
import br.com.biblia.dao.DicionarioDAO;
import br.com.biblia.model.Dicionario;
import br.com.biblia.model.DicionarioKey;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class)
@Transactional
@Rollback
public class DicionarioDaoTest {

	@Autowired
	private DicionarioDAO dao;
			
	@Test
	public void testFindByKeyIn() {
		List<Dicionario> list = dao.findAll();
		List<DicionarioKey> keys = Lists.newArrayList( list.get(0).getKey(), list.get(1).getKey() );
		List<Dicionario> result = dao.findByKeyIn(keys);
		Assert.assertNotNull( result );
		Assert.assertEquals( 2, result.size() );
		Assert.assertFalse( result.isEmpty() );
	}
	
}
