package br.com.dao.db.text_home;

import br.com.comum.log.Loggable;
import br.com.dao.db.general.interfaces.DAO;
import br.com.model.entities.manager.TextHome;

@Loggable
public interface TextHomeDAO extends DAO<TextHome, Void>{

	TextHome find();
	
}
