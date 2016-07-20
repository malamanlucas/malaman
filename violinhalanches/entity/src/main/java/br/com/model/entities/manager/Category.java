package br.com.model.entities.manager;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.model.enums.CategoryType;
import br.com.model.interfaces.PhotoWrapper;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Category implements PhotoWrapper {

	public Category() {}
	public Category(Integer id) {
		this.id = id;
	}
	
	private Integer id;
	
	@NotNull(message="Nome Obrigatório")
	@NotEmpty(message="Nome Obrigatório")
	private String name;
	
	@NotNull(message="Descrição Obrigatório")
	@NotEmpty(message="Descrição Obrigatório")
	private String description;
	
	@NotNull(message="Tipo da categoria Obrigatório")
	private CategoryType type;
	
	@NotNull(message="Foto Obrigatório")
	private Photo photo;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public CategoryType getType() {
		return type;
	}
	public Integer getTypeAsCode() {
		return type == null ? null : type.getCode();
	}
	public void setType(CategoryType type) {
		this.type = type;
	}
	public void setTypeAsCode(Integer code) {
		this.type = CategoryType.fromCode(code);
	}
	
	public Photo getPhoto() {
		return photo;
	}
	
	@NotNull(message="Foto Obrigatório")
	@JsonIgnore public byte[] getPhotoAsBytes() {
		return photo == null ? null : photo.getBytes();
	}
	
	public void setPhoto(Photo foto) {
		this.photo = foto;
	}
	
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", description="
				+ description + ", type=" + type + "]";
	}
	
}
