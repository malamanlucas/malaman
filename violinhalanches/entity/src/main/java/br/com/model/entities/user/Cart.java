package br.com.model.entities.user;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import br.com.comum.fmt.Formatter;
import br.com.comum.math.MathUtils;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.Product;
import br.com.model.entities.manager.ReceiverMethod;
import br.com.model.enums.AddressType;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;

public class Cart implements Serializable {

	private static final long serialVersionUID = 1L;

	public Cart() {
		itens          = new HashMap<ItemCartKey, ItemCart>();
		initData();
	}
	
	private void initData() {
		paymentMethod  = MeioPagamento.PRESENCIAL_DINHEIRO.getPaymentMethod();
		receiverMethod = MeioRecebimento.BUSCAR_NA_EMPRESA.getReceiverMethod();
		addressType    = AddressType.NOT_SPECIFIED;
	}
	
	public void clean() {
		itens.clear();
		initData();
	}
	
	private Map<ItemCartKey, ItemCart> itens;
	private PaymentMethod 			   paymentMethod;
	private ReceiverMethod 			   receiverMethod;
	private AddressType                addressType;

	public Map<ItemCartKey, ItemCart> getItens() {
		return itens;
	}

	public void setItens(Map<ItemCartKey, ItemCart> itens) {
		this.itens = itens;
	}
	
	public void addItem(Product product) {
		ItemCartKey key = new ItemCartKey( product.getName(), product.getDescription() , product.getTypeAsCode() );
		addItem( key, product );
	}
	
	public Collection<ItemCart> getItensAsCollection() {
		return itens.values();
	}
	
	public ItemCart retriveveItem(ItemCartKey key) {
		return itens.get( key );
	}
	
	public void addItem(ItemCartKey key, Product product) {
		ItemCart itemCart = itens.get( key );
		if (itemCart == null) {
			itemCart = new ItemCart( key, product.getPrice() );
			itemCart.setTextPrint  ( product.getTextPrint() );
			itemCart.setTypeAsEnum ( product.getType() );
			itemCart.setExtraInfo  ( product.getExtraInfo() );
			itens.put( key, itemCart );
		} else {
			itemCart.increment();
		}
	}
	
	public Integer getQuantityItens() {
		return itens.size();
	}
	
	public BigDecimal modifyQuantity(ItemCartKey key, Integer quantity) {
		BigDecimal subTotal = new BigDecimal(0);
		if (quantity == 0) {
			itens.remove( key );
		} else {
			ItemCart itemCar = itens.get( key );
			itemCar.setQuantity( quantity );
			subTotal = itemCar.getPrice();
		}
		return subTotal;
	}
	
	public void removeItem(ItemCartKey key) {
		itens.remove( key );
	}
	
	public BigDecimal getPriceTotal() {
		BigDecimal priceTotal = new BigDecimal(0);
		
		if ( !itens.isEmpty() ) {
			for ( ItemCart itemCar : itens.values() ) {
				priceTotal = MathUtils.sum( priceTotal, itemCar.getPrice() );
			}
		}
		
		
		return priceTotal;
	}
	
	public String getPriceTotalAsText() {
		return Formatter.numberToString( getPriceTotal() );
	}
	
	public boolean hasItens() {
		return !itens.isEmpty();
	}

	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public ReceiverMethod getReceiverMethod() {
		return receiverMethod;
	}

	public void setReceiverMethod(ReceiverMethod receiverMethod) {
		this.receiverMethod = receiverMethod;
	}

	public AddressType getAddressType() {
		return addressType;
	}

	public void setAddressType(AddressType addressType) {
		this.addressType = addressType;
	}
	
	public void setAddressTypeAsCode(Integer code) {
		this.addressType = AddressType.fromCode( code );
	}
	
	public boolean isPresencialDinheiro() {
		return paymentMethod.getEnum() == MeioPagamento.PRESENCIAL_DINHEIRO;
	}
	
	public boolean isEmpty() {
		return getItens().isEmpty();
	}
	
}
