package br.com.web.converters;

import java.beans.PropertyEditorSupport;

import com.google.common.base.Preconditions;

import br.com.model.entities.manager.Category;

public class CategoriaConverter extends PropertyEditorSupport{

	@Override
	public void setAsText(String text) throws IllegalArgumentException {
		Category value = null;
		try {
			Integer id = Integer.valueOf(text);
			value = new Category(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		setValue(value);
	}
	
	@Override
	public String getAsText() {
		try {
			Object value = getValue();
			Preconditions.checkNotNull(value);
			Preconditions.checkArgument(value instanceof Category);
			return ((Category) value).getId().toString();
		} catch (Exception e) {
			return "";
		}
	}
	
}
