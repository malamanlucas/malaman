package br.com.core.apps.manager;

import java.util.List;

import br.com.comum.log.Loggable;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.ReceiverMethod;

@Loggable
public interface ManagerUserApp {

	void update(PaymentMethod method);
	
	void update(ReceiverMethod method);
	
	List<PaymentMethod> searchPaymentMethodsEnabled();
	
	List<PaymentMethod> searchPaymentMethods();
	
	List<ReceiverMethod> searchReceiverMethodsEnabled();
	
	List<ReceiverMethod> searchReceiverMethods();
	
	void requestUnblock(String phone);
	
	void unblock(String phone);
	
}
