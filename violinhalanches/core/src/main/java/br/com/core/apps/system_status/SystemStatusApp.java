package br.com.core.apps.system_status;

import br.com.model.entities.manager.SystemStatus;

public interface SystemStatusApp {

	SystemStatus insert(SystemStatus systemStatus);
	
	void update(SystemStatus systemStatus);
	
	SystemStatus find();
}
