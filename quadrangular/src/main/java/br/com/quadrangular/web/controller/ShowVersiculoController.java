package br.com.quadrangular.web.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.quadrangular.core.apps.capitulo.CapituloApp;
import br.com.quadrangular.core.apps.dicionario.DicionarioApp;
import br.com.quadrangular.core.apps.message.MessageApp;
import br.com.quadrangular.core.apps.versiculo.VersiculoApp;
import br.com.quadrangular.core.enums.Idioma;
import br.com.quadrangular.core.model.Capitulo;
import br.com.quadrangular.core.model.CapituloKey;
import br.com.quadrangular.core.model.Dicionario;
import br.com.quadrangular.core.model.DicionarioKey;
import br.com.quadrangular.core.model.Message;
import br.com.quadrangular.core.model.versiculo.Versiculo;
import lombok.Data;

@Data
@ManagedBean(name="showVersiculoMB")
@RestController("showVersiculoMB")
@Scope("view")
public class ShowVersiculoController {

	private Dicionario dicionario;
	
	@Autowired
	private MessageApp messageApp;
	
	@Autowired
	private DicionarioApp dicApp;
	
	private Message message = new Message();
	
	private List<Versiculo> versos;
	
	@Autowired
	private VersiculoApp versiculoApp;
	
	@Autowired
	private CapituloApp capituloApp;

	private Capitulo capitulo;
	
	@PostConstruct
	public void init() {
		FacesContext ctx = FacesContext.getCurrentInstance();
		Map<String, String> map = ctx
									.getExternalContext()
									.getRequestParameterMap();
		Integer livroId = Integer.valueOf( map.get("livro_id") );
		Integer capituloId = Integer.valueOf( map.get("capitulo_id") );
		
		this.versos = versiculoApp.search(livroId, capituloId);
		
		this.capitulo = capituloApp.findOne( new CapituloKey(capituloId, livroId) );
	}
	
	public void message() {
		Map<String, String> map = FacesContext
									       .getCurrentInstance()
									       .getExternalContext()
									       .getRequestParameterMap();
		message.setTitle( map.get( "title" ) );
	}
	
	public void sendError() {
		messageApp.save( message );
		this.message = new Message();
	}
	
	public void retrieveDefinition() {
		Map<String, String> map = FacesContext
									       .getCurrentInstance()
									       .getExternalContext()
									       .getRequestParameterMap();
		
		Integer id = Integer.valueOf( map.get("dic") );
		Idioma idioma = Idioma.valueOf( map.get( "idioma") );
		this.dicionario = dicApp.findOne( new DicionarioKey( id, idioma) );
	}
	
}