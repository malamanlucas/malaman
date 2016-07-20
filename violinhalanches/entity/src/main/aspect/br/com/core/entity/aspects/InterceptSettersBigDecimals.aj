package br.com.core.entity.aspects;

import java.math.BigDecimal;

import br.com.comum.fmt.Formatter;


public aspect InterceptSettersBigDecimals {
	
	Object around(BigDecimal a) : 
		within(br.com..*) && ( execution(public * *(BigDecimal)) && args(a)){
		
		return proceed( Formatter.arredondar(a) );
		
	}
	
	
	
}
