package br.com.exames.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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
	
	@DeleteMapping("/{exameId}")
	public void delete(@PathVariable Integer exameId) {
		exameApp.delete(exameId);
	}
	
	@GetMapping("/{exameId}")
	public @ResponseBody Exame get(@PathVariable Integer exameId) {
		return exameApp.getExame(exameId);
	}
	
	@DeleteMapping("/deleteAll")
	void deleteAll() {
		exameApp.deleteAll();
	}

	@PutMapping("/reset")
	void resetBD() {
		exameApp.reset();
	}
    
}
