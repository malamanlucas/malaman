package br.com.core.apps.printer;

import br.com.model.entities.manager.Product;
import br.com.model.entities.user.Pedido;

public interface PrintFormatterApp {

	String generateForCooker(Pedido pedido);
	
	String genearateForDeliver(Pedido pedido);
	
	String generateTextForPrintItensInLunch(Product actual, Product original);

	String generateForDeliver(Pedido pedido);
	
}
