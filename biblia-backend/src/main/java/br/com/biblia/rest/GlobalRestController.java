package br.com.biblia.rest;

import java.beans.PropertyEditorSupport;

import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.com.biblia.enums.Idioma;
import br.com.biblia.enums.Testamento;

@RestControllerAdvice
public class GlobalRestController {

	class TestamentoConverter extends PropertyEditorSupport {
        @Override
        public void setAsText(String text) throws IllegalArgumentException {
            setValue( Testamento.valueOf(text) );
        }
    }
	
	class IdiomaConverter extends PropertyEditorSupport {
		@Override
		public void setAsText(String text) throws IllegalArgumentException {
			setValue( Idioma.valueOf(text) );
		}
	}
    
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(Testamento.class, new TestamentoConverter());
        binder.registerCustomEditor(Idioma.class, new IdiomaConverter());
    }
}
