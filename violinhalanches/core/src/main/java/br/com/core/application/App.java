package br.com.core.application;

import javax.annotation.Resource;

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

public abstract class App {

	@Resource(name = "appFactory")
	protected AppFactory appFactory;

	protected CategoryApp getCategoriaApp() {
		return appFactory.createCategoriaApp();
	}

	protected ItemApp getItemApp() {
		return appFactory.createItemApp();
	}

	protected ProductApp getProductApp() {
		return appFactory.createProdutoApp();
	}

	protected NovidadeApp getNovidadeApp() {
		return appFactory.createNovidadeApp();
	}
	
	protected UserApp getUserApp() {
		return appFactory.createUserApp();
	}
	
	protected AddressApp getAddressApp() {
		return appFactory.createAddressApp();
	}
	
	protected CarouselApp getCarouselApp() {
		return appFactory.createCarouselApp();
	}
	
	protected TextHomeApp getTextHomeApp() {
		return appFactory.createTextHomeApp();
	}
	
	protected SystemStatusApp getSystemStatusApp() {
		return appFactory.createSystemStatusApp();
	}
	
	protected ManagerUserApp getManagerApp() {
		return appFactory.createManagerApp();
	}
	
	protected PedidoApp getPedidoApp() {
		return appFactory.createPedidoApp();
	}
	
	protected DashboardApp getDashboardApp() {
		return appFactory.createDashboardApp();
	}
	
	protected ParameterApp getParameterApp() {
		return appFactory.createParameterApp();
	}
	
	protected PrintFormatterApp getPrintFormatterApp() {
		return appFactory.createPrintFormatterApp();
	}
	
	
}
