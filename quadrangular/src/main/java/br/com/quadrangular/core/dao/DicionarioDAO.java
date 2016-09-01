package br.com.quadrangular.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.quadrangular.core.enums.Idioma;
import br.com.quadrangular.core.model.Dicionario;
import br.com.quadrangular.core.model.DicionarioKey;

public interface DicionarioDAO extends JpaRepository<Dicionario, DicionarioKey> {

	@Query("SELECT p FROM Dicionario p WHERE p.key.idioma = :idioma AND p.existe = FALSE ORDER BY p.key.id ASC")
	List<Dicionario> search(@Param("idioma") Idioma idioma);	
	
}