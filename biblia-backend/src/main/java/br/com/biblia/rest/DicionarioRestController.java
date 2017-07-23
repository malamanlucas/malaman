package br.com.biblia.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Lists;

import br.com.biblia.dao.DicionarioDAO;
import br.com.biblia.enums.Idioma;
import br.com.biblia.model.Dicionario;
import br.com.biblia.model.DicionarioKey;

@RestController
@RequestMapping("/api/dicionarios")
public class DicionarioRestController {
    
    @Autowired
    private DicionarioDAO dao;
    
    @PostMapping("/")
    public List<Dicionario> findAll(@RequestBody List<Integer> dics, @RequestParam Idioma idioma) {
    	List<DicionarioKey> keys = Lists.newArrayList();
    	dics.forEach( id -> keys.add( new DicionarioKey(id, idioma) ) );	
        return dao.findByKeyIn(keys);
    }
    
}
