package br.com.exames.model;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

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
