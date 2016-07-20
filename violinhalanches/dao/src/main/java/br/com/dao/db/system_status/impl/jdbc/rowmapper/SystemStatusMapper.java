package br.com.dao.db.system_status.impl.jdbc.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import br.com.model.entities.manager.SystemStatus;

public class SystemStatusMapper implements RowMapper<SystemStatus> {

	@Override
	public SystemStatus mapRow(ResultSet rs, int rowNum) throws SQLException {
		SystemStatus systemStatus = new SystemStatus();
		systemStatus.setSaleOpened   ( rs.getBoolean("venda_aberta") );
		systemStatus.setTrailerOpened( rs.getBoolean("loja_aberta") );
		systemStatus.setActiveOperator( rs.getBoolean("operador_ativo") );
		return systemStatus;
	}

}
