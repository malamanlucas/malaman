package br.com.biblia.core.model.versiculo;

import javax.persistence.PrePersist;

import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import br.com.biblia.core.dao.ExpressaoDAO;

public class ExpressaoListener {
	
	ExpressaoDAO dao;
	
	@PrePersist
	public void test(Object o) {
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
		System.out.println(o);
	}

}
