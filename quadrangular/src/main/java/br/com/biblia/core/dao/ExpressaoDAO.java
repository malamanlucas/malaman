package br.com.biblia.core.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;

public interface ExpressaoDAO extends JpaRepository<Expressao, ExpressaoKey> {

//	@Query(nativeQuery=true, value="SELECT COALESCE(MAX(numero),0)+1 FROM versiculo WHERE livro_id = :livroId AND capitulo_id = :capituloId")
//	Integer retrieveNextVerso(@Param("livroId") Integer livroId, @Param("capituloId") Integer capituloId, @Param("versiculoId") Integer versiculoId);
	
}
