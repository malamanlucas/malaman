package br.com.core.apps.parameter.impl;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import br.com.core.apps.parameter.ParameterApp;
import br.com.core.validate.BeanValidator;
import br.com.dao.db.parameter.ParameterDAO;
import br.com.dao.db.parameter.impl.jdbc.specify.mapper.ParameterFindValueByKeySpecify;
import br.com.dao.db.parameter.impl.jdbc.specify.mapper.ParameterSearchSpecify;
import br.com.model.entities.manager.Parameter;
import br.com.model.enums.ParameterEnum;

@Scope("prototype")
@Service("parameterFacade")
public class ParameterFacade implements ParameterApp {

	@Resource(name="parameterJDBC")
	private ParameterDAO dao;
	
	@Autowired
	private BeanValidator validator;
	
	@Override
	public String findParameter(String key) {
		return (String) dao.find( new ParameterFindValueByKeySpecify(key) );
	}

	@Override
	public BigDecimal findDeliveryPrice() {
		String value = findParameter( ParameterEnum.DELIVERY_PRICE.getKey() );
		return new BigDecimal(value);
	}

	@Override
	public void update(@Valid Parameter parameter) {
		dao.update( parameter );
	}

	@Override
	public void update(List<Parameter> parameters) {
		for (Parameter p : parameters) {
			validator.validate( p );
		}
		dao.update(parameters);
	}

	@Override
	public List<Parameter> search() {
		return dao.search( new ParameterSearchSpecify() );
	}

	@Override
	public Integer findInactivityTime() {
		String value = findParameter( ParameterEnum.TIME_INACTIVITY.getKey() );
		return Integer.valueOf( value );
	}

	@Override
	public Integer findAnswerInactivityTime() {
		String value = findParameter( ParameterEnum.TIME_ANSWER_INACTIVITY.getKey() );
		return Integer.valueOf( value );
	}
	

}
