package br.com.biblia.web.rest;

import java.beans.PropertyEditorSupport;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.livro.LivroApp;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Livro;

@RestController
@RequestMapping("/api/livros")
public class LivroRestController {
    
    class TestamentoConverter extends PropertyEditorSupport {
        @Override
        public void setAsText(String text) throws IllegalArgumentException {
            setValue( Testamento.valueOf(text) );
        }
    }
    
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(Testamento.class, new TestamentoConverter());
    }
    
    @Autowired
    private LivroApp app;
    
    @GetMapping(value="/")
    public List<Livro> findAll(@RequestParam("testamento") Testamento testamento) {
        return app.searchByTestamento(testamento);
    }
    
}
