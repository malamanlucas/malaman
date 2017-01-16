package br.com.biblia.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.Lists;

import br.com.biblia.core.dao.DicionarioDAO;
import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.Dicionario;

@RestController
@RequestMapping("/api/dicionarios")
public class DicionarioRestController {
    
    @Autowired
    private DicionarioDAO dao;
    
    @GetMapping("/")
    public List<Dicionario> findAll(@RequestParam List<Integer> dics, @RequestParam Idioma idioma) {
    	System.out.println(dics);
    	System.out.println(idioma);
    	return Lists.newArrayList();
//    	List<DicionarioKey> keys = Lists.newArrayList();
//    	dicionarioCode.forEach( id -> keys.add( new DicionarioKey(id, idioma) ) );	
//        return dao.findByKeyIn(keys);
    }
    
}
