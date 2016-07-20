package br.com.model.entities.user;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.model.enums.AddressType;

public class UserWEB implements UserDetails {

	private static final long serialVersionUID = 1L;

	public UserWEB(User user) {
		entity          = user;
		deliveryAddress = user.getAddress();
		cart = new Cart();
		if (deliveryAddress != null) {
			cart.setAddressType( AddressType.ENDERECO_CADASTRADO );
		}
	}
	
	private List<Authority> authorities;
	private User            entity;
	private Cart            cart;
	private Address         deliveryAddress;

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public String getPassword() {
		return entity.getPassword();
	}

	public String getUsername() {
		return entity.getPhone();
	}

	public boolean isAccountNonExpired() {
		return true;
	}

	public boolean isAccountNonLocked() {
		return true;
	}

	public boolean isCredentialsNonExpired() {
		return true;
	}

	public boolean isEnabled() {
		return entity.getEnable();
	}
	
	public void setAuthorities(List<Authority> authorities) {
		this.authorities = authorities;
	}

	public User getEntity() {
		return entity;
	}

	public void setEntity(User entity) {
		this.entity = entity;
	}

	public Integer getId() {
		return entity.getId();
	}

	public void setEmail(String email) {
		entity.setEmail( email );
	}

	public Address getDeliveryAddress() {
		return deliveryAddress;
	}

	public void setDeliveryAddress(Address deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}
	
}
