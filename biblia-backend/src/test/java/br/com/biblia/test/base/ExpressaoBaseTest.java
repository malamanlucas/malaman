package br.com.biblia.test.base;

import java.util.List;

import org.assertj.core.util.Lists;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.biblia.dao.DicionarioDAO;
import br.com.biblia.dao.ExpressaoDAO;
import br.com.biblia.dao.MapaDAO;
import br.com.biblia.enums.Idioma;
import br.com.biblia.model.Dicionario;
import br.com.biblia.model.DicionarioKey;
import br.com.biblia.model.Mapa;
import br.com.biblia.model.versiculo.Expressao;
import br.com.biblia.model.versiculo.ExpressaoDicionario;
import br.com.biblia.model.versiculo.ExpressaoDicionarioKey;
import br.com.biblia.model.versiculo.ExpressaoKey;
import br.com.biblia.model.versiculo.ExpressaoMapa;
import br.com.biblia.model.versiculo.ExpressaoMapaKey;
import br.com.biblia.model.versiculo.Versiculo;
import br.com.biblia.model.versiculo.VersiculoKey;

public abstract class ExpressaoBaseTest extends VersiculoBaseTest {

	@Autowired
    private DicionarioDAO dicionarioDAO;
    
    @Autowired
    private MapaDAO mapaDAO;
    
    @Autowired
    private ExpressaoDAO expressaoDAO;
    
    protected Expressao garantirExpressao() {
    	return garantirExpressao( t -> {} );
    }
    
    protected Expressao garantirExpressao(EntityModifier<Expressao> modifier) {
		Versiculo mateus1_1 = getMateus1_1();
    	VersiculoKey versiculoKey = mateus1_1.getKey();
    	Expressao expressao = Expressao.builder()
    										 .inicio(1)
    										 .fim(2)
    										 .descricao("bla")
    										 .texto("bla")
    										 .key( ExpressaoKey.builder()
    												 				  .capituloId(versiculoKey.getCapituloId())
    												 				  .livroId(versiculoKey.getLivroId())
    												 				  .versiculoId(versiculoKey.getId())
    												 				  .expressaoId(1)
    												 				  .build() )		
    										 .build();
    	modifier.modify(expressao);
    	expressaoDAO.save(expressao);
    	return expressaoDAO.findOne(expressao.getKey());
	}
    
	protected void addOneExpressaoMapa(Mapa mapa, Expressao expressao) {
		
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
	
	protected void addOneExpressaoMapa(Expressao expressao) {
		
		Mapa mapa = Mapa
					  .builder()
					  .nome("Teste")
					  .id(1)
					  .build();
		
		mapaDAO.save(mapa);
		addOneExpressaoMapa(mapa, expressao);
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
		mateus1_1.setExpressoes( Lists.newArrayList(expressao) );
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
		
		dicionarioDAO.save( dicionario );
		
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
