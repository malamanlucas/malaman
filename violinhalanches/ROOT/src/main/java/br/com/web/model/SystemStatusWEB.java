package br.com.web.model;

import br.com.model.entities.manager.SystemStatus;

public class SystemStatusWEB extends SystemStatus {

	public SystemStatusWEB(SystemStatus status) {
		setSaleOpened( status.isSaleOpened() );
		setTrailerOpened( status.isTrailerOpened() );
	}
	
	public String getTrailerClassname() {
		return isTrailerOpened() ? "icon-online_sale_open" : "icon-online_sale_closed";
	}
	
	public String getSaleClassname() {
		return isSaleOpened() ? "icon-establishment_open" : "icon-establishment_closed";
	}
	
}
