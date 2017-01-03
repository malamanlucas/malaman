 package br.com.biblia.web.controller.bible;

import java.util.List;
import java.util.Map;

import javax.faces.context.FacesContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.google.common.collect.Lists;

import br.com.biblia.core.apps.expressao.ExpressaoApp;
import br.com.biblia.core.apps.versiculo.VersiculoApp;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.ExpressaoDicionario;
import br.com.biblia.core.model.versiculo.ExpressaoDicionarioKey;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.web.config.AutowireHelper;
import lombok.Data;

@Data
public class ExpressaoBackingBean {

	public ExpressaoBackingBean() {
		AutowireHelper.autowire(this, expressaoApp);
	}
	
	private Expressao entity;
	private Idioma idioma;
	private ExpressaoDicionario dicionario;
	private CapituloKey capituloKey;
	private List<Versiculo> versos;
	
	@Autowired
	private ExpressaoApp expressaoApp;
	
	@Autowired
	private VersiculoApp versiculoApp;
	
	public void salvarExpressao() {
		expressaoApp.save(entity);
		this.versos = versiculoApp.search(capituloKey);
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
		
		Expressao expressaoFinded = expressaoApp.findByKeyAndInicioAndFim(entity.getKey(), entity.getInicio(), entity.getFim());
		if ( expressaoFinded != null ) {
			entity.setDicionarios( expressaoFinded.getDicionarios() );
			entity.setMapas( expressaoFinded.getMapas() );
			entity.getKey().setExpressaoId( expressaoFinded.getKey().getExpressaoId() );
		}
		
	}
	
	public Idioma[] getAllIdioma() {
		return Idioma.values();
	}

}
