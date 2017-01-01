package br.com.biblia.core.model.versiculo;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@EntityListeners(ExpressaoListener.class)
public abstract class ExpressaoAudit {

}
