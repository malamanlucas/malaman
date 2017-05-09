package br.com.biblia.core.apps.message;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.biblia.core.dao.MessageDAO;
import br.com.biblia.core.model.Message;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class MessageFacade implements MessageApp {

	@Autowired
	private MessageDAO dao;

	@Override
	public Message save(Message entity) {
		if ( entity.getId() == null ) {
			entity.setId( dao.retrieveNextId() );
		}
		dao.save(entity);
		return entity;
	}

	@Override
	public List<Message> findAll() {
		return dao.findAll();
	}

	@Override
	public Message findOne(Integer id) {
		return dao.findOne(id);
	}

	@Override
	public void deleteById(Integer id) {
		dao.delete(id);
	}

}
