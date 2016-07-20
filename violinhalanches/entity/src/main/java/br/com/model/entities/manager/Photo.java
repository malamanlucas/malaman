package br.com.model.entities.manager;


public class Photo {
	
	public Photo(String name, long size, byte[] bytes) {
		this.name = name;
		this.size = size;
		this.bytes = bytes;
	}

	public Photo(byte[] bytes) {
		this.bytes = bytes;
	}
	
	public Photo(){}
	
	private String name;
	private long size;
	private byte[] bytes;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getSize() {
		return size;
	}
	public void setSize(long size) {
		this.size = size;
	}
	public byte[] getBytes() {
		return bytes;
	}
	public void setBytes(byte[] bytes) {
		this.bytes = bytes;
	}

	@Override
	public String toString() {
		return "Photo [name=" + name + ", size=" + size + "]";
	}
	
}
