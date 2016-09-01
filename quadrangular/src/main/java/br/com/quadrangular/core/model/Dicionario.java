package br.com.quadrangular.core.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="dicionario")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Dicionario {

	@EmbeddedId
	private DicionarioKey key = new DicionarioKey();
	
	private String definicao;
	private boolean existe;	
	
}
