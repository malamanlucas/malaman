package br.com.core.apps.payment;

import java.util.Collection;

import br.com.model.entities.user.ItemCart;
import br.com.uol.pagseguro.domain.Transaction;

public interface PaymentApp {

	String doPayment(Collection<ItemCart> itens, String reference);
	
	//TODO: Criar Metalayouts 
	Transaction findTransactionByNotificationCode(String notificationCode);
	
	//TODO: Criar Metalayouts
	Transaction findTransactionByCode(String code);
	
}
