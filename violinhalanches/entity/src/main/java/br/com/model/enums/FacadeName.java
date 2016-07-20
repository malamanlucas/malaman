package br.com.model.enums;

public enum FacadeName {

	CATEGORIA("categoriaFacade"),
	ITEM("itemFacade"),
	LANCHE("lancheFacade"),
	PEDIDO("pedidoFacade"),
	PAGAMENTO("pagamentoFacade"),
	PRODUTO("produtoFacade"),
	USER("userFacade"),
	LOGIN("loginFacade"), 
	NOVIDADE("novidadeFacade"), 
	ADDRESS("addressFacade"),
	CAROUSEL("carouselFacade"),
	TEXT_HOME("textHomeFacade"),
	SYSTEM_STATUS("systemStatusFacade"),
	MANAGER("managerUserFacade"), 
	DASHBOARD("dashboardFacade"),
	PARAMETRO("parameterFacade"),
	PRINT_FACADE ("printFormatterFacade");
	
	private String name;
	
	private FacadeName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
