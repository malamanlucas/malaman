package br.com.quadrangular.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import br.com.quadrangular.core.model.versiculo.Versiculo;

public interface VersiculoDAO extends JpaRepository<Versiculo, Integer> {

	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(id),0)+1 FROM versiculo")
	Integer retrieveNextId();
	
	@Modifying
	@Query("UPDATE Versiculo v SET v.limpo = ?1 WHERE v.key.id = ?2 AND v.key.capituloId = ?3 AND v.key.livroId = ?4")
	void updateLimpo(String limpo, Integer id, Integer capituloId, Integer livroId);
	
	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(numero),0)+1 FROM versiculo WHERE livro_id = :livroId AND capitulo_id = :capituloId")
	Integer retrieveNextVerso(@Param("livroId") Integer livroId, @Param("capituloId") Integer capituloId);
	
	@Query("SELECT p FROM Versiculo p WHERE p.key.livroId = :livroId AND p.key.capituloId = :capituloId ORDER BY id ASC")
	List<Versiculo> search(@Param("livroId") Integer livroId, @Param("capituloId") Integer capituloId);
	
	@Transactional
	@Modifying
	@Query(nativeQuery=true, value="DELETE FROM versiculo WHERE id = :id AND capitulo_id = :capituloId AND livro_id = :livroId")
	void deleteByKey(@Param("id") Integer id, @Param("capituloId") Integer capituloId, @Param("livroId") Integer livroId);
	
}
