package br.com.exames.apps.clinica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.exames.dao.ClinicaDAO;
import br.com.exames.model.ClinicaKey;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class ClinicaFacade implements ClinicaApp {

	@Autowired
	ClinicaDAO dao;
	
	@Override
	public void delete(ClinicaKey key) {
		dao.delete(key);
	}

	
}
