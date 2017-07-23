package br.com.biblia.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.biblia.model.Message;

public interface MessageDAO extends JpaRepository<Message, Integer> {

	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(id),0)+1 FROM Message")
	Integer retrieveNextId();
	
}
