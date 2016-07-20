package br.com.model.entities.manager;

import java.math.BigDecimal;

import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.comum.fmt.Formatter;
import br.com.model.interfaces.PhotoWrapper;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Item implements PhotoWrapper {

	public Item() {
		this.maxAmount = 1;
		this.amount    = 1;
	}

	@XmlAttribute(name="id")
	private Integer id;

	@NotEmpty(message = "Nome obrigatório")
	@NotNull(message = "Nome obrigatório")
	@XmlAttribute(name="nome")
	private String name;

	@NotNull(message = "Valor obrigatório")
	@XmlAttribute(name="valor")
	private BigDecimal price;

	@XmlAttribute(name="qtd_max")
	private Integer maxAmount;

	@XmlAttribute(name="qtd")
	private Integer amount;

	@XmlAttribute(name="qtd_atual")
	private Integer currentAmount;

	@NotNull(message="Foto obrigatório")
	private Photo photo;
	
	@XmlTransient
	private Integer productId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getPriceAsText() {
		return Formatter.numberToString(price);
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	
	public Integer getMaxAmount() {
		return maxAmount;
	}

	public void setMaxAmount(Integer maxAmount) {
		this.maxAmount = maxAmount;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public Photo getPhoto() {
		return photo;
	}

	public void setPhoto(Photo photo) {
		this.photo = photo;
	}

	public Integer getCurrentAmount() {
		return currentAmount;
	}

	public void setCurrentAmount(Integer currentAmount) {
		this.currentAmount = currentAmount;
	}

	@NotNull(message="Foto obrigatório")
	public byte[] getPhotoAsBytes() {
		return photo == null ? null : photo.getBytes();
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", name=" + name + ", price=" + price
				+ ", maxAmount=" + maxAmount + ", amount=" + amount
				+ ", currentAmount=" + currentAmount + ", productId="
				+ productId + "]";
	}

}