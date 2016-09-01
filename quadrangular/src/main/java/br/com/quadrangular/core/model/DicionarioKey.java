package br.com.quadrangular.core.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import br.com.quadrangular.core.enums.Idioma;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DicionarioKey implements Serializable {

	private Integer id;
	
	@Enumerated(EnumType.STRING)
	private Idioma idioma;
	
}
