package br.com.exames.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.exames.apps.clinica.ClinicaApp;
import br.com.exames.model.ClinicaKey;

@RestController
@RequestMapping("/api/clinicas")
public class ClinicaRestController {
    
	@Autowired
	ClinicaApp app;
	
	@DeleteMapping("/")
	public void delete(@RequestBody ClinicaKey key) {
		app.delete(key);
	}
    
}
