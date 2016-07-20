package br.com.core.apps.parameter;

import java.math.BigDecimal;
import java.util.List;

import br.com.model.entities.manager.Parameter;


public interface ParameterApp {

	String findParameter(String key);
	
	BigDecimal findDeliveryPrice();
	
	void update(Parameter parameter);
	
	void update(List<Parameter> parameters);
	
	List<Parameter> search();

	Integer findInactivityTime();
	
	Integer findAnswerInactivityTime();
	
}
