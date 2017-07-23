package br.com.biblia.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import br.com.biblia.enums.Idioma;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor @EqualsAndHashCode @Builder
@NoArgsConstructor
public class DicionarioKey implements Serializable {

	private Integer id;
	
	@Enumerated(EnumType.STRING)
	private Idioma idioma;
	
}
