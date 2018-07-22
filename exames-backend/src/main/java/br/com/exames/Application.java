package br.com.exames;

import java.util.Locale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import br.com.exames.config.AutowireHelper;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		Locale.setDefault(new Locale("pt", "BR"));
		ConfigurableApplicationContext ctx = SpringApplication.run(Application.class, args);
	}
	
	@Bean
	public AutowireHelper autowireHelper(){
	    return AutowireHelper.getInstance();
	}
}
