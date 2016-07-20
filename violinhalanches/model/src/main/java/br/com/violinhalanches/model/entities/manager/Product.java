package br.com.violinhalanches.model.entities.manager;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="produto")
public class Product {

	@Id
	private Integer id;
	
}
