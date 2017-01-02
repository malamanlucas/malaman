package br.com.biblia.core.model.versiculo;

import java.io.IOException;
import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/***
 * Classe para representar uma marcação em um versiculo em cima de uma palavra ou expressão 
 * que pode referenciar uma definição em um dicionário ou um imagem (ex: mapa)
 * 
 * @author lucas
 */
@Entity
@Table(name = "expressao")
@Data
@NoArgsConstructor 
@AllArgsConstructor @EqualsAndHashCode(callSuper=false) @Builder
public class Expressao implements Serializable {

	@EmbeddedId
	private ExpressaoKey key = new ExpressaoKey();
	
	private Integer inicio;
	
	private Integer fim;
	
	private String texto;
	
	private String descricao;
	
	@Transient
	private String textoFormatado;

	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="versiculo_id", referencedColumnName="id", insertable=false, updatable=false),
		@JoinColumn(name="capitulo_id", referencedColumnName="capitulo_id", insertable=false, updatable=false),
		@JoinColumn(name="livro_id", referencedColumnName="livro_id", insertable=false, updatable=false)
	})
	private Versiculo versiculo;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY, mappedBy="expressao")
	private List<ExpressaoDicionario> dicionarios;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY, mappedBy="expressao")
	private List<ExpressaoMapa> mapas;

	public Expressao setVersiculoKeyAsJsonReturningEntity(String json) {
		try {
			Object value = new ObjectMapper()
										.reader()
										.forType(VersiculoKey.class)
										.readValue( json );
			VersiculoKey versiculoKey = ((VersiculoKey) value);
			this.key = new ExpressaoKey(null, versiculoKey.getId(), versiculoKey.getCapituloId(), versiculoKey.getLivroId());
		} catch (IOException e) {
			throw new RuntimeException(e.getMessage(),e);
		}
		return this;
	}

}
