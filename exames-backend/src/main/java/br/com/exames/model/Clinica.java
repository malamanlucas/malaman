package br.com.exames.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="clinica")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Clinica {
	
	@EmbeddedId
	private ClinicaKey key;

	private String nome;
	
	
}
