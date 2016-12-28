package br.com.biblia.core.model.versiculo;

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
@ToString(of={"id","versiculoId", "livroId", "capituloId"}, includeFieldNames=false)
public class ExpressaoKey implements Serializable {

    @Column(name="expressao_id")
	private Integer expressaoId;
	
	@Column(name="versiculo_id")
	private Integer versiculoId;
	
	@Column(name="capitulo_id")
	private Integer capituloId;
	
	@Column(name="livro_id")
	private Integer livroId;
	
}
