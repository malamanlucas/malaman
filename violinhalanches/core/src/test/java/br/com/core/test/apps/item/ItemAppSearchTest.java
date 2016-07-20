package br.com.core.test.apps.item;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.core.apps.item.ItemApp;

public class ItemAppSearchTest {

	@Resource(name="itemFacade")
	ItemApp app;
	
	@Test
	public void testCountItensByProductId() {
		app.countItensByProductId(-1);
	}
	
}
