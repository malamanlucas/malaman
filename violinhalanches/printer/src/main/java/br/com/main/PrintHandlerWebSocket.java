package br.com.main;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import br.com.printer.PrinterUtils;

public class PrintHandlerWebSocket extends TextWebSocketHandler {

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		PrinterUtils.imprimir( message.getPayload() + "\n" );
	}
	
}
