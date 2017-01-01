package br.com.biblia.web.controller.bible;

import java.util.Map;

import javax.faces.context.FacesContext;

import com.google.common.collect.Lists;

import br.com.biblia.core.apps.expressao.ExpressaoApp;
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
	private ExpressaoDicionario dicionario;
	
	private ExpressaoApp expressaoApp;
	
	public void salvarExpressao() {
		expressaoApp.save(entity);
	}
	
	public void clean() {
		entity = Expressao
						.builder()
						.dicionarios( Lists.newArrayList() )
						.key( ExpressaoKey
									   .builder()
									   .build() )
						.build();
		cleanDicionario();
	}
	
	public void cleanDicionario() {
		this.dicionario = ExpressaoDicionario
										.builder()
										.key( ExpressaoDicionarioKey
																 .builder()
																 .idioma(idioma)
																 .expressaoKey( entity.getKey() )
																 .build() ) 
										.build();
	}
	
	public void delDicionario(ExpressaoDicionario dicionario) {
		this.entity.getDicionarios().remove(dicionario);
	}
	
	public void addDicionario() {
		this.dicionario.getKey().setExpressaoKey( this.entity.getKey() );
		this.entity.getDicionarios().add( this.dicionario );
		cleanDicionario();
	}

	public void init(FacesContext ctx) {
		clean();
		Map<String, String> map = ctx.getExternalContext().getRequestParameterMap();
		entity.setVersiculoKeyAsJsonReturningEntity(map.get("keyAsJson"));
		entity.setTexto( map.get("texto") );
		entity.setInicio( Integer.parseInt( map.get("inicio") ) );
		entity.setFim( Integer.parseInt( map.get("fim") ) );
	}

}
