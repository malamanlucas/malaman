package br.com.quadrangular.core.model.versiculo;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
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
@AllArgsConstructor
@NoArgsConstructor
public class Expressao {
	
	@EmbeddedId
	private VersiculoKey key;
	
	private Integer inicio;
	
	private Integer fim;
	
	private Integer codigo;
	
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="id", referencedColumnName="id", insertable=false, updatable=false),
		@JoinColumn(name="capitulo_id", referencedColumnName="capitulo_id", insertable=false, updatable=false),
		@JoinColumn(name="livro_id", referencedColumnName="livro_id", insertable=false, updatable=false)
	})
	private Versiculo versiculo;

}
