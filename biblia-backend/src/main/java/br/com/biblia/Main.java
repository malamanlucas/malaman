package br.com.biblia;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.expression.Expression;
import org.springframework.expression.spel.standard.SpelExpression;
import org.springframework.expression.spel.standard.SpelExpressionParser;

import com.google.common.collect.Lists;

public class Main {

	public static void main(String[] args) {
		
		List<Integer> i = Lists.newArrayList(1,2,3,4);
		
		List<String> a = i.stream().map(x -> x.toString()).collect(Collectors.toList());
		
		
	}
	
}
