package br.com.biblia.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;

public interface VersiculoDAO extends JpaRepository<Versiculo, VersiculoKey> {

	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(id),0)+1 FROM versiculo")
	Integer retrieveNextId();
	
	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(numero),0)+1 FROM versiculo WHERE livro_id = :#{#key.livroId}"
	        + " AND capitulo_id = :#{#key.capituloId}")
	Integer retrieveNextVerso(@Param("key") VersiculoKey key);
	
	@Query("SELECT COUNT(p) FROM Versiculo p WHERE LOWER(p.texto) LIKE :#{'%' + #termo + '%'}")
	Integer getOcorrenciasTermo(@Param("termo") String termo);
	
	@Query("SELECT p FROM Versiculo p WHERE p.key.livroId = :#{#key.livroId} "
	        + "AND p.key.capituloId = :#{#key.id} ORDER BY id ASC")
	List<Versiculo> search(@Param("key") CapituloKey key);
	
	@Transactional
	@Modifying
	@Query(nativeQuery=true, value="DELETE FROM versiculo WHERE id = :#{#key.id} "
	        + "AND capitulo_id = :#{#key.capituloId} AND livro_id = :#{#key.livroId}")
	void deleteByKey(@Param("key") VersiculoKey key);
	
}
