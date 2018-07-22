package br.com.exames.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.exames.model.Exame;

public interface ExameDAO extends JpaRepository<Exame, Integer> {

	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(id),0)+1 FROM exame")
	Integer retrieveNextId();
	
}
