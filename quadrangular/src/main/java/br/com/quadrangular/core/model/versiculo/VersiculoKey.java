package br.com.quadrangular.core.model.versiculo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString(of={"livroId", "id"}, includeFieldNames=false)
public class VersiculoKey implements Serializable {
	
	private Integer id;
	
	@Column(name="capitulo_id")
	private Integer capituloId;
	
	@Column(name="livro_id")
	private Integer livroId;
	
}
