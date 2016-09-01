package br.com.quadrangular.web.controller;

import java.util.Map;

import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;

@Data
@ManagedBean(name="navMB")
@RestController("navMB")
@Scope("singleton")
public class NavigationController {

	private static final String ITEM = "item.xhtml";
	private static final String TESTE = "teste.xhtml";
	private static final String VERSICULO = "versiculo.xhtml";

	private String page = VERSICULO;
	
	private boolean item = false;
	private boolean teste = false;
	private boolean versiculo = false;
	
	public String versiculo() {
		return VERSICULO;
	}
	
	public String item() {
		return ITEM;
	}
	
	public String teste() {
		return TESTE;
	}
	
	public String home() {
		return "home.xhtml";
	}
	
	public void changePage() {
		
		Map<String, String> map = FacesContext
									       .getCurrentInstance()
									       .getExternalContext()
									       .getRequestParameterMap();
		String page = map.get("page");
		
//		item = false;
//		teste = false;
//		versiculo = false;
//		
//		if ( ITEM.equals( page ) )
//			item = true;
//		else if ( TESTE.equals( page ) )
//			teste = true;
//		else if ( VERSICULO.equals(page) )
//			versiculo = true;
//		else
//			page = "home.xhtml";
		this.page = page;
	}
	
	
}
