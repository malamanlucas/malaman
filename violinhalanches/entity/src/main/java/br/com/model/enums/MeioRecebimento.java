package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

import br.com.model.entities.manager.ReceiverMethod;

public enum MeioRecebimento {

	BUSCAR_NA_EMPRESA   ( "Buscar no ViolinhaLanches", 1 , "icon_manager-dashboard_delivery_off" ),
	ENTREGAR_NO_ENDERECO( "Entregar no meu Endereço" , 2 , "icon_manager-dashboard_delivery_on" );
	
	private String descricao;
	private int code;
	private String icon;
	
	private static Map<Integer,MeioRecebimento> hash;
	
	static {
		hash = new HashMap<Integer,MeioRecebimento>();
		for (MeioRecebimento m : MeioRecebimento.values()) {
			hash.put(m.getCode(), m);
		}
	}
	
	public static MeioRecebimento fromCode(int code) {
		return hash.get(code);
	}
	
	
	private MeioRecebimento(String descricao, int code, String icon) {
		this.descricao = descricao;
		this.code      = code;
		this.icon      = icon;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public ReceiverMethod getReceiverMethod() {
		return new ReceiverMethod( this );
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
}
