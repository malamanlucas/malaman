package br.com.model.entities.user;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.util.Collection;
import java.util.Date;

import br.com.comum.constantes.Constantes;
import br.com.comum.converters.ConversorJSON;
import br.com.comum.fmt.Formatter;
import br.com.comum.math.MathUtils;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.ReceiverMethod;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.StatusPagamento;
import br.com.model.enums.StatusPedido;

public class Pedido {

	public Pedido() {}
	
	public Pedido(Long number, StatusPagamento statusPagamento, StatusPedido statusPedido) {
		this.number          = number;
		this.statusPagamento = statusPagamento;
		this.statusPedido    = statusPedido;
	}
	
	public Pedido(Cart cart, Address address, User user, BigDecimal amountPayable, BigDecimal deliveryPrice, boolean entregar) {
		this(cart, address, user);
		this.amountPayable = amountPayable;
		this.deliveryPrice = deliveryPrice;
		this.price         = MathUtils.sum(price, deliveryPrice);
		this.entregar      = entregar;
	}
	
	public Pedido(Cart cart, Address address, User user) {
		this.itens              = cart.getItensAsCollection();
		this.address            = address;
		this.paymentMethod      = cart.getPaymentMethod();
		this.receiverMethod     = cart.getReceiverMethod();
		this.userLogged         = user.getPhone();
		this.dateHourEmission   = new Date();
		this.price              = cart.getPriceTotal();
		this.statusPagamento    = StatusPagamento.NAO_PAGO;
		this.statusPedido       = StatusPedido.NAO_APROVADO;
		this.troco              = Constantes.ZERO_BIG_DECIMAL;
		this.dateHourEmission   = this.lastDateHourStatus = new Date();
		this.loadedDashboard    = false;
	}
	
	private Long                 number;
	private Date                 dateHourEmission;
	private Date                 lastDateHourStatus;
	private Collection<ItemCart> itens;
	private Address              address;
	private PaymentMethod        paymentMethod;
	private ReceiverMethod       receiverMethod;
	private User                 user;
	private BigDecimal           troco;
	private BigDecimal           amountPayable;
	private BigDecimal           deliveryPrice;
	private BigDecimal           price;
	private StatusPagamento      statusPagamento;
	private StatusPedido         statusPedido;
	private String               userLogged;
	private String               paymentUrl;
	private boolean              loadedDashboard;
	private boolean              entregar;
	
	public Collection<ItemCart> getItens() {
		return itens;
	}
	
	public String getItensAsJSON() {
		return ConversorJSON.convertToString( itens );
	}
	
	public void setItensAsJSON(String json) {
		json = json.replaceAll("'", "\"");
		this.itens = ConversorJSON.convertToList( json, ItemCart.class );
	}
	
	public void setItens(Collection<ItemCart> itens) {
		this.itens = itens;
	}
	
	public Address getAddress() {
		return address;
	}
	
	public String getAddressAsJSON() {
		return ConversorJSON.convertToString( address );
	}
	
	public void setAddressAsJSON(String json) {
		json = json.replaceAll( "'", "\"" );
		this.address = ConversorJSON.convertToObject( json, Address.class );
	}
	
	public void setAddress(Address address) {
		this.address = address;
	}
	
	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}
	
	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	
	public ReceiverMethod getReceiverMethod() {
		return receiverMethod;
	}
	
	public void setReceiverMethod(ReceiverMethod receiverMethod) {
		this.receiverMethod = receiverMethod;
	}
	
	public BigDecimal getTroco() {
		return troco;
	}
	
	public String getTrocoAsText() {
		return Formatter.numberToString(troco);
	}
	
	public void setTroco(BigDecimal troco) {
		this.troco = troco;
	}
	
	public boolean isOnline() {
		return paymentMethod.getEnum() ==  MeioPagamento.ONLINE;
	}
	
	public boolean isPresencialDinheiro() {
		return paymentMethod.getEnum() ==  MeioPagamento.PRESENCIAL_DINHEIRO;
	}

	public Long getNumber() {
		return number;
	}

	public void setNumber(Long number) {
		this.number = number;
	}

	public Date getDateHourEmission() {
		return dateHourEmission;
	}
	
	public String getDateHourEmissionAsText() {
		return DateFormat.getInstance().format( dateHourEmission );
	}

	public void setDateHourEmission(Date dateHourEmission) {
		this.dateHourEmission = dateHourEmission;
	}

	public BigDecimal getAmountPayable() {
		return amountPayable;
	}

	public void setAmountPayable(BigDecimal amountPayable) {
		this.amountPayable = amountPayable;
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
	
	public Integer getPaymentAsCode() {
		return paymentMethod.getId();
	}
	
	public Integer getReceiverAsCode() {
		return receiverMethod.getId();
	}
	
	public StatusPagamento getStatusPagamento() {
		return statusPagamento;
	}

	public void setStatusPagamento(StatusPagamento statusPagamento) {
		this.statusPagamento = statusPagamento;
	}

	public StatusPedido getStatusPedido() {
		return statusPedido;
	}

	public void setStatusPedido(StatusPedido statusPedido) {
		this.statusPedido = statusPedido;
	}

	public Integer getStatusPedidoAsCode() {
		return statusPedido.getCode();
	}
	
	public Integer getStatusPagamentoAsCode() {
		return statusPagamento.getCode();
	}

	public Date getLastDateHourStatus() {
		return lastDateHourStatus;
	}
	
	public String getLastDateHourStatusAsText() {
		if ( lastDateHourStatus == null )
			return null;
		return DateFormat.getInstance().format( lastDateHourStatus);
	}

	public void setLastDateHourStatus(Date lastDateHourStatus) {
		this.lastDateHourStatus = lastDateHourStatus;
	}

	public String getUserLogged() {
		return userLogged;
	}

	public void setUserLogged(String userLogged) {
		this.userLogged = userLogged;
	}

	public String getPaymentUrl() {
		return paymentUrl;
	}

	public void setPaymentUrl(String paymentUrl) {
		this.paymentUrl = paymentUrl;
	}

	public boolean isLoadedDashboard() {
		return loadedDashboard;
	}

	public void setLoadedDashboard(boolean loadedDashboard) {
		this.loadedDashboard = loadedDashboard;
	}

	public BigDecimal getDeliveryPrice() {
		return deliveryPrice;
	}
	
	public String getDeliveryPriceAsText() {
		return Formatter.numberToString(deliveryPrice);
	}

	public void setDeliveryPrice(BigDecimal deliveryPrice) {
		this.deliveryPrice = deliveryPrice;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public boolean isEntregar() {
		return entregar;
	}

	public void setEntregar(boolean entregar) {
		this.entregar = entregar;
	}
	
}
