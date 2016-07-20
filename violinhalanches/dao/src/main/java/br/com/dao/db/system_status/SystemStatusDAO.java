package br.com.dao.db.system_status;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.SystemStatus;

@Loggable
public interface SystemStatusDAO extends DAO<SystemStatus, Void>{

	SystemStatus find();
	
}
