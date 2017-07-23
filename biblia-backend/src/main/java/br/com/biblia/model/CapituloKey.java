package br.com.biblia.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CapituloKey implements Serializable {

	private Integer id;
	
	@Column(name="livro_id")
	private Integer livroId;
	
}
