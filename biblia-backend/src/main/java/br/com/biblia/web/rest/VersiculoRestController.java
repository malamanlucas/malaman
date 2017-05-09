package br.com.biblia.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.versiculo.VersiculoApp;
import br.com.biblia.core.model.CapituloKey;
import br.com.biblia.core.model.versiculo.Versiculo;

@RestController
@RequestMapping("/api/versiculos")
public class VersiculoRestController {

	@Autowired
    private VersiculoApp app;

    @GetMapping(value="/")
    public List<Versiculo> findAll(@RequestParam("livroId") Integer livroId,
    							   @RequestParam("capituloId") Integer capituloId) {
        return app.search( new CapituloKey(capituloId, livroId) );
    }

}
