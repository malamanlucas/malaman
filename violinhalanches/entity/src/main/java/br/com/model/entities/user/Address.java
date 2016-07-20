package br.com.model.entities.user;

import java.io.Serializable;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Address implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer id;

	private Integer userId;

	@NotEmpty(message = "Logradouro Obrigatório")
	@Length(max = 100, message = "Logradouro só é permitido no máximo 100 caracteres")
	private String street;

	@NotEmpty(message = "Número Obrigatório")
	@Length(max = 8, message = "Número só é permitido no máximo 8 caracteres")
	private String number;

	@NotEmpty(message = "Bairro Obrigatório")
	@Length(max = 40, message = "Bairro só é permitido no máximo 40 caracteres")
	private String bairro;

	@NotEmpty(message = "CEP Obrigatório")
	@Length(max = 40, message = "CEP só é permitido no máximo 8 caracteres")
	private String cep;

	@Length(max = 30, message = "Complemento só é permitido no máximo 30 caracteres")
	private String complement;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	@JsonIgnore
	public String getFullAddress() {
		return street + ", " + number + ", " + bairro + ", " + complement;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	
	public String getBairro() {
		return bairro;
	}
	
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	
	public String getCep() {
		return this.cep;
	}
	
	public void setCep(String cep) {
		this.cep = cep;
	}

}
