package br.com.violinhalanches.model.entities.manager;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="item_produto")
public class ItemProduct {
	
	@EmbeddedId
	private ItemProductId id;
	
	private boolean blocked;

}
