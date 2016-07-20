package br.com.comum.factory;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;

public abstract class GenericSpringBeanFactory implements BeanFactoryAware {
	
	private BeanFactory bf;
	
	@Override
	public void setBeanFactory(BeanFactory bf) throws BeansException {
		this.bf = bf;
	}
	
	public <T> T getBeanByType(Class<T> clazz) {
		return (T) bf.getBean(clazz);
	}

	@SuppressWarnings("unchecked")
	public <T> T getBeanByName(String name, Class<T> clazz) {
		return (T) bf.getBean(name);
	}
	
	public Object getBeanByName(String name) {
		return bf.getBean(name);
	}
}
