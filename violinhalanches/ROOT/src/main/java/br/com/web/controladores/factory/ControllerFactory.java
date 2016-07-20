package br.com.web.controladores.factory;

import br.com.web.controladores.gestor.ItemController;
import br.com.web.controladores.gestor.LancheController;
import br.com.web.controladores.gestor.ProdutoController;
import br.com.web.controladores.usuario.CartController;
import br.com.web.controladores.usuario.HomeController;
import br.com.web.controladores.usuario.LoginController;
import br.com.web.controladores.usuario.UserLoggedController;

public interface ControllerFactory {
	
	ItemController createItemController();
	LancheController createLancheController();
	LoginController createLoginController();
	ProdutoController createProdutoController();
	HomeController createHomeController();
	CartController createCartController();
	UserLoggedController createUserLoggedController();
}
