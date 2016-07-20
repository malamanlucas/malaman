package br.com.comum.log;

public class LogMessage {

	public LogMessage() {
		buffer = new StringBuffer();
	}
	
	private StringBuffer buffer;

	public void log(String msg) {
		buffer.append( msg );
	}
	
	@Override
	public String toString() {
		return buffer.toString();
	}
	
	
}
