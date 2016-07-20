package br.com.dao.jpa.test.config;

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.comum.log.LogMessage;
import br.com.comum.log.LoggerMessager;

import com.github.springtestdbunit.DbUnitTestExecutionListener;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/spring-data-jpa.xml")
@TransactionConfiguration(transactionManager="transactionManager",defaultRollback=true)
@Transactional(propagation=Propagation.NESTED)
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class,
	DirtiesContextTestExecutionListener.class,
	TransactionalTestExecutionListener.class,
	DbUnitTestExecutionListener.class })
public abstract class AbstractTestDAOConfig implements LoggerMessager {
	
	private LogMessage message;
	
	public void setLog(LogMessage message) {
		this.message = message;
	}
	
	public LogMessage getLog() {
		return this.message;
	}
	
}
