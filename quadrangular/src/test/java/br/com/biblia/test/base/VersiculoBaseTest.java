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
	
}
