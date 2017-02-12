package br.com.biblia.core.model.versiculo;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
public class ExpressaoMapaKey implements Serializable {
	
	private Integer id;
	
	@Embedded
	private ExpressaoKey expressaoKey;
	
}
