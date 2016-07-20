package br.com.main;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.client.WebSocketConnectionManager;
import org.springframework.web.socket.client.jetty.JettyWebSocketClient;
import org.springframework.web.socket.sockjs.client.SockJsClient;
import org.springframework.web.socket.sockjs.client.Transport;
import org.springframework.web.socket.sockjs.client.WebSocketTransport;

import br.com.util.BundleUtils;

public class Main {
	
	public static void start() {
		try {
			AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(ClientConfig.class);
			WebSocketConnectionManager ws = ctx.getBean( WebSocketConnectionManager.class );
			ws.start();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private static MyFrame myFrame;
	
	public static void main(String[] args) {
		myFrame = new MyFrame();
	}
	
	@Configuration
	static class ClientConfig {

		@Bean
		public WebSocketConnectionManager wsConnectionManager() {
			String url = BundleUtils.getWS();
			System.out.println( url );
			WebSocketConnectionManager manager = new WebSocketConnectionManager( sockJsClient( webSocketClient() ), handler(), url );
			return manager;
		}
		
		@Bean
		public WebSocketHandler handler() {
			return new PrintHandlerWebSocket();
		}

		@Bean
		public JettyWebSocketClient webSocketClient() {
			JettyWebSocketClient client = new JettyWebSocketClient();;
			return client;
		}

		@Bean
		public SockJsClient sockJsClient(WebSocketClient webSocketClient) {
			List<Transport> transports = new ArrayList<Transport>();
			transports.add( new WebSocketTransport(webSocketClient) );
			SockJsClient sockJsClient = new SockJsClient(transports);
			return sockJsClient;
		}

		
	}
	
}
