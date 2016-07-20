package br.com.model.entities.manager;

import javax.validation.constraints.NotNull;

import br.com.model.interfaces.PhotoWrapper;

public class Carousel implements PhotoWrapper {

	public Carousel() {}
	
	public Carousel(Integer id) {
		this.id = id;
	}
	
	private Integer id;
	private Photo photo;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Photo getPhoto() {
		return photo;
	}

	public void setPhoto(Photo photo) {
		this.photo = photo;
	}
	
	@NotNull(message="Foto Obrigatório")
	public byte[] getPhotoAsBytes() {
		return photo == null ? null : photo.getBytes();
	}

	@Override
	public String toString() {
		return "Carousel [id=" + id + "]";
	}
	
}
