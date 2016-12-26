package br.com.biblia.web.controller.bible;

import java.util.List;

import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Capitulo;
import br.com.biblia.core.model.Livro;
import br.com.biblia.core.model.versiculo.Expressao;
import br.com.biblia.core.model.versiculo.Versiculo;
import lombok.Data;

@Data
public class VersiculoBackingBean {

	private Versiculo entity = new Versiculo();
	private Versiculo entityModal = new Versiculo();
	private String versiculo = new String();
	private List<Livro> livros;
	private List<Capitulo> capitulos;
	
	Testamento testamento = Testamento.VELHO;
	Idioma idioma = Idioma.HEBRAICO;
	
	private Integer livroId;
	private Integer capituloId;
	
	public Idioma[] allIdioma() {
		return Idioma.values();
	}
	
	
}
