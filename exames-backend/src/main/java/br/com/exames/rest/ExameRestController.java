package br.com.exames.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.exames.apps.exame.ExameApp;
import br.com.exames.model.Exame;

@RestController
@RequestMapping("/api/exames")
public class ExameRestController {
    
	@Autowired
	ExameApp exameApp;
	
	@PostMapping("/salvar")
	public void salvar(@RequestBody Exame exame) {
		exameApp.save(exame);
	}
	
	@GetMapping("/")
	public List<Exame> list() {
		return exameApp.findAll();
	}
    
}
