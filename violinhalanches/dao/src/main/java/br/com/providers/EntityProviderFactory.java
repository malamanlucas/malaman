package br.com.providers;

import br.com.providers.item.ItemProvider;
import br.com.providers.pedido.PedidoProvider;
import br.com.providers.user.AddressProvider;
import br.com.providers.user.UserProvider;

public class EntityProviderFactory {

	public static ItemProvider createItemProvider() {
		return new ItemProvider();
	}
	
	public static UserProvider createUserProvider()	{
		return new UserProvider();
	}
	
	public static AddressProvider createAddressProvider() {
		return new AddressProvider();
	}

	public static PedidoProvider createPedidoProvider() {
		return new PedidoProvider();
	}

}
