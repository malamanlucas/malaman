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

import br.com.biblia.core.listener.ExpressaoMapaListener;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EntityListeners(ExpressaoMapaListener.class)
@Table(name = "expressao_mapa")
@Data 
@NoArgsConstructor
@AllArgsConstructor @EqualsAndHashCode @Builder
@JsonIgnoreProperties({"expressao"})
public class ExpressaoMapa implements Serializable {
	
	@EmbeddedId
	private ExpressaoMapaKey key;
	
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="expressao_id", referencedColumnName="expressao_id", insertable=false, updatable=false),
		@JoinColumn(name="versiculo_id", referencedColumnName="versiculo_id", insertable=false, updatable=false),
		@JoinColumn(name="capitulo_id", referencedColumnName="capitulo_id", insertable=false, updatable=false),
		@JoinColumn(name="livro_id", referencedColumnName="livro_id", insertable=false, updatable=false)
	})
	private Expressao expressao;
	
}
