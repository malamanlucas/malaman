package br.com.biblia.web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter{

	public void addViewControllers(ViewControllerRegistry registry) {
		registry
			  .addViewController( "/" )
			  .setViewName( "forward:/home.xhtml" );
		registry.setOrder( Ordered.HIGHEST_PRECEDENCE );
		super.addViewControllers( registry );
	}
	
//	@Bean
//    public HttpMessageConverters customConverters() {
////        return new HttpMessageConverters(new MappingJackson2HttpMessageConverter());
//		return null;
//    }
	
}
