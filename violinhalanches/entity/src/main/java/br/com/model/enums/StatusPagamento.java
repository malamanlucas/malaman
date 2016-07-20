package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

public enum StatusPagamento {
	
	NAO_PAGO    ( "Não Pago"    , 0 , "icon-dashboard_not_paid" ),
	PAGO        ( "Pago"        , 1 , "icon-dashboard_paid" ),
	CANCELADO   ( "Cancelado"   , 2 , "icon-dashboard_canceled" ),
	NAO_DEFINIDO( "Não definido", 3 , "" );
	
	private static Map<Integer,StatusPagamento> hash;
	
	static {
		hash = new HashMap<Integer,StatusPagamento>();
		for (StatusPagamento t : StatusPagamento.values()) {
			hash.put(t.getCode(), t);
		}
	}
	
	public static StatusPagamento fromCode(Integer code) {
		return hash.get(code);
	}
	
	private Integer code;
	private String descricao;
	private String icon;
	
	private StatusPagamento(String descricao, Integer code, String icon) {
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
