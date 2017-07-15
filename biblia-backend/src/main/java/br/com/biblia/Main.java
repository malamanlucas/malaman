package br.com.biblia;

import org.springframework.expression.Expression;
import org.springframework.expression.spel.standard.SpelExpression;
import org.springframework.expression.spel.standard.SpelExpressionParser;

public class Main {

	public static void main(String[] args) {
		
		SpelExpressionParser parser = new SpelExpressionParser();
		Expression expression = parser.parseExpression("'qweqwewq'.concat('%')");
		System.out.println(expression.getValue());
		
	}
	
}
