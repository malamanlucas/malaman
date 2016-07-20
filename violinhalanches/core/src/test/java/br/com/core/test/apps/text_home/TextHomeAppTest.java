package br.com.core.test.apps.text_home;

import javax.annotation.Resource;

import org.junit.Test;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

import br.com.core.apps.text_home.TextHomeApp;
import br.com.model.entities.manager.TextHome;

public class TextHomeAppTest {

	@Resource(name="textHomeFacade")
	private TextHomeApp app;
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT, value="/dbunit/texto_home/populate_1.xml")	
	@Test
	public void find() {
		app.find();
	}
	
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
					  value="/dbunit/texto_home/expected/update.xml")
	@Test
	public void insert() {
		TextHome textHome = new TextHome();
		textHome.setTitle("a");
		textHome.setBody("a");
		try {
			app.insert(textHome);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
