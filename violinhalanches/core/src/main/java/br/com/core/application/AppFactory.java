package br.com.core.application;

import br.com.core.apps.address.AddressApp;
import br.com.core.apps.carousel.CarouselApp;
import br.com.core.apps.categoria.CategoryApp;
import br.com.core.apps.dashboard.DashboardApp;
import br.com.core.apps.item.ItemApp;
import br.com.core.apps.manager.ManagerUserApp;
import br.com.core.apps.novidade.NovidadeApp;
import br.com.core.apps.parameter.ParameterApp;
import br.com.core.apps.pedido.PedidoApp;
import br.com.core.apps.printer.PrintFormatterApp;
import br.com.core.apps.produto.ProductApp;
import br.com.core.apps.system_status.SystemStatusApp;
import br.com.core.apps.text_home.TextHomeApp;
import br.com.core.apps.user.UserApp;

public interface AppFactory {
	
	CategoryApp createCategoriaApp();
	
	ItemApp createItemApp();
	
	ProductApp createProdutoApp();
	
	NovidadeApp createNovidadeApp();

	UserApp createUserApp();

	AddressApp createAddressApp();
	
	CarouselApp createCarouselApp();

	TextHomeApp createTextHomeApp();

	SystemStatusApp createSystemStatusApp();

	ManagerUserApp createManagerApp();

	PedidoApp createPedidoApp();

	DashboardApp createDashboardApp();

	ParameterApp createParameterApp();

	PrintFormatterApp createPrintFormatterApp();
}
