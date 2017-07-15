package br.com.biblia.core.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestEntityManager;

import br.com.biblia.core.enums.Testamento;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
@AutoConfigureTestEntityManager
@Entity
@Table(name = "sentenca")
public class Sentenca implements Serializable {

	@Id
	private Integer id;
	
	private String sigla;
	
	@Column(name="ordem")
	private Integer ordemLivro;
	
	@Enumerated(EnumType.STRING)
	private Testamento testamento;
	
	@Column(name="capitulo_id")
	private Integer capitulo;
	
	@Column(name="numero")
	private Integer versiculo;
	
	private String texto;
	
}
