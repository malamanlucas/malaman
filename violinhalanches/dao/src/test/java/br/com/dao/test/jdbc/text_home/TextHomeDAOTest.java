package br.com.dao.test.jdbc.text_home;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.text_home.TextHomeDAO;
import br.com.dao.db.text_home.impl.jdbc.specify.mapper.TextHomeFindSpecify;
import br.com.model.entities.manager.TextHome;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/texto_home/populate_1.xml")
public class TextHomeDAOTest {

	@Resource(name="textHomeJDBC")
	private TextHomeDAO dao;

	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
					  value="/dbunit/texto_home/expected/update.xml")
	@Test
	public void update() {
		TextHome t = new TextHome();
		t.setBody("a");
		t.setTitle("a");
		dao.update(t);
	}

	@Test
	public void findTextHome() {
		TextHome find = dao.find( new TextHomeFindSpecify() );
		Assert.assertTrue( "123".equals( find.getTitle() ));
		Assert.assertTrue( "123".equals( find.getBody() ));
	}
	
	
}
