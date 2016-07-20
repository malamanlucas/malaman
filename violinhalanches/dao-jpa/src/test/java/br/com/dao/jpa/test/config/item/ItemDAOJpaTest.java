package br.com.dao.jpa.test.config.item;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.violinhalanches.dao.jpa.item.ItemDAOJpa;

public class ItemDAOJpaTest {
	
	@Autowired
	ItemDAOJpa dao;
	
	@Test
	public void findAll() {
		
//		List<Item> list = dao.findAll();
//		
//		System.out.println( list );
	}
	
}
