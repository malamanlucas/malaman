package br.com.providers.pedido;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import br.com.comum.converters.ConversorJSON;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.Cart;
import br.com.model.entities.user.ItemCart;
import br.com.model.entities.user.ItemCartKey;
import br.com.model.entities.user.Pedido;
import br.com.model.entities.user.User;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;
import br.com.model.enums.ParameterEnum;
import br.com.model.enums.ProductType;
import br.com.providers.EntityProvider;
import br.com.providers.EntityProviderFactory;
import br.com.providers.user.AddressProvider;
import br.com.providers.user.UserProvider;

public class PedidoProvider extends EntityProvider<Pedido> {
	
	public static void main(String[] args) {
		
		Pedido pedido = new PedidoProvider().provideEntity();
		
		System.out.println(pedido.getItensAsJSON());
		
		System.out.println(pedido.getAddressAsJSON());
	}
	
	private UserProvider userProvider;
	private AddressProvider addressProvider;

	public PedidoProvider() {
		userProvider    = EntityProviderFactory.createUserProvider();
		addressProvider = EntityProviderFactory.createAddressProvider();
	}
	
	@Override
	protected Pedido build() {
		Cart cart                = buildCart();
		Address address          = buildAddress();
		User user                = buildUser();
		BigDecimal amountPayable = new BigDecimal(3.50);
		BigDecimal deliveryPrice = new BigDecimal(ParameterEnum.DELIVERY_PRICE.getValue());
		
		Pedido p = new Pedido( cart, address, user, amountPayable, deliveryPrice, true); 
		p.setTroco     ( new BigDecimal(2.50) );
		p.setPaymentUrl( "http://url" );
		p.setUser( user );
		return p;
	}
	
	private User buildUser() {
		return userProvider.provideEntity();
	}

	private Address buildAddress() {
		return addressProvider.provideEntity();
	}

	protected Cart buildCart() {
		Cart cart = new Cart();
		cart.setPaymentMethod( MeioPagamento.PRESENCIAL_DINHEIRO.getPaymentMethod() );
		cart.setReceiverMethod( MeioRecebimento.BUSCAR_NA_EMPRESA.getReceiverMethod() );
		cart.setItens( buildItens() );
		return cart; 
	}

	private Map<ItemCartKey, ItemCart> buildItens() {
		Map<ItemCartKey, ItemCart> map = new HashMap<>();
		
		addItem(map, provideItemCart( "Coca-cola", "Refrigerante de 2 litros", new BigDecimal(2.13), ProductType.PRODUCT ) );
		
		addItem(map, provideItemCart( "Batata-Frita", "Batata Frita Descrição", new BigDecimal(1.76), ProductType.PAO_HAMBURGUER ) );
		
		addItem(map, provideItemCart( "Bacon", "Bacon Descrição", new BigDecimal(0.76), ProductType.PAO_HAMBURGUER) );
		
		return map;
	}
	
	private void addItem(Map<ItemCartKey, ItemCart> map, ItemCart item) {
		map.put( item.getKey(), item );
	}
	
	private ItemCart provideItemCart(String name, String description, BigDecimal priceUnit, ProductType type) {
		ItemCart item = new ItemCart( new ItemCartKey( name, description, type.getCode() ) , priceUnit);
		item.setTypeAsEnum(type);
		item.setTextPrint( "S/ Bacon   +3 Alface   -2 Salsicha   +8 Queijo   S/ Salada de Fruta  " );
		item.setExtraInfo( "Pão bem torrado" );
		return item;
	}

	public Long provideKey() {
		return 1L;
	}

}
