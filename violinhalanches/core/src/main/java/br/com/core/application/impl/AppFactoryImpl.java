package br.com.core.application.impl;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.comum.factory.GenericSpringBeanFactory;
import br.com.core.application.AppFactory;
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
import br.com.model.enums.FacadeName;

@Scope("singleton")
@Service("appFactory")
public class AppFactoryImpl extends GenericSpringBeanFactory implements AppFactory {

	public ItemApp createItemApp() {
		return getBeanByName(FacadeName.ITEM.getName(), ItemApp.class);
	}

	public CategoryApp createCategoriaApp() {
		return getBeanByName(FacadeName.CATEGORIA.getName(), CategoryApp.class);
	}

	public ProductApp createProdutoApp() {
		return getBeanByName(FacadeName.PRODUTO.getName(), ProductApp.class);
	}

	public NovidadeApp createNovidadeApp() {
		return getBeanByName(FacadeName.NOVIDADE.getName(), NovidadeApp.class);
	}

	public UserApp createUserApp() {
		return getBeanByName(FacadeName.USER.getName(), UserApp.class);
	}

	public AddressApp createAddressApp() {
		return getBeanByName(FacadeName.ADDRESS.getName(), AddressApp.class);
	}

	public CarouselApp createCarouselApp() {
		return getBeanByName(FacadeName.CAROUSEL.getName(), CarouselApp.class);
	}

	public TextHomeApp createTextHomeApp() {
		return getBeanByName(FacadeName.TEXT_HOME.getName(), TextHomeApp.class);
	}

	public SystemStatusApp createSystemStatusApp() {
		return getBeanByName(FacadeName.SYSTEM_STATUS.getName(), SystemStatusApp.class);
	}

	public ManagerUserApp createManagerApp() {
		return getBeanByName( FacadeName.MANAGER.getName(), ManagerUserApp.class );
	}

	public PedidoApp createPedidoApp() {
		return getBeanByName( FacadeName.PEDIDO.getName(), PedidoApp.class );
	}

	@Override
	public DashboardApp createDashboardApp() {
		return getBeanByName( FacadeName.DASHBOARD.getName(), DashboardApp.class );
	}

	@Override
	public ParameterApp createParameterApp() {
		return getBeanByName( FacadeName.PARAMETRO.getName(), ParameterApp.class );
	}

	@Override
	public PrintFormatterApp createPrintFormatterApp() {
		return getBeanByName( FacadeName.PRINT_FACADE.getName(), PrintFormatterApp.class );
	}

}
