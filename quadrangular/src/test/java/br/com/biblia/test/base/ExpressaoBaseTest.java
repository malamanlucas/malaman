package br.com.biblia.test.base;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.google.common.collect.Lists;

import br.com.biblia.core.dao.DicionarioDAO;
import br.com.biblia.core.dao.MapaDAO;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.Dicionario;
import br.com.biblia.core.model.DicionarioKey;
import br.com.biblia.core.model.Mapa;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoDicionario;
import br.com.biblia.core.model.versiculo.ExpressaoDicionarioKey;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.ExpressaoMapa;
import br.com.biblia.core.model.versiculo.ExpressaoMapaKey;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;

public abstract class ExpressaoBaseTest extends VersiculoBaseTest {

	@Autowired
    private DicionarioDAO dicionarioDAO;
    
    @Autowired
    private MapaDAO mapaDAO;
	
	protected void addOneExpressaoMapa(Expressao expressao) {
		
		Mapa mapa = Mapa
					  .builder()
					  .nome("Teste")
					  .id(1)
					  .build();
		
		mapaDAO.saveAndFlush(mapa);
		
		ExpressaoMapa expressaoMapa = ExpressaoMapa
												 .builder()
												 .key( ExpressaoMapaKey
														 			 .builder()
														 			 .expressaoKey(expressao.getKey())
														 			 .id(mapa.getId())
														 			 .build() )
												 .build();
		
		List<ExpressaoMapa> mapas = (List<ExpressaoMapa>) Lists.newArrayList(expressaoMapa);
		expressao.setMapas(mapas);
		
	}
	
	protected Expressao addOneExpressaoDicionario(Dicionario dicionario, VersiculoKey versiculoKey) {
        ExpressaoKey expressaoKey = new ExpressaoKey(5, versiculoKey.getId(), versiculoKey.getCapituloId(), versiculoKey.getLivroId());
        Expressao expressao = instanceExpressao(5, versiculoKey, 1, 1, "texto", "descricao");
        ExpressaoDicionario expressaoDicionario = ExpressaoDicionario
    															.builder()
    															.key( ExpressaoDicionarioKey
																						.builder()
																						.expressaoKey(expressaoKey)
																						.id(dicionario.getKey().getId())
																						.idioma(dicionario.getKey().getIdioma())
																						.build() ) 
    															.build();
        expressao.setDicionarios( Lists.newArrayList(expressaoDicionario) );
        return expressao;
	}

	protected Expressao addOneExpressaoDicionario(Dicionario dicionario, Versiculo mateus1_1) {
		Expressao expressao = addOneExpressaoDicionario(dicionario, mateus1_1.getKey());
		mateus1_1.getExpressoes().add( expressao );
		return expressao;
	}

	protected Dicionario saveDicionario() {
		DicionarioKey dicionarioKey = DicionarioKey
	    										.builder()
	    										.id(-1)
	    										.idioma(Idioma.HEBRAICO)
	    										.build();
		Dicionario dicionario = Dicionario
	    								.builder()
	    								.key(dicionarioKey)
	    								.definicao("Blabla")
	    								.build();
		
		dicionarioDAO.saveAndFlush( dicionario );
		
		return dicionario;
	}
	
	protected Expressao instanceExpressao(Integer expressaoId, VersiculoKey k, Integer start, Integer fim, String texto, String descricao) {
		return Expressao
					.builder()
					.key( ExpressaoKey
								.builder()
								.expressaoId(expressaoId)
								.versiculoId(k.getId())
								.capituloId(k.getCapituloId())
								.livroId(k.getLivroId())
								.build() )
					.inicio(start)
					.fim(fim)
					.texto(texto)
					.descricao(descricao)
					.build();
	}
	
}
