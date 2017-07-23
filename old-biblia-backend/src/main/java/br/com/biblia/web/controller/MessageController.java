package br.com.biblia.web.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.message.MessageApp;
import br.com.biblia.core.model.Message;
import lombok.Data;

@Data
@RestController("messageMB")
@Scope("view")
public class MessageController {

	private Message entity = new Message();
	private List<Message> list;

	@Autowired
	private MessageApp app;

	@PostConstruct
	public void init() {
		clean();
		search();
	}
	
	private void clean() {
		entity = new Message();
	}

	public void search() {
		list = this.app.findAll();
	}

	public void delete(Integer id) {
		app.deleteById(id);
		clean();
		search();
	}

	public void save() {
		app.save( entity );
		clean();
		search();
	}
	
}
