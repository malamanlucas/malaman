package br.com.model.enums;

public enum ParameterEnum {

	DELIVERY_PRICE          ("preco_entrega"             , "3.00"),
	QUANTITY_FOR_BE_BLOCKED ("qtd_bloqueado"             , "1"),
	QUANTITY_FOR_BE_RELIABLE("qtd_confiavel"             , "3"),
	TIME_INACTIVITY         ("tempo_inatividade"         , "2"),
	TIME_ANSWER_INACTIVITY  ("tempo_resposta_inatividade", "1");
	
	private String key;
	private String value;

	private ParameterEnum(String key, String value) {
		this.key   = key;
		this.value = value;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
}
