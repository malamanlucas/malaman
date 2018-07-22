package br.com.exames.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClinicaKey implements Serializable {
	
	private Integer id;
	@Column(name="exame_id")
	private Integer exameId;
	
}
