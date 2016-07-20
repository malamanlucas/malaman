package br.com.web.controladores.gestor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.comum.config.ConfigProperties;
import br.com.comum.log.Loggable;
import br.com.core.apps.user.UserApp;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.Authority;
import br.com.model.entities.user.User;
import br.com.model.enums.Profile;
import br.com.web.annotations.FormError;
import br.com.web.annotations.Message;

@Scope("singleton")
@Controller(value = "managerUserController")
@RequestMapping(value="/manager_user")
public class ManagerUserController {

	@RequestMapping(value="/", method=RequestMethod.GET)
	public String init(Model model) {
		model.addAttribute( "total", getUserApp().countUser() );
		return "manager_user/inicio";
	}

	@RequestMapping(value="/gerenciar/paginate", method=RequestMethod.GET)
	public String gerenciarPaginate(Model model, @RequestParam("start") int start, @RequestParam("qtd") int qtd, @RequestParam("page") String page) {
		List<User> users = getUserApp().searchPagination(start, qtd);
		model.addAttribute( "users", users );
		return page;
	}
	
	@Loggable
	@RequestMapping(value = "/deletar", method = RequestMethod.GET)
	public @ResponseBody int deletar(@RequestParam("id") Integer id) {
		UserApp app = getUserApp(); 
		app.delete(id);
		return app.countUser();
	}
	
	@RequestMapping(value = "/ajax/endereco", method = {RequestMethod.POST, RequestMethod.GET})
	public String ajaxEndereco(Model model, @RequestParam("id") Integer id) {
		Address address = getAddressApp().findByUserId(id);
		String result = "Nâo há endereço cadastrado";
		if (address != null) {
			result = address.getFullAddress();
		}
		model.addAttribute( "result", result );
		return "manager_user/ajax/endereco";
	}
	
	@RequestMapping(value = "/ajax/papeis", method = {RequestMethod.POST, RequestMethod.GET})
	public String ajaxRoles(Model model, @RequestParam("id") Integer id) {
		model.addAttribute( "roles", getUserApp().searchRolesById(id) );
		return "manager_user/ajax/papeis";
	}
	
	@RequestMapping(value = "/ajax/pedido", method = {RequestMethod.POST, RequestMethod.GET})
	public String ajaxPedido(Model model, @RequestParam("id") Integer id) {
		model.addAttribute( "user", getUserApp().find(id) );
		return "manager_user/ajax/pedido";
	}
	
	@RequestMapping(value="/register", method=RequestMethod.GET)
	@FormError public String iniciarForm(Model model) {
		User user = new User();
		user.addProfiles(Profile.USER);
		user.setReliable(false);
		user.setEnable(false);
		return carregarForm(model, user);
	}
	
	@Message("Usuário pronto para edição")
	@RequestMapping(value = "/edit", method = RequestMethod.POST)
	public String iniciarEdicao(Model model, @RequestParam("id") Integer id) {
		
		UserApp app = getUserApp();
		User user = app.find( id );
		List<Authority> authorities = app.searchRolesById( id );
		
		List<Profile> profiles = new ArrayList<Profile>();
		for (Authority authority : authorities) {
			profiles.add( Profile.fromCode( authority.getAuthority() ) );
		}
		user.setProfiles( profiles.toArray( new Profile[profiles.size()] ) );
		return carregarForm( model, user );
		
	}
	
	@Loggable
	@Message("Cadastro realizado com sucesso!")
	@RequestMapping(value="/save", method={RequestMethod.GET, RequestMethod.POST})
	@FormError public String save(Model model, User user) {
		
		user.setConfirmPassword( user.getPassword() );
		if (user.getId() == null) {
			getUserApp().register(user);
		} else {
			user.encriptPassword();
			if (user.getProfiles() == null) {
				user.setProfiles( new Profile[]{} );
			}
			getUserApp().updateAll(user);
		}
		return init(model);
	}
	
	public String carregarForm(Model model, User user) {
		user.setPassword(null);
		model.addAttribute( "user", user );
		model.addAttribute( "profiles", Profile.values() );
		return "manager_user/register";
	}
	
	@RequestMapping(value="/address/edit", method=RequestMethod.POST)
	public String editAddress(Model model, @RequestParam Integer userId) {
		Address address = getAddressApp().findByUserId( userId );
		if (address == null) {
			address = new Address();
		}
		address.setUserId( userId );
		return initAddressForm(model, address);
	}
	
	@Message("Endereço salvo com sucesso")
	@RequestMapping(value="/address/save", method=RequestMethod.POST)
	@FormError(methodName="initAddressForm")
	public String saveAddress(Model model, Address address) {
		
		getAddressApp().save( address );
		return init(model);
		
	}
	
	public String initAddressForm(Model model, Address address) {
		model.addAttribute( "address", address );
		model.addAttribute( "uf"     , ConfigProperties.getUF() );
		model.addAttribute( "city"   , ConfigProperties.getCity() );
		return "manager_user/address/form";
	}
	
	@Message("Usuário desbloqueado com sucesso")
	@RequestMapping(value="/unblock", method=RequestMethod.GET)
	public String unblock(Model model, @RequestParam String phone) {
		getManagerApp().unblock( phone );
		return getHomeController().iniciar(model);
	}
	
	@RequestMapping(value="/status/change", method={RequestMethod.POST,RequestMethod.GET})
	public @ResponseBody Map<String,String> changeStatus(@RequestParam String type, @RequestParam boolean value, @RequestParam Integer id) {
		
		Map<String, String> data = new HashMap<String, String>();
		UserApp userApp = getUserApp();
		
		User user = userApp.find(id);
		if ( type.equals("confiavel") ) {
			user.setReliable( !value );
			data.put("icon"    , ".icon-confiavel");
			data.put("oldValue", user.getReliable() ? "icon_manager-user_new"       : "icon_manager-user_trusted" );
			data.put("newValue", user.getReliable() ? "icon_manager-user_trusted"   : "icon_manager-user_new" );
		} else {
			user.setEnable  ( !value );
			data.put("icon"    , ".icon-habilitado");
			data.put("oldValue", user.getEnable() ? "icon_manager-user_blocked" : "icon_manager-user_liberated" );
			data.put("newValue", user.getEnable() ? "icon_manager-user_liberated" : "icon_manager-user_blocked" );
		}
		getUserApp().updateAll(user);
		
		return data;
	}
	
	
}
