package br.com.biblia.test.base;

import org.junit.Assert;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.biblia.core.dao.LivroDAO;
import br.com.biblia.core.dao.VersiculoDAO;
import br.com.biblia.core.enums.LivroEnum;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Livro;
import br.com.biblia.core.model.versiculo.Versiculo;

public abstract class VersiculoBaseTest {
	
	@Autowired
    private LivroDAO livroDAO;
	
	@Autowired
    private VersiculoDAO versiculoDAO;
	
	protected Versiculo getMateus1_1() {
		Livro mateus = livroDAO.findByNome(LivroEnum.MATEUS.getNomeNoBD());
        
        Versiculo mateus1_1 = versiculoDAO.search(new CapituloKey(1, mateus.getId())).get(0);
        mateus1_1 = versiculoDAO.findOne(mateus1_1.getKey());
        Assert.assertNotNull(mateus1_1);
        Assert.assertNotNull(mateus1_1.getKey().getId());
		return mateus1_1;
	}
	
}
