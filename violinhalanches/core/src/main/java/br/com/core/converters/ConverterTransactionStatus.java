package br.com.core.converters;

import static br.com.uol.pagseguro.enums.TransactionStatus.CANCELLED;
import static br.com.uol.pagseguro.enums.TransactionStatus.INITIATED;
import static br.com.uol.pagseguro.enums.TransactionStatus.IN_ANALYSIS;
import static br.com.uol.pagseguro.enums.TransactionStatus.PAID;
import static br.com.uol.pagseguro.enums.TransactionStatus.WAITING_PAYMENT;

import java.util.HashMap;
import java.util.Map;

import br.com.model.enums.StatusPagamento;
import br.com.uol.pagseguro.enums.TransactionStatus;

public class ConverterTransactionStatus {

	private static Map<TransactionStatus, StatusPagamento> hash;

	static {
		hash = new HashMap<TransactionStatus, StatusPagamento>();
		putMappedValuesInHash(StatusPagamento.NAO_PAGO, INITIATED, WAITING_PAYMENT, IN_ANALYSIS);
		putMappedValuesInHash(StatusPagamento.PAGO, PAID);
		putMappedValuesInHash(StatusPagamento.CANCELADO, CANCELLED);
	}

	private static void putMappedValuesInHash(StatusPagamento pagamento, TransactionStatus... status) {
		for (TransactionStatus transactionStatus : status) {
			hash.put(transactionStatus, pagamento);
		}
	}

	public static StatusPagamento fromCode(Integer transactionCode) {
		StatusPagamento pagamento = hash.get(transactionCode);
		return pagamento == null ? StatusPagamento.NAO_DEFINIDO : pagamento;
	}

	public static StatusPagamento convert(TransactionStatus t) {
		
		StatusPagamento pagamento = hash.get( t ); 

		if (pagamento == null) {
			pagamento = StatusPagamento.NAO_DEFINIDO;	
		}
		
		return pagamento;
	}
}
