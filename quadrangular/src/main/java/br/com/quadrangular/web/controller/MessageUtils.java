package br.com.quadrangular.web.controller;

import javax.faces.application.FacesMessage;
import javax.faces.application.FacesMessage.Severity;
import javax.faces.context.FacesContext;

public class MessageUtils {

	public static void infoMessage(String message) {
		addMessage("OK!", message, FacesMessage.SEVERITY_INFO);
	}

	public static void errorMessage(String message) {
		addMessage("Erro.", message, FacesMessage.SEVERITY_ERROR);
	}

	public static void warnMessage(String message) {
		addMessage("Aviso!", message, FacesMessage.SEVERITY_WARN);
	}

	private static void addMessage(String sumary, String detail,
			Severity severity) {
		FacesMessage message = new FacesMessage(severity, sumary, detail);
		FacesContext.getCurrentInstance().addMessage(null, message);
	}
}
