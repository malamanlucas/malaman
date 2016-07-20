package br.com.core.apps.text_home;

import br.com.comum.log.Loggable;
import br.com.model.entities.manager.TextHome;

@Loggable
public interface TextHomeApp {
	
	TextHome insert(TextHome textHome);
	
	void update(TextHome textHome);
	
	TextHome find();
	
}
