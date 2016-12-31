package br.com.biblia.core.model.versiculo;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "expressao_dicionario")
@Data 
@NoArgsConstructor
@AllArgsConstructor @EqualsAndHashCode @Builder
public class ExpressaoDicionario implements Serializable {
	
	@EmbeddedId
	private ExpressaoDicionarioKey key;
	
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="expressao_id", referencedColumnName="expressao_id", insertable=false, updatable=false),
		@JoinColumn(name="versiculo_id", referencedColumnName="versiculo_id", insertable=false, updatable=false),
		@JoinColumn(name="capitulo_id", referencedColumnName="capitulo_id", insertable=false, updatable=false),
		@JoinColumn(name="livro_id", referencedColumnName="livro_id", insertable=false, updatable=false)
	})
	private Expressao expressao;
	
}
