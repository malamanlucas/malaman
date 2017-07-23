package br.com.biblia.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.capitulo.CapituloApp;
import br.com.biblia.core.model.Capitulo;

@RestController
@RequestMapping("/api/capitulos")
public class CapituloRestController {
    
    @Autowired
    private CapituloApp app;
    
    @GetMapping(value="/")
    public List<Capitulo> findAll(@RequestParam("livroId") Integer livroId) {
        return app.searchByLivro(livroId); 
    }
    
}
