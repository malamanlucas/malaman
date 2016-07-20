package br.com.core.apps.produto.validate;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import br.com.comum.math.MathUtils;
import br.com.model.entities.manager.Item;
import br.com.model.entities.manager.Product;
import br.com.model.enums.ProductType;

import com.google.common.base.Preconditions;

public class ProductUtils {
	
	public static void validate(Product actual, Product original) {
		BigDecimal actualPrice   = actual.getPrice();
		BigDecimal originalPrice = original.getPrice();
		
		if (original.getType() == ProductType.PRODUCT) {
			Preconditions.checkArgument( actualPrice.equals(originalPrice), "Produto inválido, o preço dele não corresponde ao que consta em nossa base dados" );
		} else {
			String actualDescription   = actual.getDescription();
			String originalDescription = original.getDescription();
			
			if (actualDescription.equals(originalDescription)) {
				Preconditions.checkArgument( actualPrice.equals(originalPrice), "Produto inválido, o preço dele não corresponde ao que consta em nossa base dados" );
			} else {
				validateItensInLunch( actual, original );
			}
		}
	}
	
	private static void validateItensInLunch(Product actual, Product original) {
		String description = actual.getDescription();
		description = description.replaceAll( "[&|,|.|(|)]", "" );
		
		List<Item> originalItens = new ArrayList<>( original.getItens() );
		
		BigDecimal originalPrice = original.getPrice();
		
		for (String s : StringUtils.split(description," ")) {
			Integer qtd = s.charAt(0)-48;
			String name = s.substring(1);
			
			Item item = getOriginalItem(name, originalItens);
			Preconditions.checkNotNull( item, name+" não existe em nossa base de dados" );
			Integer maxAmount      = item.getMaxAmount();
			Integer originalAmount = item.getAmount();
			Preconditions.checkArgument( qtd <= maxAmount , "Não se pode adicionar mais de "+maxAmount+" "+name );
			
			Integer amountAdded = qtd - originalAmount;
			if (amountAdded > 0) {
				originalPrice = MathUtils.sum(originalPrice, MathUtils.multiply(new BigDecimal(amountAdded), item.getPrice()));
			}
			
		}
		BigDecimal actualPrice = actual.getPrice();
		Preconditions.checkArgument( actualPrice.equals(originalPrice), "Produto inválido, o preço dele não corresponde ao que consta em nossa base dados" );
	}
	
	private static Item getOriginalItem(String name, List<Item> itens) {
		Item founded = null;
		for (Item item : itens) {
			if ( item.getName().equals(name) )  {
				founded = item;
				break;
			}
		}
		itens.remove( founded );
		return founded;
	}
	
	public static String getTextForPrint(Product actual, Product original) {
		StringBuilder builder = new StringBuilder();
		String description = actual.getDescription();
		description = description.replaceAll( "[&|,|.|(|)]", "" );
		
		List<Item> originalItens = new ArrayList<>( original.getItens() );
		
		for (String s : StringUtils.split(description," ")) { 
			Integer qtd = s.charAt(0)-48;
			String name = s.substring(1);
			
			Item item = getOriginalItem(name, originalItens);
			Integer originalAmount = item.getAmount();
			Integer difference     = qtd - originalAmount;
			
			if (difference == 0) 
				continue;
			
			if (qtd == 0 && originalAmount != 0) {
				builder.append( "   S/ "+name );
			} else if (difference > 0) {
				builder.append( "   +"+difference+" "+name );
			} else if (difference < 0) {
				builder.append( "   "+difference+" "+name );
			}
		}
		
		return builder.toString().trim()+" ";
	}
	
	public static void validateItens(List<Item> itens) {
		for (Item item : itens) {
			String name    = item.getName();
			Integer amount = item.getAmount();
			Preconditions.checkArgument( amount < 10, "Não se pode adicionar mais que 9 "+name );
		}
	}
	
}
