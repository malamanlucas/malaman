package br.com.dao.test.jdbc.receiver_method;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Assert;
import org.junit.Test;

import br.com.dao.db.receiver_method.ReceiverMethodDAO;
import br.com.dao.db.receiver_method.impl.jdbc.specify.mapper.ReceiverMethodSearchEnabledSpecify;
import br.com.model.entities.manager.ReceiverMethod;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class ReceiverMethodDAOTest {

	@Resource(name="receiverMethodJDBC")
	private ReceiverMethodDAO dao;
	
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
					  value="/dbunit/receiver_method/expected/insert.xml")
	@Test
	public void insert() {
	
		dao.insert( provideReceiverMethod((byte) 1, true) );
		
	}
	
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
			  value="/dbunit/receiver_method/expected/insert_batch.xml")
	@Test
	public void insertBatch() {
		
		List<ReceiverMethod> list = Arrays.asList( provideReceiverMethod( (byte)1, true  ),
				 	   							   provideReceiverMethod( (byte)2, false ),
				 	   							   provideReceiverMethod( (byte)3, true  ) );
		
		dao.insert( list );
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
				   value="/dbunit/receiver_method/populate_1.xml")
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
	  			   value="/dbunit/receiver_method/expected/update.xml")
	@Test
	public void update() {
		
		dao.update( provideReceiverMethod((byte)1, false) );
		
	}

	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			   value="/dbunit/receiver_method/populate_1.xml")
	@Test
	public void searchAllEnabled() {
		
		List<ReceiverMethod> list = dao.search( new ReceiverMethodSearchEnabledSpecify() );
		
		Assert.assertNotNull( list );
		Assert.assertTrue   ( list.size() == 1 );
		
	}
	
	
	private ReceiverMethod provideReceiverMethod(int id, boolean enabled) {
		ReceiverMethod method = new ReceiverMethod();
		method.setId( id );
		method.setEnabled( enabled );
		method.setDescription( "teste" );
		return method;
	}
	
}
