package br.com.comum.validate.constraints;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import br.com.comum.config.ConfigProperties;
import br.com.comum.validate.Validador;
import br.com.comum.validate.annotations.CEP;

public class CEPValidator implements ConstraintValidator<CEP, String> {

	public void initialize(CEP arg0) {}

	@Override
	public boolean isValid(String cep, ConstraintValidatorContext arg1) {
		String city = ConfigProperties.getCity();
		String uf   = ConfigProperties.getUF();
		return Validador.isCEPOf(cep, city, uf);
	}

}
