package br.com.comum;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TesteLogger {

	private static Logger logger = LoggerFactory.getLogger("root");
	
	public static void main(String[] args) throws Exception {
		logger.error("EWAEWA");
	}
	
}
