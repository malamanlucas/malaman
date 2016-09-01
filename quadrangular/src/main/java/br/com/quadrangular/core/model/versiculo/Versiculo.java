package br.com.quadrangular.core.model.versiculo;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import br.com.quadrangular.core.enums.Idioma;
import br.com.quadrangular.core.model.Capitulo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "versiculo")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString(of={"numero", "idioma", "texto",}, includeFieldNames=false)
public class Versiculo {
	
	@EmbeddedId
	private VersiculoKey key = new VersiculoKey();
	
	private String texto;
	private String formatado;
	private Integer numero;
	
	@Enumerated(EnumType.STRING)
	private Idioma idioma = Idioma.HEBRAICO;
	
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="capitulo_id", referencedColumnName="id", insertable=false, updatable=false),
		@JoinColumn(name="livro_id", referencedColumnName="livro_id", insertable=false, updatable=false),
	})
	private Capitulo capitulo;
	
	public String textoSemFormatacao() {
		return texto == null ? "" : texto.replaceAll("\\[|\\]|=|\\d", ""); 
	}
	
}