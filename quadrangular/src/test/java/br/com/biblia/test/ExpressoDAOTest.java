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
import br.com.biblia.core.dao.LivroDAO;
import br.com.biblia.core.dao.VersiculoDAO;
import br.com.biblia.core.enums.LivroEnum;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Livro;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
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
	
	@Test
	public void testRetrieveNextVersoWhenDoeNotHaveAnyRows() {
	    dao.deleteAllInBatch();
	    Assert.assertEquals(new Integer(1), dao.retrieveNextVerso(new ExpressaoKey(1, 1, 1, 1)));
	}
	
	@Test
	public void testRetrieveNextVersoWhenHasOneRow() {
	    dao.deleteAllInBatch();
	    
	    Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
        
        Versiculo mateus1_1 = versiculoDAO.search(new CapituloKey(1, mateus.getId())).get(0);
        mateus1_1 = versiculoDAO.getOne(mateus1_1.getKey());
        Assert.assertNotNull(mateus1_1);
        Assert.assertNotNull(mateus1_1.getKey().getId());
        
        VersiculoKey versiculoKey = mateus1_1.getKey();
        ExpressaoKey expressaoKey = new ExpressaoKey(5, versiculoKey.getId(), versiculoKey.getCapituloId(), versiculoKey.getLivroId());
        mateus1_1.getExpressoes().add( new Expressao(expressaoKey, 1, 1, "texto", "descricao", null));
        versiculoDAO.save(mateus1_1);
	    
	    Assert.assertEquals( new Integer(expressaoKey.getExpressaoId()+1), dao.retrieveNextVerso(expressaoKey) );
	}
	
	
}
