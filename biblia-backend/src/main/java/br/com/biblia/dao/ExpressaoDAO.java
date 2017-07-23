package br.com.biblia.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.biblia.model.versiculo.Expressao;
import br.com.biblia.model.versiculo.ExpressaoKey;
import br.com.biblia.model.versiculo.VersiculoKey;

public interface ExpressaoDAO extends JpaRepository<Expressao, ExpressaoKey> {

    @Query(nativeQuery=true,
            value="SELECT COALESCE(MAX(expressao_id),0)+1 FROM expressao WHERE versiculo_id = :#{#key.versiculoId}"
                 +" AND capitulo_id = :#{#key.capituloId} AND livro_id = :#{#key.livroId}")
        Integer retrieveNextExpressaoId(@Param("key") ExpressaoKey key);
    
    @Query(value="SELECT e FROM Expressao e WHERE e.key.versiculoId = :#{#key.id} AND e.key.capituloId = :#{#key.capituloId}"
    		+ " AND e.key.livroId = :#{#key.livroId} AND e.inicio = :#{#inicio} AND e.fim = :#{#fim}")
    Expressao findByKeyAndInicioAndFim(@Param("key") VersiculoKey key, @Param("inicio") Integer inicio, @Param("fim") Integer fim);
    
    @Modifying
    @Query(value="DELETE FROM Expressao e WHERE e.key.versiculoId = :#{#key.id} AND e.key.capituloId = :#{#key.capituloId}"
    		+ " AND e.key.livroId = :#{#key.livroId} AND e.inicio = :#{#inicio} AND e.fim = :#{#fim}")
    void deleteByKeyAndInicioAndFim(@Param("key") VersiculoKey key, @Param("inicio") Integer inicio, @Param("fim") Integer fim);
    
    
	
}
