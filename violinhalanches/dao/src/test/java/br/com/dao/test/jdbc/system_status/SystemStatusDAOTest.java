package br.com.dao.test.jdbc.system_status;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.dao.db.system_status.SystemStatusDAO;
import br.com.model.entities.manager.SystemStatus;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.ExpectedDatabase;
import com.github.springtestdbunit.assertion.DatabaseAssertionMode;

public class SystemStatusDAOTest {

	@Resource(name="systemStatusJDBC")
	private SystemStatusDAO dao;
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			value="/dbunit/system_status/populate_1.xml")
	@Test
	public void find() {
		
		dao.find();
	}
	
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
					  value="/dbunit/system_status/expected/insert.xml")
	@Test
	public void insert() {
		
		SystemStatus systemStatus = new SystemStatus();
		systemStatus.setSaleOpened   ( true );
		systemStatus.setTrailerOpened( true );
		systemStatus.setActiveOperator( true );
		dao.insert( systemStatus );
		
	}
	
	@DatabaseSetup(type=DatabaseOperation.CLEAN_INSERT,
			value="/dbunit/system_status/populate_1.xml")
	@ExpectedDatabase(assertionMode=DatabaseAssertionMode.NON_STRICT,
	  		value="/dbunit/system_status/expected/update.xml")
	@Test
	public void update() {
		SystemStatus systemStatus = new SystemStatus();
		systemStatus.setSaleOpened(true);
		dao.update( systemStatus );
	}
	
}
