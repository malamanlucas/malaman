package br.com.web.listeners;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;

import br.com.comum.config.ConfigProperties;
import br.com.dao.db.general.jdbc.DAOUtils;
import br.com.dao.db.parameter.impl.jdbc.ParameterJDBCImpl;
import br.com.dao.db.payment_method.impl.jdbc.PaymentMethodJDBCImpl;
import br.com.dao.db.receiver_method.impl.jdbc.ReceiverMethodJDBCImpl;
import br.com.dao.db.system_status.impl.jdbc.SystemStatusJDBCImpl;
import br.com.dao.db.text_home.impl.jdbc.TextHomeJDBCImpl;
import br.com.dao.db.user.impl.jdbc.UserJDBCImpl;
import br.com.model.entities.manager.Parameter;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.ReceiverMethod;
import br.com.model.entities.manager.SystemStatus;
import br.com.model.entities.manager.TextHome;
import br.com.model.entities.user.User;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;
import br.com.model.enums.ParameterEnum;
import br.com.model.enums.Profile;
import br.com.model.exception.SystemException;

public class ContextOnDeployListener implements ServletContextListener {
	
	protected static Logger logger = LoggerFactory.getLogger( "root" );
	
	public void contextDestroyed(ServletContextEvent event) {}

	public void contextInitialized(ServletContextEvent event) {
		Locale.setDefault( new Locale("pt", "BR"));
		DataSource ds = DAOUtils.dataSourceForLocalhost();
		try {
			insertTextHome( ds );
			logger.info( "Texto Home inseridos com sucesso" );
		} catch ( DuplicateKeyException e ) {
			logger.info( "Texto Home já foram inseridos" );
		}
		
		try {
			insertSystemStatus( ds );
			logger.info( "System Status inseridos suecesso" );
		} catch ( DuplicateKeyException e ){
			logger.info( "System Status já foram inseridos" );
		}
		
		insertMethods(ds);
		insertParameters(ds);
		
		try {
			logger.info("Inserindo Gestor...");
			insertGestor( ds );
			logger.info("Gestor inserido com sucesso!");
		} catch (Exception e) {
			logger.info("Gestor já inserido");
		}
		 
	}
	
	private void insertGestor(DataSource ds) {
		
		UserJDBCImpl userJDBCImpl = new UserJDBCImpl();
		userJDBCImpl.setDataSource( ds );
		
		
		User user = new User();
		user.setName    ( "Gestor" );
		user.setPhone   ( ConfigProperties.getGestorUser() );
		user.setPassword( ConfigProperties.getGestorPassword() );
		user.setEmail   ( "gestor@gestor.com" );
		user.setEnable  (true);
		user.setReliable(true);
		user.addProfiles( Profile.USER, Profile.MANAGER, Profile.OPERATOR );
		
		user.encriptPassword();
		userJDBCImpl.insert(user);
		
	}

	private void insertMethods(DataSource ds) {
		try {
			insertPaymentMethods(ds);
			logger.info( "Meios de Pagamento inseridos com sucesso" );
		} catch ( Exception e ) {
			logger.info( "Meios de Pagamento já foram isneridos" );
		}
		
		try {
			insertReceiverMethods(ds);
			logger.info( "Meios de Recebimento inseridos com sucesso" );
		} catch ( Exception e ) {
			logger.info( "Meios de Recebimento já foram isneridos" );
		}
	}
	
	private void insertPaymentMethods(DataSource ds) {
		PaymentMethodJDBCImpl paymentDAO = new PaymentMethodJDBCImpl();
		paymentDAO.setDataSource( ds );
		
		List<PaymentMethod> methods = new ArrayList<PaymentMethod>();
		for (MeioPagamento meio : MeioPagamento.values()) {
			PaymentMethod paymentMethod = new PaymentMethod(meio);
			paymentMethod.setEnabled( true );
			methods.add( paymentMethod );
		}
		
		paymentDAO.insert( methods );
	}
	
	private void insertReceiverMethods(DataSource ds) {
		ReceiverMethodJDBCImpl receiverDAO = new ReceiverMethodJDBCImpl();
		receiverDAO.setDataSource( ds );
		
		List<ReceiverMethod> methods = new ArrayList<ReceiverMethod>();
		for (MeioRecebimento meio : MeioRecebimento.values()) {
			ReceiverMethod receiverMethod = new ReceiverMethod(meio);
			receiverMethod.setEnabled( true );
			methods.add( receiverMethod );
		}
		
		receiverDAO.insert( methods );
	}

	private void insertSystemStatus(DataSource ds) {
		SystemStatusJDBCImpl dao = new SystemStatusJDBCImpl();
		dao.setDataSource( ds );
		
		try {
			logger.info("Inserindo System Status...");
			dao.insert( new SystemStatus() );
			logger.info("Inserido com sucesso");
		} catch (SystemException e) {
			if (e.getCause() instanceof DuplicateKeyException) {
				logger.info("System Status já inserido");
			}
		}
	}
	
	private void insertParameters(DataSource ds) {
		ParameterJDBCImpl dao = new ParameterJDBCImpl();
		dao.setDataSource(ds);
		
		List<Parameter> parameters = new ArrayList<Parameter>();
		try {
			logger.info("Inserindo parametros...");
			dao.deleteAll();
			for (ParameterEnum p : ParameterEnum.values()) {
				parameters.add( new Parameter(p) );
			}
			dao.insert( parameters );
			logger.info("Inseridos parametros com sucesso!");
		} catch (Exception e) {
			logger.info( e.getMessage() );;
		}
		
	}

	private void insertTextHome(DataSource ds) {
		TextHomeJDBCImpl textHomeDAO = new TextHomeJDBCImpl();
		textHomeDAO.setDataSource( ds );
		try {
			logger.info("Inserindo textHome...");
			textHomeDAO.insert( new TextHome() );
			logger.info("Inserido com sucesso");
		} catch (SystemException e) {
			if (e.getCause() instanceof DuplicateKeyException) {
				logger.info("TextHome já inserido");
			}
		}
	}

}
