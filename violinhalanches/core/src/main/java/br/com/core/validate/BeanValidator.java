package br.com.core.validate;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Scope("singleton")
@Service("beanValidator")
public class BeanValidator {

	private Validator validator;
	
	public BeanValidator() {
		this.validator = Validation
								 .buildDefaultValidatorFactory()
								 .getValidator();
	}
	
	public void validate(Object o) {
		Set<ConstraintViolation<Object>> constraints = validator.validate(o);
		for (ConstraintViolation<Object> constraint : constraints) {
			throw new IllegalArgumentException(constraint.getMessage());
		}
		
	}
	
}
