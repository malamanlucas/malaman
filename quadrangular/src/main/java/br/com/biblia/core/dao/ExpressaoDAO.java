package br.com.biblia.core.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;

public interface ExpressaoDAO extends JpaRepository<Expressao, ExpressaoKey> {

    @Query(nativeQuery=true,
            value="SELECT COALESCE(MAX(expressao_id),0)+1 FROM expressao WHERE versiculo_id = :#{#key.versiculoId}"
                 +" AND capitulo_id = :#{#key.capituloId} AND livro_id = :#{#key.livroId}")
        Integer retrieveNextExpressaoId(@Param("key") ExpressaoKey key);
	
}
