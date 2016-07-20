package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum StatusPedido {
	
	NAO_APROVADO( "Não Aprovado", 0 , "icon-dashboard_unapproved" ),
	APROVADO    ( "Aprovado"    , 1 , "icon-dashboard_approved" ),
	PRONTO      ( "Pronto"      , 2 , "icon-dashboard_ready" ),
	ENTREGUE    ( "Entregue"    , 3 , "icon-dashboard_delivered" ),
	NAO_ENTREGUE( "Não Entregue", 4 , "icon-dashboard_not_delivered" ); 
	
	private static Map<Integer,StatusPedido> hash;
	
	static {
		hash = new HashMap<Integer,StatusPedido>();
		for (StatusPedido t : StatusPedido.values()) {
			hash.put(t.getCode(), t);
		}
	}
	
	public static StatusPedido fromCode(Integer code) {
		return hash.get(code);
	}
	
	private Integer code;
	private String descricao;
	private String icon;
	
	private StatusPedido(String descricao,Integer code, String icon) {
		this.descricao = descricao;
		this.code      = code;
		this.icon      = icon;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
}
