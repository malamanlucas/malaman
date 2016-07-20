package br.com.model.exception;

public class CampoObrigatorioException extends SystemException {

	private static final long serialVersionUID = 1L;

	public CampoObrigatorioException(String msg) {
		super(msg);
	}
	
	public CampoObrigatorioException(Throwable t) {
		super(t);
	}
	
	public CampoObrigatorioException(String msg,Throwable t) {
		super(msg,t);
	}	
	
}
