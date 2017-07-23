package br.com.biblia.web.rest;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Maps;

import br.com.biblia.core.apps.versiculo.VersiculoApp;
import br.com.biblia.core.model.Sentenca;

@RestController
@RequestMapping("/api/sentencas")
public class SentencaRestController {

	@Autowired
    private VersiculoApp versiculoApp;
    
    @GetMapping(value="/")
    public List<Sentenca> findAll(String termo) {
        return versiculoApp.searchSentencasByTermo(termo);
    }
    
    @GetMapping(value="/format")
    public Map<String, Object> format(String termo) {
    	List<Sentenca> result = versiculoApp.searchSentencasByTermo(termo);
		List<String> textos = result.stream().map(e -> e.getTextoMontado()).collect(Collectors.toList());
		
		Map<String, Object> map = Maps.newHashMap();
		
		map.put("termo", termo);
		map.put("total", textos.size());
		map.put("textos", textos);
		
		return map;
    }
    
	
}
