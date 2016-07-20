package br.com.model.exception;

public class SystemException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public SystemException() {
		super();
	}
	
	public SystemException(String msg) {
		super(msg);
	}
	
	public SystemException(Throwable t) {
		super(t);
	}
	
	public SystemException(String msg,Throwable t) {
		super(msg,t);
	}
	
}
