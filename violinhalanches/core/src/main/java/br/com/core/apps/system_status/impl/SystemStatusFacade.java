package br.com.core.apps.system_status.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.core.apps.system_status.SystemStatusApp;
import br.com.dao.db.system_status.SystemStatusDAO;
import br.com.model.entities.manager.SystemStatus;

@Scope("prototype")
@Service("systemStatusFacade")
@Transactional(readOnly=false)
public class SystemStatusFacade implements SystemStatusApp {

	@Resource(name="systemStatusJDBC")
	private SystemStatusDAO dao;
	
	public SystemStatus insert(SystemStatus systemStatus) {
		return dao.insert( systemStatus );
	}

	public void update(SystemStatus systemStatus) {
		dao.update( systemStatus );
	}

	@Transactional(readOnly=true)
	public SystemStatus find() {
		return dao.find();
	}

}
