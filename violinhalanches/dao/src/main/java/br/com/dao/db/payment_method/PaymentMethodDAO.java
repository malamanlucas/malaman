package br.com.dao.db.payment_method;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.PaymentMethod;

@Loggable
public interface PaymentMethodDAO extends DAO<PaymentMethod, Integer> {
	
	void insert(List<PaymentMethod> methods);
	
}
