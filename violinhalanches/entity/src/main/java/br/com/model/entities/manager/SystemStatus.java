package br.com.model.entities.manager;

public class SystemStatus {

	private Integer id = 1;
	private boolean saleOpened;
	private boolean trailerOpened;
	private boolean activeOperator;

	public Integer getId() {
		return id;
	}

	public boolean isSaleOpened() {
		return saleOpened;
	}

	public void setSaleOpened(boolean saleOpened) {
		this.saleOpened = saleOpened;
	}

	public boolean isTrailerOpened() {
		return trailerOpened;
	}
	
	public void setTrailerOpened(boolean trailerOpened) {
		this.trailerOpened = trailerOpened;
	}

	public boolean isActiveOperator() {
		return activeOperator;
	}

	public void setActiveOperator(boolean activeOperator) {
		this.activeOperator = activeOperator;
	}
	
}
