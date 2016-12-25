package br.com.quadrangular.core.apps.versiculo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.quadrangular.core.dao.DicionarioDAO;
import br.com.quadrangular.core.dao.VersiculoDAO;
import br.com.quadrangular.core.enums.Idioma;
import br.com.quadrangular.core.model.Dicionario;
import br.com.quadrangular.core.model.DicionarioKey;
import br.com.quadrangular.core.model.versiculo.Versiculo;
import br.com.quadrangular.core.model.versiculo.VersiculoKey;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class VersiculoFacade implements VersiculoApp {

	@Autowired
	private VersiculoDAO dao;
	
	@Autowired
	private DicionarioDAO dicDao;

	public Versiculo save(Versiculo entity) {
		VersiculoKey key = entity.getKey();
		if ( key.getId() == null ) {
			key.setId( dao.retrieveNextId() );
			entity.setNumero( dao.retrieveNextVerso( key.getLivroId(), key.getCapituloId() ));
		}
		entity.setFormatado( formata(entity.getTexto(), entity.getIdioma()) );
		entity.setLimpo( limpar(entity.getTexto()) );
		dao.save( entity );
		return entity;
	}

	private String limpar(String texto) {
		return texto.replaceAll("[\\[|\\]|0-9|=|*]", "");
	}

	public String formata(String text, Idioma idioma) {
		StringBuilder a = new StringBuilder( text );
		System.out.println(text);
		StringBuilder nova = new StringBuilder(); 
		
		while ( a.indexOf("[") != -1 ) {
			int start = a.indexOf("[");
			nova.append( a.substring(0, start) );
			a.delete(0, start);
			int end = a.indexOf("]");
			String codigo = a.substring(end+1, a.indexOf("="));
			
			definirPalavra(codigo, idioma);
			
			nova.append( String.format("<span class=\"texto\" dic=\"%s\">", codigo) );
			nova.append( a.substring(1, end) );
			nova.append( "</span>" );
			a.delete(0, 1);
			a.delete(0, a.indexOf("]"));
			a.delete(0, a.indexOf("=")+1);
		}
		nova.append( a );
		return nova.toString();
	}

	private void definirPalavra(String codigo, Idioma idioma) {
		Integer dicId = Integer.valueOf(codigo);
		DicionarioKey key = new DicionarioKey(dicId, idioma);
		if ( !dicDao.exists(key) ) {
			dicDao.save( new Dicionario( key, "Não há definição para esta palavra", false) );
		}
	}

	public List<Versiculo> findAll() {
		return dao.findAll();
	}

	public void deleteByKey(VersiculoKey key) {
		dao.deleteByKey( key.getId(), key.getCapituloId(), key.getLivroId() );
	}

	@Override
	public List<Versiculo> search(Integer livroId, Integer capituloId) {
		return dao.search(livroId, capituloId);
	}

	@Override
	@Transactional(propagation=Propagation.REQUIRED)
	public void atualizarLimpo() {
		
		List<Versiculo> lst = findAll();
		
		lst.forEach( entity -> {
			entity.setLimpo( limpar(entity.getTexto()));
			VersiculoKey key = entity.getKey();
			dao.updateLimpo(entity.getLimpo(), key.getId(), key.getCapituloId(), key.getLivroId());
		});
		
	}
	
}
