package br.com.web.model;

import org.hibernate.validator.constraints.NotEmpty;

public class LoginForm {

	@NotEmpty(message="Telefone Obrigatório")
	private String telefone;
	
	@NotEmpty(message="Senha obrigatória")
	private String senha;
	
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	@Override
	public String toString() {
		return "LoginForm [telefone=" + telefone + ", senha=" + senha + "]";
	}
	
	
}
