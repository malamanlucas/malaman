package br.com.model.entities.user;

import java.io.Serializable;
import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.comum.constantes.Constantes;
import br.com.comum.fmt.Formatter;
import br.com.comum.math.MathUtils;
import br.com.model.enums.ProductType;

public class ItemCart implements Serializable {

	private static final long serialVersionUID = 1L;

	public ItemCart() {
		this.key       = new ItemCartKey();
		this.priceUnit = Constantes.ZERO_BIG_DECIMAL; 
	}
	
	public ItemCart(ItemCartKey key, BigDecimal priceUnit) {
		this.key       = key;
		this.priceUnit = priceUnit;
		this.quantity  = 1;
	}
	
	private ItemCartKey key;
	private BigDecimal  priceUnit;
	private Integer     quantity;
	private String      textPrint;
	private String      extraInfo;
	
	public ItemCartKey getKey() {
		return key;
	}

	public void setKey(ItemCartKey key) {
		this.key = key;
	}
	
	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public void increment() {
		this.quantity++;
	}

	public BigDecimal getPriceUnit() {
		return priceUnit;
	}
	
	@JsonIgnore public String getPriceUnitAsText() {
		return Formatter.numberToString( priceUnit );
	}

	public void setPriceUnit(BigDecimal priceUnit) {
		this.priceUnit = priceUnit;
	}
	
	@JsonIgnore public BigDecimal getPrice() {
		return MathUtils.multiply( priceUnit, new BigDecimal( quantity ) );
	}
	
	@JsonIgnore public String getPriceAsText() {
		return Formatter.numberToString( getPrice() );
	}
	
	@JsonIgnore public String getFullName() {
		return String.format("%d %s", quantity, key.getName());
	}

	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((key == null) ? 0 : key.hashCode());
		return result;
	}
	
	public boolean equals(Object obj) {
		ItemCart other = (ItemCart) obj;
		return other.getKey().equals( key );
	}

	@JsonIgnore public String getName() {
		return key.getName();
	}

	@JsonIgnore public String getDescription() {
		return key.getDescription();
	}

	public String getTextPrint() {
		return textPrint;
	}

	public void setTextPrint(String textPrint) {
		this.textPrint = textPrint;
	}

	public Integer getType() {
		return key.getType();
	}

	public void setType(Integer type) {
		key.setType(type);
	}
	
	@JsonIgnore public void setTypeAsEnum(ProductType typeAsEnum) {
		setType( typeAsEnum.getCode() );
	}
	
	@JsonIgnore public ProductType getTypeAsEnum() {
		return ProductType.fromCode( key.getType() );
	}

	public String getExtraInfo() {
		return extraInfo;
	}

	public void setExtraInfo(String extraInfo) {
		this.extraInfo = extraInfo;
	}
	
}

