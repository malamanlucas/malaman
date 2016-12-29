package br.com.biblia.core.model.versiculo;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor @EqualsAndHashCode @Builder
@Embeddable
public class ExpressaoMapaKey implements Serializable {
	
	private Integer id;
	
	@Embedded
	private ExpressaoKey expressaoKey;
	
}
