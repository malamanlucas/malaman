package br.com.biblia.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.livro.LivroApp;
import br.com.biblia.core.enums.Testamento;
import br.com.biblia.core.model.Livro;

@RestController
@RequestMapping("/api/livros")
public class LivroRestController {
    
    @Autowired
    private LivroApp app;
    
    @GetMapping(value="/")
    public List<Livro> findAll(@RequestParam("testamento") Testamento testamento) {
        return app.searchByTestamento(testamento);
    }
    
}
