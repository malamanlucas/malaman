package br.com.quadrangular.core.apps.message;

import java.util.List;

import br.com.quadrangular.core.model.Message;

public interface MessageApp {

	Message save(Message entity);

	List<Message> findAll();

	Message findOne(Integer id);
	
	void deleteById(Integer id);
	
}
