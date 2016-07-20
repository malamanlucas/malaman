package br.com.core.test.apps.printer;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;

import br.com.core.apps.printer.PrintFormatterApp;
import br.com.model.entities.manager.Item;
import br.com.model.entities.manager.Product;
import br.com.model.entities.user.Pedido;
import br.com.providers.EntityProviderFactory;
import br.com.providers.pedido.PedidoProvider;

public class PrintFormatterAppTest {

	@Resource(name="printFormatterFacade")
	private PrintFormatterApp app;
	private PedidoProvider pedidoProvider;
	
	public PrintFormatterAppTest() {
		pedidoProvider = EntityProviderFactory.createPedidoProvider();
	}
	
	@Test
	public void generateForCooker() {
		Pedido pedido = pedidoProvider.provideEntity();
		pedido.setNumber(1L);
		System.out.println( app.generateForCooker(pedido) );
	}
	
	@Test
	public void generateForDeliver() {
		Pedido pedido = pedidoProvider.provideEntity();
		pedido.setNumber(1L);
		System.out.println( app.generateForDeliver(pedido) );
	}
	
	@Test
	public void generateTextForPrintItensInLunch() {
		Product actual   = new Product();
		actual.setDescription( "(0)Hamburguer, (1)Milho-Verde" );
		Product original = provideOriginalProduct();
		String text = app.generateTextForPrintItensInLunch(actual, original);
		
		System.out.println( text );
	}
	
	private Product provideOriginalProduct() {
		Product product = new Product();
		List<Item> itens = new ArrayList<>();
		
		itens.add( provideOriginalItem( "Hamburguer", 1 ) );
		itens.add( provideOriginalItem( "Milho-Verde", 2 ) );
		
		product.setItens( itens );
		return product;
	}
	
	private Item provideOriginalItem(String name, Integer originalAmount) {
		Item item = new Item();
		item.setName( name );
		item.setAmount( originalAmount );
		return item;
	}
	
}
