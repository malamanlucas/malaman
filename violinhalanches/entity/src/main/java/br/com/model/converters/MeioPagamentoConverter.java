package br.com.model.converters;

import java.beans.PropertyEditorSupport;

import br.com.model.enums.MeioPagamento;

public class MeioPagamentoConverter extends PropertyEditorSupport {
	
	@Override
	public void setAsText(String code) throws IllegalArgumentException {
		setValue(MeioPagamento.fromCode(Byte.valueOf(code)));
	}
	
	@Override
	public String getAsText() {
		return String.valueOf(((MeioPagamento)getValue()).getCode());
	}
}
