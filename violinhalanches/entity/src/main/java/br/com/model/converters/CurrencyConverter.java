package br.com.model.converters;

import java.beans.PropertyEditorSupport;

import br.com.comum.fmt.Formatter;

public class CurrencyConverter extends PropertyEditorSupport {

	public void setAsText(String text) throws IllegalArgumentException {
		setValue(Formatter.stringToBigDecimal(text));
	}
	
	public String getAsText() {
		return Formatter.numberToString(getValue());
	}
}
