package br.com.exames.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="clinica")
@Data @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Clinica {
	
	@EmbeddedId
	private ClinicaKey key;
	
	private String endereco;

	private String nome;
	
	
}
