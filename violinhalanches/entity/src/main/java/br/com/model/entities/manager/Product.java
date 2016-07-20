package br.com.model.entities.manager;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import br.com.comum.fmt.Formatter;
import br.com.model.enums.ProductType;
import br.com.model.interfaces.PhotoWrapper;

public class Product implements PhotoWrapper {

	private Integer id;
	
	@NotEmpty(message="Nome obrigatório")
	private String name;
	
	@NotNull(message="Valor obrigatório")
	private BigDecimal price;
	
	@NotEmpty(message="Descrição obrigatória")
	private String description;
	
	private Photo photo;
	
	@NotNull(message="Categoria obrigatória")
	private Category category;
	
	@Size(min=2, message="São obrigatórios no mínimo 2 ingredientes distintos")
	private List<Item> itens;
	
	@NotNull(message="Por favor escolha o tipo do pão")
	private ProductType type;
	
	private String textPrint;
	
	private String extraInfo;
	
	private Boolean enabled;
	
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
	public BigDecimal getPrice() {
		return price;
	}
	
	public String getPriceAsText() {
		return Formatter.numberToString(price);
	}
	
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Photo getPhoto() {
		return photo;
	}
	public void setPhoto(Photo photo) {
		this.photo = photo;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public List<Item> getItens() {
		return itens;
	}
	public void setItens(List<Item> itens) {
		this.itens     = itens;
	}

	@NotNull(message="Foto obrigatória")
	public byte[] getPhotoAsBytes() {
		return photo == null ? null : photo.getBytes();
	}
	
	@NotNull(message="Categoria Obrigatória")
	public Integer getCategoryId() {
		return category == null ? null : category.getId();
	}
	
	public ProductType getType() {
		return type;
	}
	public Integer getTypeAsCode() {
		return type == null ? null : type.getCode();
	}
	
	public void setType(ProductType type) {
		this.type = type;
	}
	
	public void setTypeAsCode(Integer code) {
		this.type = ProductType.fromCode(code);
	}
	
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price
				+ ", description=" + description + ", category=" + category
				+ ", itens=" + itens + ", type=" + type + "]";
	}
	
	public String getTextPrint() {
		return textPrint;
	}
	
	public void setTextPrint(String textPrint) {
		this.textPrint = textPrint;
	}
	
	public String getExtraInfo() {
		return extraInfo;
	}
	
	public void setExtraInfo(String extraInfo) {
		this.extraInfo = extraInfo;
	}
	
	public Boolean getEnabled() {
		return enabled;
	}
	
	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}
	
	
	
}
