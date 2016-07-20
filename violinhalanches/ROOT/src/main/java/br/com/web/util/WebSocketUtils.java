package br.com.web.util;

import java.util.HashMap;
import java.util.Map;

import org.springframework.messaging.simp.SimpMessagingTemplate;

import br.com.model.entities.manager.SystemStatus;

public class WebSocketUtils {

	public static void deliveryNewStatus(SystemStatus status, SimpMessagingTemplate template) {
		Map<String, Object> data = new HashMap<>();
		data.put("status", status);
		template.convertAndSend("/off/refresh/status", data);
	}

}
