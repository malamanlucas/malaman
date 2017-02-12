package br.com.biblia.core.model.versiculo;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.biblia.core.enums.Idioma;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor @EqualsAndHashCode @Builder
@Embeddable
@JsonIgnoreProperties({"expressaoKey"})
public class ExpressaoDicionarioKey implements Serializable {
	
	private Integer id;
	
	@Enumerated(EnumType.STRING)
	private Idioma idioma;
	
	@Embedded
	private ExpressaoKey expressaoKey;
	
}
