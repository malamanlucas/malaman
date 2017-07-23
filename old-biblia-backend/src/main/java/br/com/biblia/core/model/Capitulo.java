package br.com.biblia.core.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "capitulo")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(of="key")
public class Capitulo {

	public Capitulo(CapituloKey key) {
		this.key = key;
	}
	
	@EmbeddedId
	private CapituloKey key = new CapituloKey();
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="livro_id", referencedColumnName="id", insertable=false, updatable=false)
	private Livro livro;
	
	private String titulo;
	
}
