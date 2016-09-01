package br.com.quadrangular.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.quadrangular.core.enums.Testamento;
import br.com.quadrangular.core.model.Livro;

public interface LivroDAO extends JpaRepository<Livro, Integer> {

	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(id),0)+1 FROM livro")
	Integer retrieveNextId();
	
	@Query("SELECT p FROM Livro p WHERE p.testamento = :testamento")
	List<Livro> searchByTestamento(@Param("testamento") Testamento testamento);
	
}
