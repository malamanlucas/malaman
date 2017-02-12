package br.com.biblia.core.model.versiculo;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.biblia.core.listener.ExpressaoDicionarioListener;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EntityListeners(ExpressaoDicionarioListener.class)
@Table(name = "expressao_dicionario")
@Data 
@NoArgsConstructor
@AllArgsConstructor @EqualsAndHashCode @Builder
@JsonIgnoreProperties({"expressao"})
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
