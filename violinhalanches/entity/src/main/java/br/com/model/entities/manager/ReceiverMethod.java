package br.com.model.entities.manager;

import java.io.Serializable;

import br.com.model.enums.MeioRecebimento;

public class ReceiverMethod implements Serializable {

	private static final long serialVersionUID = 1L;

	public ReceiverMethod() {}
	
	public ReceiverMethod( MeioRecebimento meio	) {
		id          = (int) meio.getCode();
		description = meio.getDescricao();
	}
	
	private Integer id;
	private boolean enabled;
	private String description;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public MeioRecebimento getEnum() {
		return MeioRecebimento.fromCode( id.intValue() );
	}
	
}
