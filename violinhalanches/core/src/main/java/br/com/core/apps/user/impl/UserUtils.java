package br.com.core.apps.user.impl;

import org.springframework.util.StringUtils;

import br.com.model.entities.user.User;

import com.google.common.base.Preconditions;

public class UserUtils {

	public static void checkMandatoryFields(User user) {
		checkMandatoryField( user.getName()           , "Nome obrigatório");
		checkMandatoryField( user.getPhone()          , "Telefone/Celular obrigatório");
		checkMandatoryField( user.getPassword()       , "Senha obrigatória");
		checkMandatoryField( user.getConfirmPassword(), "Obrigatório confirmar a senha");
		checkMandatoryField( user.getEmail()          , "Email Obrigatório");
		checkMandatoryField( user.getReliable()       , "Obrigatório especificar se está habilitado ou não");
		checkMandatoryField( user.getEnable()         , "Obrigatório especificar se é confiávle ou não");
		checkMandatoryField( user.getProfiles()       , "Obrigatório especificar qual(is) papél(eis) deste usúario");
	}
	
	private static void checkMandatoryField(String field, String msg) {
		Preconditions.checkArgument( !StringUtils.isEmpty(field), msg );
	}
	
	private static void checkMandatoryField(Object field, String msg) {
		Preconditions.checkNotNull( field, msg );
	}
	
}
