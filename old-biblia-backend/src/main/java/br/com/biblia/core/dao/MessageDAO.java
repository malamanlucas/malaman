package br.com.biblia.core.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.biblia.core.model.Message;

public interface MessageDAO extends JpaRepository<Message, Integer> {

	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(id),0)+1 FROM Message")
	Integer retrieveNextId();
	
}
