package br.com.model.converters;

import java.beans.PropertyEditorSupport;

import br.com.model.enums.ProductType;

public class StringToEnumTipoProduto extends PropertyEditorSupport {
	
	
	public void setAsText(String text) throws IllegalArgumentException {
		setValue(ProductType.getFromDescription(text));
	}
	
	public String getAsText() {
		return ((ProductType)getValue()).getDescription();
	}
	
}
