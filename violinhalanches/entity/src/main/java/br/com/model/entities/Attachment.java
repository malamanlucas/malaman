package br.com.model.entities;

import java.io.InputStream;

public class Attachment {

	public Attachment() {}
	
	public Attachment(String name, InputStream inputStream) {
		this.name        = name;
		this.inputStream = inputStream;
	}
	
	private String name;
	private InputStream inputStream;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public InputStream getInputStream() {
		return inputStream;
	}
	public void setInputStream(InputStream inputStream) {
		this.inputStream = inputStream;
	}
	
}
