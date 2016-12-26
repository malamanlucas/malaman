package br.com.biblia.test;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.VersiculoKey;

@RunWith(SpringRunner.class)
public class VersiculoJSONParserTest {

	@Test
	public void testConvertVersiculoKeyToJson() throws Exception {
		VersiculoKey key = new VersiculoKey(1,2,3);
		
		String json = key.toJson();
		
		ExpressaoKey value = new Expressao().setVersiculoKeyAsJsonReturningEntity(json).getKey();
		
		Assert.assertNotNull(key);
		Assert.assertNotNull(json);
		Assert.assertNotNull(value);
		Assert.assertEquals(new VersiculoKey(value.getVersiculoId(), value.getCapituloId(), value.getLivroId()), key);

	}
	
	
}
