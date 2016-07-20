package br.com.core.apps.text_home.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.text_home.TextHomeApp;
import br.com.dao.db.text_home.TextHomeDAO;
import br.com.model.entities.manager.TextHome;

@Scope("prototype")
@Service("textHomeFacade")
@Transactional(readOnly=false)
public class TextHomeFacade implements TextHomeApp {

	@Resource(name="textHomeJDBC")
	private TextHomeDAO dao;
	
	public TextHome insert(TextHome textHome) {
		return dao.insert( textHome );
	}

	public void update(TextHome textHome) {
		dao.update( textHome );
	}

	@Transactional(readOnly=true)
	public TextHome find() {
		return dao.find();
	}

}
