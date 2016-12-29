package br.com.biblia.core.model.versiculo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.biblia.core.enums.Idioma;
import br.com.biblia.core.model.DicionarioKey;
import br.com.biblia.core.model.DicionarioKey.DicionarioKeyBuilder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor @EqualsAndHashCode @Builder
@ToString(of={"id","livroId", "capituloId"}, includeFieldNames=false)
public class VersiculoKey implements Serializable {
	
	private Integer id;
	
	@Column(name="capitulo_id")
	private Integer capituloId;
	
	@Column(name="livro_id")
	private Integer livroId;
	
	public String toJson() {
		try {
			return new ObjectMapper().writer().writeValueAsString(this);
		} catch (JsonProcessingException e) {
			throw new RuntimeException(e.getMessage(),e);
		}
	}
	
	
}
