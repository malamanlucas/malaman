package br.com.core.apps;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.comum.log.LogMessage;
import br.com.comum.log.LoggerMessager;
import br.com.comum.test.TesteUtils;
import br.com.core.validate.BeanValidator;
import br.com.dao.db.categoria.CategoryDAO;
import br.com.dao.db.item.ItemDAO;
import br.com.dao.db.pedido.PedidoDAO;
import br.com.dao.db.produto.ProductDAO;
import br.com.dao.factory.DAOFactory;
import br.com.model.enums.DAOName;

@Transactional(
			propagation=Propagation.REQUIRES_NEW,
			readOnly=false)
public abstract class GenericFacade implements LoggerMessager{
	
	@Autowired
	protected BeanValidator validator;
	
	private LogMessage logger;
	
	public GenericFacade() {
		TesteUtils.showMsg("Facade",this);
	}
	
	@Resource(name="factoryDAO")
	protected DAOFactory factoryDAO;
	
	@Transactional(propagation=Propagation.NOT_SUPPORTED)
	protected CategoryDAO getCategoriaDAO() {
		return factoryDAO.getDAOByName(DAOName.CATEGORIA,CategoryDAO.class);
	}
	
	@Transactional(propagation=Propagation.NOT_SUPPORTED)
	protected ItemDAO getItemDAO() {
		return factoryDAO.getDAOByName(DAOName.ITEM,ItemDAO.class);
	}
	
	@Transactional(propagation=Propagation.NOT_SUPPORTED)
	protected ProductDAO getProdutoDAO() {
		return factoryDAO.getDAOByName(DAOName.PRODUTO,ProductDAO.class);
	}
	
	@Transactional(propagation=Propagation.NOT_SUPPORTED)
	protected PedidoDAO getPedidoDAO() {
		return factoryDAO.getDAOByName(DAOName.PEDIDO,PedidoDAO.class);
	}
	
	public void setLog(LogMessage logger) {
		this.logger = logger;
	}
	
	@Override
	public LogMessage getLog() {
		return this.logger;
	}
	
}
