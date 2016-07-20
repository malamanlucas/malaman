package br.com.violinhalanches.model.entities.manager;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ItemProductId implements Serializable {

	@ManyToOne
	@JoinColumn(name="item")
	private Item item;
	
	@ManyToOne
	@JoinColumn(name="produto")
	private Product product;
	
}
