package br.com.comum.validate.constraints;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import br.com.comum.validate.annotations.SelfValidate;
import br.com.comum.validate.interfaces.Validatable;

public class SelfValidatingValidator implements ConstraintValidator<SelfValidate, Validatable> {

	public void initialize(SelfValidate constraintAnnotation) {}

	public boolean isValid(Validatable value, ConstraintValidatorContext context) {
		return value.check();
	}

}
