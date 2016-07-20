package br.com.dao.test.jdbc;

import org.junit.Test;
import org.springframework.test.context.transaction.TransactionConfiguration;

import com.github.springtestdbunit.annotation.DatabaseOperation;
import com.github.springtestdbunit.annotation.DatabaseSetup;

@TransactionConfiguration(transactionManager="transactionManager",defaultRollback=false)
@DatabaseSetup(type=DatabaseOperation.DELETE_ALL,value="/dbunit/delete_all.xml")
public class DeleteAllTest {
	
	@Test
	public void deleteAll() {}
	
}
