package br.com.biblia.web.controller.bible;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.capitulo.CapituloApp;
import br.com.biblia.core.apps.livro.LivroApp;
import br.com.biblia.core.apps.versiculo.VersiculoApp;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Capitulo;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.Livro;
import br.com.biblia.core.model.versiculo.Versiculo;
import br.com.biblia.core.model.versiculo.VersiculoKey;
import lombok.Data;

@RestController("versiculoMB")
@Scope("view")
@Data
public class VersiculoController {
	
	private VersiculoBackingBean backingBean = new VersiculoBackingBean();
	private List<Versiculo> list;

	@Autowired
	private VersiculoApp app;
	
	@Autowired
	private LivroApp livroApp;
	
	@Autowired
	private CapituloApp capituloApp;
	
	@PostConstruct
	public void init() {
		searchLivros();
		
		List<Livro> livros = backingBean.getLivros();
		if ( !livros.isEmpty() ) {
			backingBean.setLivroId( livros.get(0).getId() );
			loadCapitulos();
		}
		
		clean();
		searchVersiculo();
	}
	
	public void modifyTestamento() {
		Testamento testamento = backingBean.getTestamento();
		
		if ( testamento.isNovo() ) {
			backingBean.setIdioma( Idioma.GREGO );
		} else {
			backingBean.setIdioma( Idioma.HEBRAICO );
		}
		
		searchLivros();
		searchVersiculoAndLoadCapitulos();
	}

	private void searchLivros() {
		List<Livro> livros = livroApp.searchByTestamento( backingBean.getTestamento() );
		backingBean.setLivros( livros );
		
		if ( !livros.isEmpty() ) {
			backingBean.setLivroId( livros.get(0).getId() );
		}
	}
	
	public void loadCapitulos() {
		List<Capitulo> capitulos = capituloApp.searchByLivro( backingBean.getLivroId() );
		backingBean.setCapitulos( capitulos );
		
		if ( !capitulos.isEmpty() ) {
			backingBean.setCapituloId( capitulos.get(0).getKey().getId() );
		}
	}
	
	public void searchVersiculoAndLoadCapitulos() {
		loadCapitulos();
		searchVersiculo();
	}

	public void mostrarVersiculo() {
		backingBean.setVersiculo( backingBean.getEntity().textoSemFormatacao() );
	}
	
	private void clean() {
		backingBean.setEntity( new Versiculo() );
		backingBean.setVersiculo( new String() );
	}

	public void searchVersiculo() {
		list = this.app.search( new CapituloKey(backingBean.getCapituloId(), backingBean.getLivroId()) );
	}

	public void delete(VersiculoKey key) {
		app.deleteByKey( key );
		clean();
		searchVersiculo();
	}

	public void save() {
		Versiculo entity = backingBean.getEntity();
		entity.setIdioma( backingBean.getIdioma() );
		entity.getKey().setCapituloId( backingBean.getCapituloId() );
		entity.getKey().setLivroId( backingBean.getLivroId() );
		app.save( entity );
		clean();
		searchVersiculo();
	}
	
	public void saveExpression() {
		
	}
	
}
