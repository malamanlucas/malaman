package br.com.biblia;

import java.util.HashMap;
import java.util.Locale;

import javax.faces.webapp.FacesServlet;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.beans.factory.config.CustomScopeConfigurer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.WebApplicationInitializer;

import com.sun.faces.config.ConfigureListener;

import br.com.biblia.web.scope.ViewScope;

/**
 * Created by Alex on 28/02/2015.
 */

@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Application 
				extends SpringApplicationBuilder
					implements WebApplicationInitializer {
	
	public static void main(String[] args) {
		Locale.setDefault(new Locale("pt", "BR"));
		ConfigurableApplicationContext ctx = SpringApplication.run(Application.class, args);
	}
	
	// @Bean
	// public HibernateTransactionManager transactionManager(SessionFactory sf)
	// {
	// return new HibernateTransactionManager(sf);
	// }
	//
	// @Bean
	// public LocalSessionFactoryBean sessionFactory(DataSource ds) throws
	// ClassNotFoundException {
	// LocalSessionFactoryBean localSessionFactoryBean = new
	// LocalSessionFactoryBean();
	// localSessionFactoryBean.setDataSource(ds);
	// return localSessionFactoryBean;
	// }

	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		System.err.println("------------------------------------");
		servletContext.setInitParameter("javax.faces.DEFAULT_SUFFIX", ".xhtml");
		servletContext.setInitParameter("javax.faces.PARTIAL_STATE_SAVING_METHOD", "true");
		servletContext.setInitParameter("javax.faces.PROJECT_STAGE", "Production");
		// servletContext.setInitParameter("facelets.DEVELOPMENT", "true");
		servletContext.setInitParameter("javax.faces.FACELETS_REFRESH_PERIOD", "1");

		servletContext.setInitParameter("primefaces.CLIENT_SIDE_VALIDATION", "false");
//		servletContext.setInitParameter("primefaces.THEME", "bootstrap");
//		servletContext.setInitParameter("primefaces.FONT_AWESOME", "true");
//		servletContext.setInitParameter("primefaces.UPLOADER", "commons");
		servletContext.setInitParameter("BootsFaces_USETHEME", "true");
		servletContext.setInitParameter("BootsFaces_THEME", "cosmo");
//		
//		servletContext.setInitParameter("net.bootsfaces.get_fontawesome_from_cdn", "true");
//		servletContext.setInitParameter("net.bootsfaces.get_jquery_from_cdn", "true");
		servletContext.setInitParameter("BootsFaces_USE_VIEWPORT",
				"width=device-width, initial-scale=1.0, user-scalable=no");
//		servletContext.setInitParameter("net.bootsfaces.blockUI", "true");
	}

//	@Bean
//	public ServletRegistrationBean servletRegistrationBean() {
//		FacesServlet servlet = new FacesServlet();
//		ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(servlet, "*.xhtml");
//		return servletRegistrationBean;
//	}
//
//	@Bean
//	public FilterRegistrationBean rewriteFilter() {
//		FilterRegistrationBean rwFilter = new FilterRegistrationBean(new RewriteFilter());
//		rwFilter.setDispatcherTypes(
//				EnumSet.of(DispatcherType.FORWARD, DispatcherType.REQUEST, DispatcherType.ASYNC, DispatcherType.ERROR));
//		rwFilter.addUrlPatterns("/*");
//		return rwFilter;
//	}
//
//	@Bean
//	public FilterRegistrationBean fileUploadFilter() {
//		FilterRegistrationBean registration = new FilterRegistrationBean();
//		registration.setFilter(new org.primefaces.webapp.filter.FileUploadFilter());
//		registration.setName("PrimeFaces FileUpload Filter");
//		return registration;
//	}

	// @Bean
	// public FilterRegistrationBean hibernateFactory() {
	// FilterRegistrationBean registration = new FilterRegistrationBean();
	// registration.setFilter( new OpenEntityManagerInViewFilter() );
	// registration.setName("SpringOpenEntityManagerInViewFilter");
	// return registration;
	// }

	// @Bean
	// public FilterRegistrationBean filterRegistration() {
	// FilterRegistrationBean registration = new FilterRegistrationBean();
	// registration.setFilter(new OpenSessionInViewFilter());
	// registration.addUrlPatterns("/*");
	//
	// return registration;
	// }
	
	
	@Bean
	public static ViewScope viewScope() {
		return new ViewScope();
	}

	/**
	 * Allows the use of @Scope("view") on Spring @Component, @Service and @Controller
	 * beans
	 */
	@Bean
	public static CustomScopeConfigurer scopeConfigurer() {
		CustomScopeConfigurer configurer = new CustomScopeConfigurer();
		HashMap<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("view", viewScope());
		configurer.setScopes(hashMap);
		return configurer;
	}

	/*
	 * Below sets up the Faces Servlet for Spring Boot
	 */
	@Bean
	public FacesServlet facesServlet() {
		return new FacesServlet();
	}

	@Bean
	public ServletRegistrationBean facesServletRegistration() {
		ServletRegistrationBean registration = new ServletRegistrationBean(
				facesServlet(), "*.xhtml");
		registration.setName("FacesServlet");
		return registration;
	}

	@Bean
	public ServletListenerRegistrationBean<ConfigureListener> jsfConfigureListener() {
		return new ServletListenerRegistrationBean<ConfigureListener>(
				new ConfigureListener());
	}
	

}
