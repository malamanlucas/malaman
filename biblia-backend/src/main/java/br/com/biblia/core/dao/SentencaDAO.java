package br.com.biblia.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.biblia.core.model.Sentenca;

public interface SentencaDAO extends JpaRepository<Sentenca, Integer> {

	@Query("SELECT s FROM Sentenca s WHERE LOWER(s.texto) LIKE LOWER(:#{'%' + #termo + '%'})"
			+ " ORDER BY s.testamento DESC, s.ordemLivro, s.capitulo, s.versiculo")
	List<Sentenca> searchByTermo(@Param("termo") String termo);
	
}
