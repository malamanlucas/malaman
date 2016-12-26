package br.com.biblia.core.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "message")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString(of={"id","title","texto"})
public class Message {
	
	@Id
	private Integer id; 
	private String title;
	private String texto;
	
}
