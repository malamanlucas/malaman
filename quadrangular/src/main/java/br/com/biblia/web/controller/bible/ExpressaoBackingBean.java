package br.com.biblia.web.controller.bible;

import java.util.Map;

import javax.faces.context.FacesContext;

import br.com.biblia.core.model.versiculo.Expressao;
import lombok.Data;

@Data
public class ExpressaoBackingBean {

	private Expressao entity = new Expressao();

	public void clean() {
		entity = new Expressao();
	}

	public void init(FacesContext ctx) {
		Map<String, String> map = ctx.getExternalContext().getRequestParameterMap();
		entity.setVersiculoKeyAsJsonReturningEntity(map.get("keyAsJson"));
		entity.setTexto( map.get("texto") );
		entity.setInicio( Integer.parseInt( map.get("inicio") ) );
		entity.setFim( Integer.parseInt( map.get("fim") ) );
	}

}
