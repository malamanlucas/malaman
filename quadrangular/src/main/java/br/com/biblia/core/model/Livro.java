package br.com.biblia.core.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import br.com.biblia.core.enums.Testamento;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "livro")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString(of={"id","nome","ordem","testamento"})
public class Livro {
	
	public Livro(Integer id) {
		this.id = id;
	}

	@Id
	private Integer id;
	private String nome;
	private Integer ordem;
	
	@Enumerated(EnumType.STRING)
	private Testamento testamento;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER, mappedBy="livro")
	private List<Capitulo> capitulos;
		
}
