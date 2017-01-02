package br.com.biblia.test.base;

@FunctionalInterface
public interface EntityModifier<T> {

	void modify(T t);
	
}
