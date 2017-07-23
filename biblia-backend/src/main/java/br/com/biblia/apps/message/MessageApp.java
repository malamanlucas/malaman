package br.com.biblia.apps.message;

import java.util.List;

import br.com.biblia.model.Message;

public interface MessageApp {

	Message save(Message entity);

	List<Message> findAll();

	Message findOne(Integer id);
	
	void deleteById(Integer id);
	
}
