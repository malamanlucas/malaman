package br.com.exames.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name="exame")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Exame {

	@Id
	private Integer id;
	
	private String nome;
	
	@OneToMany(cascade=CascadeType.ALL, orphanRemoval=true, fetch=FetchType.EAGER)
	@JoinColumn(name="exame_id", referencedColumnName="id", insertable=false, updatable=false)
	private List<Clinica> clinicas;
}
