package br.com.comum.validate.annotations;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import br.com.comum.validate.constraints.CEPValidator;

@Target({ElementType.TYPE, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CEPValidator.class)
@Documented
public @interface CEP {

	String message() default "CEP Inválido";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
	
}
