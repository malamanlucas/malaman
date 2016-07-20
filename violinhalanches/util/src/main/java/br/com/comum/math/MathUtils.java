package br.com.comum.math;

import java.math.BigDecimal;

import br.com.comum.fmt.Formatter;

public class MathUtils {

	public static BigDecimal multiply(BigDecimal a, BigDecimal b) {
		return Formatter.arredondar(a.multiply(b));
	}
	
	public static BigDecimal sum(BigDecimal a, BigDecimal b) {
		return Formatter.arredondar(a.add(b));
	}
	
	public static BigDecimal subtract(BigDecimal a, BigDecimal b) {
		return Formatter.arredondar(a.subtract(b));
	}
	
	public static BigDecimal subtract(long a, long b) {
		return Formatter.arredondar(new BigDecimal(a-b));
	}
	
}
