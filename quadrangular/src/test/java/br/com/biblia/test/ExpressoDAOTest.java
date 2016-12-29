package br.com.biblia.test;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import com.google.common.collect.Lists;

import br.com.biblia.Application;
import br.com.biblia.core.dao.DicionarioDAO;
import br.com.biblia.core.dao.ExpressaoDAO;
import br.com.biblia.core.dao.LivroDAO;
import br.com.biblia.core.dao.MapaDAO;
import br.com.biblia.core.dao.VersiculoDAO;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.enums.LivroEnum;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Dicionario;
import br.com.biblia.core.model.DicionarioKey;
import br.com.biblia.core.model.Livro;
import br.com.biblia.core.model.Mapa;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoDicionario;
import br.com.biblia.core.model.versiculo.ExpressaoDicionarioKey;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.ExpressaoMapa;
import br.com.biblia.core.model.versiculo.ExpressaoMapaKey;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.NONE)
@Transactional
@Rollback
public class ExpressoDAOTest {

	@Autowired
	private ExpressaoDAO dao;
	
	@Autowired
    private LivroDAO livroDAO;
    
    @Autowired
    private VersiculoDAO versiculoDAO;
    
    @Autowired
    private DicionarioDAO dicionarioDAO;
    
    @Autowired
    private MapaDAO mapaDAO;
    
	@Test
	public void testRetrieveNextVersoWhenDoeNotHaveAnyRows() {
	    dao.deleteAllInBatch();
	    Assert.assertEquals(new Integer(1), dao.retrieveNextVerso(new ExpressaoKey(1, 1, 1, 1)));
	}
	
	@Test
	public void testRetrieveNextVersoWhenHasOneRow() {
	    dao.deleteAllInBatch();
	    Dicionario dicionario = saveDicionario();
	    
	    Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
        
        Versiculo mateus1_1 = versiculoDAO.search(new CapituloKey(1, mateus.getId())).get(0);
        mateus1_1 = versiculoDAO.getOne(mateus1_1.getKey());
        Assert.assertNotNull(mateus1_1);
        Assert.assertNotNull(mateus1_1.getKey().getId());
        
        Expressao expressao = addOneExpressaoDicionario(dicionario, mateus1_1);
        addOneExpressaoMapa(expressao);
        
        versiculoDAO.save(mateus1_1);
	    
	    Assert.assertEquals( new Integer(expressao.getKey().getExpressaoId()+1), dao.retrieveNextVerso(expressao.getKey()) );
	    
	    Expressao expressaoInBd = dao.getOne( expressao.getKey() );
	    Assert.assertNotNull( expressaoInBd );
	    Assert.assertNotNull( expressaoInBd.getDicionarios() );
	    Assert.assertFalse( expressaoInBd.getDicionarios().isEmpty() );
	    Assert.assertNotNull( expressaoInBd.getMapas() );
	    Assert.assertFalse( expressaoInBd.getMapas().isEmpty() );
	}

	private void addOneExpressaoMapa(Expressao expressao) {
		
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

	private Expressao addOneExpressaoDicionario(Dicionario dicionario, Versiculo mateus1_1) {
		VersiculoKey versiculoKey = mateus1_1.getKey();
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
		mateus1_1.getExpressoes().add(expressao);
		return expressao;
	}

	private Dicionario saveDicionario() {
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
	
	private Expressao instanceExpressao(Integer expressaoId, VersiculoKey k, Integer start, Integer fim, String texto, String descricao) {
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
