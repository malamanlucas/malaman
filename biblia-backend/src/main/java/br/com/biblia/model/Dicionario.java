package br.com.biblia.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name="dicionario")
@Data
@AllArgsConstructor
@NoArgsConstructor @EqualsAndHashCode @Builder
public class Dicionario {

	@EmbeddedId
	private DicionarioKey key;
	
	private String definicao;
	
	private boolean existe;	
	
}
