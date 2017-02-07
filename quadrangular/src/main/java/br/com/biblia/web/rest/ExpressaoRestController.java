package br.com.biblia.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.biblia.core.apps.expressao.ExpressaoApp;
import br.com.biblia.core.model.versiculo.ExpressaoKey;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/api/expressao")
public class ExpressaoRestController {

	@Autowired
	private ExpressaoApp app;
	
    @PostMapping(value="/")
    public String findAll(@RequestBody ExpressaoSearchParam param) {
    	System.out.println(param);
//		app.findByKeyAndInicioAndFim(key, inicio, fim);
    	return "qweqwewq";
    }
    
    @Data @AllArgsConstructor @NoArgsConstructor
    class ExpressaoSearchParam {
    	private ExpressaoKey key;
    	private Integer start;
    	private Integer end;
    }

}
