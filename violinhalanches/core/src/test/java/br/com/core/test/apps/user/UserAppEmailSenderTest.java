package br.com.core.test.apps.user;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.xml.bind.JAXBException;

import org.apache.velocity.app.VelocityEngine;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;

import br.com.comum.config.ConfigProperties;
import br.com.comum.file.ResourceLoader;
import br.com.core.apps.user.UserApp;
import br.com.core.email.VelocityEmailSender;
import br.com.model.entities.Attachment;
import br.com.model.entities.user.User;
import br.com.providers.EntityProviderFactory;
import br.com.providers.user.UserProvider;

@Ignore
public class UserAppEmailSenderTest {

	@Resource(name="userFacade")
	private UserApp app;
	
	private UserProvider userProvider;
	
	@Autowired
	VelocityEngine velocity;
	
	public UserAppEmailSenderTest() {
		userProvider = EntityProviderFactory.createUserProvider();
	}
	
	@Test
	public void requestRegister() throws JAXBException {
		
		User user = userProvider.provideEntity();
		app.requestRegister(user);
		
	}
	
	@Test
	public void requestChangeEmail() throws JAXBException {
		
		User user = userProvider.provideEntity();
		String email = user.getEmail();
		String name  = user.getName();
		try {
			app.requestChangeEmail(name, email);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	@Autowired
	VelocityEmailSender sender;
	
	@Test
	public void sendEmailWithAttchment() {
		
		User user = userProvider.provideEntity();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("user", user );
		map.put("url", ConfigProperties.getURL("/user/change/email"));
		
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo     ( user.getEmail() );
		msg.setFrom   ( ConfigProperties.getFromEmail() );
		msg.setSubject( "AAAAAAAAAA" );
		
		String template = "/velocity/template/change_email_confirm.vm";
		Attachment attch = provideAttchment();
		try {
			sender.sendWithAttchments(msg, map, template, attch);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	private Attachment provideAttchment() {
		Attachment attch = new Attachment();
		
		InputStream inputStream = ResourceLoader.loadInputStream( "emailBody.vm" );
		
		attch.setName( "emailBody.vm" );
		attch.setInputStream( inputStream );
		
		return attch;
	}
	
	

}
