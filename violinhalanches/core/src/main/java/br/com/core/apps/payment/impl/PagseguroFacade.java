package br.com.core.apps.payment.impl;

import java.util.Collection;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.core.apps.payment.PaymentApp;
import br.com.model.entities.user.ItemCart;
import br.com.uol.pagseguro.domain.Credentials;
import br.com.uol.pagseguro.domain.Item;
import br.com.uol.pagseguro.domain.Sender;
import br.com.uol.pagseguro.domain.Transaction;
import br.com.uol.pagseguro.domain.checkout.Checkout;
import br.com.uol.pagseguro.enums.Currency;
import br.com.uol.pagseguro.enums.ShippingType;
import br.com.uol.pagseguro.exception.PagSeguroServiceException;
import br.com.uol.pagseguro.properties.PagSeguroConfig;
import br.com.uol.pagseguro.service.NotificationService;
import br.com.uol.pagseguro.service.TransactionSearchService;

@Scope("prototype")
@Service("pagseguroFacade")
public class PagseguroFacade implements PaymentApp {

	private Credentials credentials;

	public PagseguroFacade() throws PagSeguroServiceException {
		credentials = PagSeguroConfig.getAccountCredentials();
	}

	public String doPayment(Collection<ItemCart> itens, String reference) {
		try {
			Checkout checkOut = buildPaymentRequest(itens, reference.toString());
			return checkOut.register( credentials );
		} catch (Exception e) {
			throw new RuntimeException( e ); 
		}
	}
	
	public Transaction findTransactionByNotificationCode(String notificationCode) {
		//TODO: Fazer validação
		Transaction transaction = null; 
		try {
			transaction = NotificationService.checkTransaction( credentials, notificationCode );
		} catch (PagSeguroServiceException e) {
			throw new RuntimeException( e );
		}
		return transaction;
	}

	private Checkout buildPaymentRequest(Collection<ItemCart> itens, String reference) {
		Checkout checkOut = new Checkout();
		
		checkOut.setCurrency(Currency.BRL);
		checkOut.setShippingType(ShippingType.NOT_SPECIFIED);
//		checkOut.setSender( getSender() );
		checkOut.setReference( reference );
		
		for (ItemCart p: itens) {
			Item i = new Item();
			i.setId         ( p.getName()  );
			i.setDescription( getMaxString((p.getName()+": "+p.getDescription() ), 100 ) );
			i.setAmount     ( p.getPrice() );
			i.setQuantity   ( p.getQuantity() );
			checkOut.addItem(i);
		}
		return checkOut;
	}

	private Sender getSender() {
		Sender sender = new Sender();
		
		sender.setEmail( "c56831177635393016269@sandbox.pagseguro.com.br" );
		
		return sender;
	}

	private String getMaxString(String s, int max) {
		if (s.length() < max)
			return s;
		return s.substring(0, max - 3) + "...";
	}

	@Override
	public Transaction findTransactionByCode(String code) {
			
		Transaction transaction = null;
		try {
			transaction = TransactionSearchService.searchByCode(credentials, code );
		} catch (PagSeguroServiceException e) {
			throw new RuntimeException( e );
		}
		
		return transaction;
	}

}
