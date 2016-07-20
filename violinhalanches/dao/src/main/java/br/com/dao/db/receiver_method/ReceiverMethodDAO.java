package br.com.dao.db.receiver_method;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.ReceiverMethod;

@Loggable
public interface ReceiverMethodDAO extends DAO<ReceiverMethod, Integer> {

	void insert(List<ReceiverMethod> methods);
	
}
