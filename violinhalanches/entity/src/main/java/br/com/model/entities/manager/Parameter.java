package br.com.model.entities.manager;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.comum.check.Checker;
import br.com.model.enums.DataType;
import br.com.model.enums.ParameterEnum;

public class Parameter {
	
	public Parameter(ParameterEnum p) {
		this( p.getKey(), p.getValue() );
	}
	
	public Parameter(String key, String value) {
		this.key   = key;
		this.value = value;
	}
	
	public Parameter() {}
	
	@NotEmpty(message="Obrigatório informar a chave do parametro")
	@NotNull(message="Obrigatório informar a chave do parametro")
	private String key;
	
	@NotEmpty(message="Obrigatório informar o valor do parametro")
	@NotNull(message="Obrigatório informar o valor do parametro")
	private String value;
	
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
	public DataType getDataType() {
		if ( key.startsWith("preco") )  
			return DataType.PRECO;
		if ( Checker.isNumeric(value) ) 
			return DataType.NUMERO;
		return DataType.TEXTO;
	}

}
