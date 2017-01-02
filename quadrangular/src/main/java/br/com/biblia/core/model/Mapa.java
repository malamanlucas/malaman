package br.com.biblia.core.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Transient;

import br.com.biblia.core.enums.Testamento;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@NoArgsConstructor @AllArgsConstructor @Builder @EqualsAndHashCode
@Data
@Entity(name="mapa")
@ToString(of={"id","nome","testamento"}, includeFieldNames=false)
public class Mapa implements Serializable {

	@Id
	private Integer id;
	
	private String nome;
	
	@Transient
	@Enumerated(EnumType.STRING)
	private Testamento testamento = Testamento.AMBOS;
	
}
