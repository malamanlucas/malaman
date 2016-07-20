package br.com.model.exception;

public class ValorExistenteException extends SystemException {

	private static final long serialVersionUID = 1L;

	public ValorExistenteException(String msg) {
		super(msg);
	}
	
	public ValorExistenteException(Throwable t) {
		super(t);
	}
	
	public ValorExistenteException(String msg,Throwable t) {
		super(msg,t);
	}	
	
}
