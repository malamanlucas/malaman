package br.com.model.enums;

import java.util.HashMap;
import java.util.Map;

import br.com.model.entities.manager.PaymentMethod;

public enum MeioPagamento {

	ONLINE             ("Online com Pagseguro"   ,1 , "icon_manager-pay_by_pagseguro" ),
	PRESENCIAL_DINHEIRO("Presencial com Dinheiro",2 , "icon_manager-pay_by_money" ),
	PRESENCIAL_CARTAO  ("Presencial com Cartão"  ,3 , "icon_manager-pay_by_card" );
	
	private String descricao;
	private int code;
	private String icon;
	
	private static Map<Integer,MeioPagamento> hash;
	
	private MeioPagamento(String descricao, int code, String icon) {
		this.descricao = descricao;
		this.code      = code;
		this.icon      = icon;
	}
	
	static {
		hash = new HashMap<Integer,MeioPagamento>();
		for (MeioPagamento m : MeioPagamento.values()) {
			hash.put(m.getCode(), m);
		}
	}
	
	public static MeioPagamento fromCode(int code) {
		return hash.get(code);
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

	public PaymentMethod getPaymentMethod() {
		return new PaymentMethod( this );
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
}
