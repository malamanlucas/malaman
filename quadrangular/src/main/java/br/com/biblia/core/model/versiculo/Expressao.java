package br.com.biblia.core.model.versiculo;

import java.io.IOException;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.biblia.core.enums.TipoExpressao;
import lombok.Data;
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
public class Expressao {
	
	public Expressao(ExpressaoKey key, Integer inicio, Integer fim, String codigo, String texto, String descricao,
			TipoExpressao tipo, Versiculo versiculo) {
		super();
		this.key = key;
		this.inicio = inicio;
		this.fim = fim;
		this.codigo = codigo;
		this.texto = texto;
		this.descricao = descricao;
		this.tipo = tipo;
		this.versiculo = versiculo;
	}

	@EmbeddedId
	private ExpressaoKey key = new ExpressaoKey();
	
	private Integer inicio;
	
	private Integer fim;
	
	private String codigo;
	
	private String texto;
	
	private String descricao;
	
	@Transient
	private String textoFormatado;

	@Enumerated(EnumType.STRING)
	private TipoExpressao tipo;
	
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="versiculo_id", referencedColumnName="id", insertable=false, updatable=false),
		@JoinColumn(name="capitulo_id", referencedColumnName="capitulo_id", insertable=false, updatable=false),
		@JoinColumn(name="livro_id", referencedColumnName="livro_id", insertable=false, updatable=false)
	})
	private Versiculo versiculo;

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
