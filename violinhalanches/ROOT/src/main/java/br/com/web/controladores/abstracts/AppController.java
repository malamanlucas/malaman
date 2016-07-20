package br.com.web.controladores.abstracts;

import javax.annotation.Resource;

import br.com.core.application.App;
import br.com.web.controladores.factory.ControllerFactory;
import br.com.web.controladores.gestor.ItemController;
import br.com.web.controladores.gestor.LancheController;
import br.com.web.controladores.gestor.ProdutoController;
import br.com.web.controladores.usuario.CartController;
import br.com.web.controladores.usuario.HomeController;
import br.com.web.controladores.usuario.LoginController;
import br.com.web.controladores.usuario.UserLoggedController;

public abstract class AppController extends App {

	@Resource(name = "controllerFactory")
	protected ControllerFactory controllerFactory;
	
	public ItemController getItemController() {
		return controllerFactory.createItemController();
	}

	public LancheController getLancheController() {
		return controllerFactory.createLancheController();
	}

	public LoginController getLoginController() {
		return controllerFactory.createLoginController();
	}

	public ProdutoController getProdutoController() {
		return controllerFactory.createProdutoController();
	}
	
	public HomeController getHomeController() {
		return controllerFactory.createHomeController();
	}
	
	public CartController getCartController() {
		return controllerFactory.createCartController();
	}
	
	public UserLoggedController getUserLoggedController() {
		return controllerFactory.createUserLoggedController();
	}

	
}
