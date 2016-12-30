package br.com.biblia.web.controller.bible;

import java.util.Map;

import javax.faces.context.FacesContext;

import com.google.common.collect.Lists;

import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoDicionario;
import br.com.biblia.core.model.versiculo.ExpressaoDicionarioKey;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import lombok.Data;

@Data
public class ExpressaoBackingBean {

	private Expressao entity;
	private Idioma idioma;

	public void clean(Idioma idioma) {
		entity = Expressao
						.builder()
						.dicionarios( Lists.newArrayList() )
						.key( ExpressaoKey
									   .builder()
									   .build() )
						.build();
	}

	public void init(FacesContext ctx) {
		Map<String, String> map = ctx.getExternalContext().getRequestParameterMap();
		entity.setVersiculoKeyAsJsonReturningEntity(map.get("keyAsJson"));
		entity.setTexto( map.get("texto") );
		entity.setInicio( Integer.parseInt( map.get("inicio") ) );
		entity.setFim( Integer.parseInt( map.get("fim") ) );
	}

}
