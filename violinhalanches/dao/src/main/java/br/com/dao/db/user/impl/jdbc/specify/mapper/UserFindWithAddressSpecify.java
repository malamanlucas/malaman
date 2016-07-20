package br.com.dao.db.user.impl.jdbc.specify.mapper;

import org.springframework.jdbc.core.RowMapper;

import br.com.dao.db.general.jdbc.interfaces.QueryMapperSpecify;
import br.com.dao.db.user.impl.jdbc.rowmappers.UserWithAddressMapped;

public class UserFindWithAddressSpecify implements QueryMapperSpecify {

	private static final String QUERY = 	
			"SELECT u.id, u.telefone, u.nome, u.senha, u.email, u.confiavel, u.habilitado, u.qt_pedido, u.qt_pago, u.qt_nao_pago, "+
		    "e.id as end_id, e.logradouro, e.nro, e.bairro as bairro_id, e.complemento, e.bairro, e.cep "+
		    "FROM usuario as u "+
		    "LEFT JOIN endereco as e ON (u.id = e.usuario) "+
			"WHERE u.telefone = ?";

	private Object[] params;
	
	public UserFindWithAddressSpecify(String phone) {
		params = new Object[] { phone };
	}
	
	public String getSql() {
		return QUERY;
	}

	@Override
	public Object[] getParameters() {
		return params;
	}

	@Override
	public RowMapper<?> getMapper() {
		return new UserWithAddressMapped();
	}

}
