package br.com.web.controladores.factory.impl;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.comum.factory.GenericSpringBeanFactory;
import br.com.web.controladores.factory.ControllerFactory;
import br.com.web.controladores.gestor.ItemController;
import br.com.web.controladores.gestor.LancheController;
import br.com.web.controladores.gestor.ProdutoController;
import br.com.web.controladores.usuario.CartController;
import br.com.web.controladores.usuario.HomeController;
import br.com.web.controladores.usuario.LoginController;
import br.com.web.controladores.usuario.UserLoggedController;

@Scope("singleton")
@Service("controllerFactory")
public class ControllerFactoryImpl extends GenericSpringBeanFactory implements ControllerFactory {

	@Override
	public ItemController createItemController() {
		return getBeanByType(ItemController.class);
	}

	@Override
	public LancheController createLancheController() {
		return getBeanByType(LancheController.class);
	}

	@Override
	public LoginController createLoginController() {
		return getBeanByType(LoginController.class);
	}

	@Override
	public ProdutoController createProdutoController() {
		return getBeanByType(ProdutoController.class);
	}

	@Override
	public HomeController createHomeController() {
		return getBeanByType(HomeController.class);
	}

	@Override
	public CartController createCartController() {
		return getBeanByType(CartController.class);
	}

	@Override
	public UserLoggedController createUserLoggedController() {
		return getBeanByType(UserLoggedController.class);
	}

}
