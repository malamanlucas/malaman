package br.com.model.interfaces;

import br.com.model.entities.manager.Photo;

public interface PhotoWrapper {

	Integer getId();

	Photo getPhoto();

	void setPhoto(Photo photo);

}
