package br.com.model.converters;

import java.beans.PropertyEditorSupport;

import br.com.model.enums.MeioRecebimento;

public class MeioRecebimentoConverter extends PropertyEditorSupport {
	
	@Override
	public void setAsText(String code) throws IllegalArgumentException {
		setValue(MeioRecebimento.fromCode(Byte.valueOf(code)));
	}
	
	@Override
	public String getAsText() {
		return String.valueOf(((MeioRecebimento)getValue()).getCode());
	}
}
