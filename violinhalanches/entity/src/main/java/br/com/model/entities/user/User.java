package br.com.model.entities.user;

import java.io.Serializable;
import java.util.Arrays;

import org.apache.commons.lang.StringUtils;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;

import br.com.comum.cripto.Criptografador;
import br.com.comum.validate.annotations.SelfValidate;
import br.com.comum.validate.interfaces.Validatable;
import br.com.model.enums.Profile;
import br.com.model.enums.UserType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@SelfValidate(message="Confirme a senha corretamente")
public class User implements Validatable, Serializable {

	public User() {
		quantityPedido    = 0;
		quantityPayed     = 0;
		quantityCancelled = 0;
	}
	
	private static final long serialVersionUID = 1L;

	private Integer id;

	private String name;

	@Length(min=8, max=9, message= "O telefone deve ter 8 ou 9 digitos")
	private String phone;

	@Length(min = 6, message="A senha deve ter no mínimo 6 caracteres")
	private String password;

	private String confirmPassword;

	@Email(message = "Email inválido")
	private String email;

	private Boolean enable;

	private Boolean reliable;
	
	private Integer quantityPedido;
	
	private Integer quantityPayed;
	
	private Integer quantityCancelled;

	@JsonIgnore
	private Address address;

	private Profile[] profiles;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getEnable() {
		return enable;
	}

	public void setEnable(Boolean enable) {
		this.enable = enable;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Boolean getReliable() {
		return reliable;
	}
	
	public void setReliable(Boolean reliable) {
		this.reliable = reliable;
	}
	
	@JsonIgnore public String getFirstName() {
		return StringUtils.split(name, " ")[0];
	}

	public Profile[] getProfiles() {
		return profiles;
	}
	
	public Integer getQuantityPedido() {
		return quantityPedido;
	}

	public void setQuantityPedido(Integer quantityPedido) {
		this.quantityPedido = quantityPedido;
	}

	public void setProfiles(Profile[] profiles) {
		this.profiles = profiles;
	}

	public void addProfiles(Profile... profiles) {
		this.profiles = profiles;
	}
	
	public boolean check() {
		if (password != null && !password.equals(confirmPassword))
			return false;
		return true;
	}

	public void encriptPassword() {
		password = Criptografador.encodeMD5(password);
	}
	
	public boolean hasProfile(String role) {
		for (Profile profile : profiles) {
			if (role == profile.getDescription()) {
				return true;
			}
		}
		return false;
	}

	@JsonProperty("userType") public UserType getUserType() {
		return UserType.fromCode(reliable);
	}

	public void setUserType(UserType userType) {}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((phone == null) ? 0 : phone.hashCode());
		return result;
	}

	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (phone == null) {
			if (other.phone != null)
				return false;
		} else if (!phone.equals(other.phone))
			return false;
		return true;
	}

	public Integer getQuantityPayed() {
		return quantityPayed;
	}

	public void setQuantityPayed(Integer quantityPayed) {
		this.quantityPayed = quantityPayed;
	}

	public Integer getQuantityCancelled() {
		return quantityCancelled;
	}

	public void setQuantityCancelled(Integer quantityCancelled) {
		this.quantityCancelled = quantityCancelled;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", phone=" + phone
				+ ", password=" + password + ", confirmPassword="
				+ confirmPassword + ", email=" + email + ", enable=" + enable
				+ ", reliable=" + reliable + ", quantityPedido="
				+ quantityPedido + ", quantityPayed=" + quantityPayed
				+ ", quantityCancelled=" + quantityCancelled + ", address="
				+ address + ", profiles=" + Arrays.toString(profiles) + "]";
	}

}
