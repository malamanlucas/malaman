package br.com.biblia.test;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import br.com.biblia.Application;
import br.com.biblia.core.dao.ExpressaoDAO;
import br.com.biblia.core.dao.VersiculoDAO;
import br.com.biblia.core.model.Dicionario;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;
import br.com.biblia.test.base.ExpressaoBaseTest;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=Application.class, webEnvironment=WebEnvironment.NONE)
@Transactional
@Rollback
public class ExpressaoDAOTest extends ExpressaoBaseTest {

	@Autowired
	private ExpressaoDAO dao;
	
    @Autowired
    private VersiculoDAO versiculoDAO;
    
    @Test
    public void testFindByKeyAndByRange() {
    	Expressao expressaoExpected = garantirExpressao();
    	ExpressaoKey expressaoKey = expressaoExpected.getKey();
    	VersiculoKey key = new VersiculoKey(expressaoKey.getVersiculoId(), expressaoKey.getCapituloId(), expressaoKey.getLivroId());
		Expressao expressaoFinded = dao.findByKeyAndInicioAndFim(key, expressaoExpected.getInicio(), expressaoExpected.getFim());
    	Assert.assertNotNull( expressaoFinded );
    	Assert.assertEquals( expressaoExpected, expressaoFinded );
    }
    
    @Test
    public void testFindByKeyAndByRangeWhenFilterNotApplyToAnyExpressao() {
    	Expressao expressaoExpected = garantirExpressao();
    	ExpressaoKey expressaoKey = expressaoExpected.getKey();
    	VersiculoKey key = new VersiculoKey(expressaoKey.getVersiculoId(), expressaoKey.getCapituloId(), expressaoKey.getLivroId());
		Expressao expressaoFinded = dao.findByKeyAndInicioAndFim(key, -1231, -3495);
    	Assert.assertNull( expressaoFinded );
    }
    
    @Test
    public void testPrePersist() {
    	
    	Versiculo mateus1_1 = getMateus1_1();
    	VersiculoKey key = mateus1_1.getKey();
    	
    	Expressao e = Expressao
    						 .builder()
    						 .descricao("a")
    						 .inicio(1)
    						 .fim(2)
    						 .key( ExpressaoKey.builder()
    								 				  .capituloId( key.getCapituloId() )
    								 				  .expressaoId( 1 )
    								 				  .livroId( key.getLivroId() )
    								 				  .versiculoId( key.getId() )
    								 				  .build() )
    						 .build();
    	dao.save(e);
    }
    
    @Test
	public void testRetrieveNextVersoWhenDoeNotHaveAnyRowsAndExpressaoIdIsNull() {
	    dao.deleteAllInBatch();
	    ExpressaoKey key = new ExpressaoKey(null, 1, 1, 1);
		Assert.assertEquals(new Integer(1), dao.retrieveNextExpressaoId(key));
	}
    
	@Test
	public void testRetrieveNextVersoWhenDoeNotHaveAnyRows() {
	    dao.deleteAllInBatch();
	    Assert.assertEquals(new Integer(1), dao.retrieveNextExpressaoId(new ExpressaoKey(1, 1, 1, 1)));
	}
	
	@Test
	public void testRetrieveNextVersoWhenHasOneRowAndSaveWithExpressionFilledWithDicionarioAndMapa() {
	    dao.deleteAllInBatch();
	    Dicionario dicionario = saveDicionario();
	    
	    Versiculo mateus1_1 = getMateus1_1();
        
        Expressao expressao = addOneExpressaoDicionario(dicionario, mateus1_1);
        addOneExpressaoMapa(expressao);
        
        versiculoDAO.save(mateus1_1);
	    
	    Assert.assertEquals( new Integer(expressao.getKey().getExpressaoId()+1), dao.retrieveNextExpressaoId(expressao.getKey()) );
	    
	    Expressao expressaoInBd = dao.getOne( expressao.getKey() );
	    Assert.assertNotNull( expressaoInBd );
	    Assert.assertNotNull( expressaoInBd.getDicionarios() );
	    Assert.assertFalse( expressaoInBd.getDicionarios().isEmpty() );
	    Assert.assertNotNull( expressaoInBd.getMapas() );
	    Assert.assertFalse( expressaoInBd.getMapas().isEmpty() );
	}
	
}
