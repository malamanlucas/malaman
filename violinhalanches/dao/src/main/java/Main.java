import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;

import br.com.dao.db.general.jdbc.DAOUtils;
import br.com.dao.db.pedido.impl.jdbc.PedidoJDBCImpl;
import br.com.dao.db.text_home.TextHomeDAO;
import br.com.dao.db.text_home.impl.jdbc.TextHomeJDBCImpl;
import br.com.dao.db.user.UserDAO;
import br.com.dao.db.user.impl.jdbc.UserJDBCImpl;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindByIdWithoutAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindByPhoneWithoutAddressSpecify;
import br.com.dao.db.user.impl.jdbc.specify.mapper.UserFindWithAddressSpecify;
import br.com.model.entities.manager.TextHome;
import br.com.model.entities.user.Pedido;
import br.com.model.entities.user.User;
import br.com.providers.EntityProviderFactory;


public class Main {

	private static final Logger logger = LoggerFactory.getLogger( "root" );
	
	public static void main(String[] args) {
		
		DataSource source = DAOUtils.dataSourceForLocalhost();
		
		UserJDBCImpl daoT = new UserJDBCImpl();
		daoT.setDataSource(source);;
		
		UserDAO dao = daoT;
		
		User find = dao.find( new UserFindByPhoneWithoutAddressSpecify("3") );
		
		System.out.println(find );
	}
	
}
