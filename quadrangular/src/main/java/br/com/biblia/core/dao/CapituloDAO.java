package br.com.biblia.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import br.com.biblia.core.model.Capitulo;
import br.com.biblia.core.model.CapituloKey;

public interface CapituloDAO extends JpaRepository<Capitulo, CapituloKey> {
	
	@Query("SELECT p FROM Capitulo p WHERE p.key.livroId = :livroId ORDER BY p.key.id ASC")
	List<Capitulo> searchByLivro(@Param("livroId") Integer livroId);
	
	@Transactional
	@Modifying
	@Query(nativeQuery=true, value="DELETE FROM capitulo WHERE id = :capituloId AND livro_id = :livroId")
	void deleteByKey(@Param("capituloId") Integer capituloId, @Param("livroId") Integer livroId);
	
	@Transactional
	@Modifying
	@Query(nativeQuery=true, value="DELETE FROM capitulo WHERE livro_id = :livroId")
	void deleteByLivro(@Param("livroId") Integer livroId);
	
}
