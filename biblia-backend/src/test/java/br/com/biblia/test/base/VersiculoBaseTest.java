package br.com.biblia.test.base;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;

import br.com.biblia.core.dao.LivroDAO;
import br.com.biblia.core.dao.VersiculoDAO;
import br.com.biblia.core.enums.LivroEnum;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Livro;
import br.com.biblia.core.model.versiculo.Versiculo;

@Sql(executionPhase=ExecutionPhase.BEFORE_TEST_METHOD, statements="DELETE FROM expressao")
public abstract class VersiculoBaseTest {
	
	@Autowired
    private LivroDAO livroDAO;
	
	@Autowired
    private VersiculoDAO versiculoDAO;
	
	@PersistenceContext
	private EntityManager entityManager;
	
	protected Versiculo getMateus1_1() {
		Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
        
        Versiculo mateus1_1 = versiculoDAO.search(new CapituloKey(1, mateus.getId())).get(0);
        mateus1_1 = versiculoDAO.getOne(mateus1_1.getKey());
        entityManager.detach(mateus1_1);
        Assert.assertNotNull(mateus1_1);
        Assert.assertNotNull(mateus1_1.getKey().getId());
		return mateus1_1;
	}
	
	protected Versiculo getMateus1_2() {
		Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
        
        Versiculo mateus1_2 = versiculoDAO.search(new CapituloKey(1, mateus.getId())).get(1);
        mateus1_2 = versiculoDAO.getOne(mateus1_2.getKey());
        entityManager.detach(mateus1_2);
        Assert.assertNotNull(mateus1_2);
        Assert.assertNotNull(mateus1_2.getKey().getId());
		return mateus1_2;
	}
	
	protected Versiculo getMateus1_16() {
		Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
        
        Versiculo mateus1_16 = versiculoDAO.search(new CapituloKey(15, mateus.getId())).get(1);
        mateus1_16 = versiculoDAO.getOne(mateus1_16.getKey());
        entityManager.detach(mateus1_16);
        Assert.assertNotNull(mateus1_16);
        Assert.assertNotNull(mateus1_16.getKey().getId());
		return mateus1_16;
	}
	
	protected Versiculo getMateus5_6() {
		Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
        
        Versiculo mateus5_6 = versiculoDAO.search(new CapituloKey(5, mateus.getId())).get(5);
        mateus5_6 = versiculoDAO.getOne(mateus5_6.getKey());
        entityManager.detach(mateus5_6);
        Assert.assertNotNull(mateus5_6);
        Assert.assertNotNull(mateus5_6.getKey().getId());
		return mateus5_6;
	}
	
}
