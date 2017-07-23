package br.com.biblia.web.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.capitulo.CapituloApp;
import br.com.biblia.core.apps.dicionario.DicionarioApp;
import br.com.biblia.core.apps.message.MessageApp;
import br.com.biblia.core.apps.versiculo.VersiculoApp;
import br.com.biblia.core.dao.LivroDAO;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.Capitulo;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Dicionario;
import br.com.biblia.core.model.DicionarioKey;
import br.com.biblia.core.model.Message;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.web.controller.bible.ExpressaoBackingBean;
import lombok.Data;

@Data
@ManagedBean(name="showVersiculoMB")
@RestController("showVersiculoMB")
@Scope("view")
public class ShowVersiculoController {

	private ExpressaoBackingBean expressaoBackingBean = new ExpressaoBackingBean();
	
	private Dicionario dicionario;
	
	private Message message = new Message();
	
	private List<Versiculo> versos;
	
	@Autowired
	private MessageApp messageApp;
	
	@Autowired
	private DicionarioApp dicApp;
	
	@Autowired
	private VersiculoApp versiculoApp;
	
	@Autowired
	private CapituloApp capituloApp;

	private Capitulo capitulo;
	
	private CapituloKey capituloKey;
	
	@Autowired 
	private LivroDAO livroDAO;
	
	private Integer qtdCapitulo;

	@PostConstruct
	public void init() {
		FacesContext ctx = FacesContext.getCurrentInstance();
		Map<String, String> map = ctx
									.getExternalContext()
									.getRequestParameterMap();
		
		Integer livroId = Integer.valueOf( map.get("livro_id") );
		Integer capituloId = Integer.valueOf( map.get("capitulo_id") );
		
		capituloKey = new CapituloKey(capituloId, livroId);
		this.versos = versiculoApp.search( capituloKey );
		
		this.capitulo = capituloApp.findOne( capituloKey );
		this.expressaoBackingBean.setIdioma( Idioma.valueOf(map.get("idioma")) );
		
		//para não dar NullPointer na tela
		this.expressaoBackingBean.clean();
		this.qtdCapitulo = livroDAO.getQtdCapitulosById( livroId );
	}
	
	public void initExpressao() {
		this.expressaoBackingBean.init( FacesContext.getCurrentInstance() );
	}
	
	public void salvarExpressao() {
		this.expressaoBackingBean.getExpressaoApp().save( this.expressaoBackingBean.getEntity() );
		this.versos = versiculoApp.search(capituloKey);
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