package br.com.exames.apps.exame;

import java.util.List;

import br.com.exames.model.Exame;

public interface ExameApp {

	Exame save(Exame entity);
	
	List<Exame> findAll();
	
	void delete(Integer id);
	
	Exame getExame(Integer id);
	
	void reset();
	
	void deleteAll();	
	
}
