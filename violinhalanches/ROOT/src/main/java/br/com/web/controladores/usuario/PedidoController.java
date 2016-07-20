package br.com.web.controladores.usuario;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.comum.constantes.Constantes;
import br.com.comum.fmt.Formatter;
import br.com.comum.log.Loggable;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.Cart;
import br.com.model.entities.user.Pedido;
import br.com.model.entities.user.User;
import br.com.model.entities.user.UserWEB;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;
import br.com.web.annotations.FormError;
import br.com.web.util.SessionUtils;

import com.google.common.base.Preconditions;

@Scope("prototype")
@Controller(value="pedidoController")
@RequestMapping(value="/pedido")
public class PedidoController {
	
	@Autowired
	private SimpMessagingTemplate template;
	
	@RequestMapping(value="/confirm", method=RequestMethod.GET)
	@FormError(methodName="initCart")
	@Loggable
	public String confirm(Model model, Void v) {
		Cart cart = SessionUtils.getCart();
		Preconditions.checkArgument( !cart.isEmpty(), "Obrigatório ter no mínimo 1 produto no carrinho" );
		MeioRecebimento meioRecebimento = cart.getReceiverMethod().getEnum();
		String textDeliveryPrice = "";
		BigDecimal deliveryPrice = Constantes.ZERO_BIG_DECIMAL;
		if (meioRecebimento == MeioRecebimento.ENTREGAR_NO_ENDERECO) {
			Preconditions.checkNotNull( SessionUtils.getUserWEB().getDeliveryAddress(), "Por favor, informe um endereço para entrega");
			deliveryPrice = getParameterApp().findDeliveryPrice();
			textDeliveryPrice = " + "+Formatter.numberToString(deliveryPrice)+ " (Entrega)";
		}
		model.addAttribute( "deliveryPrice"    , deliveryPrice );
		model.addAttribute( "textDeliveryPrice", textDeliveryPrice);
		
		return initConfirm( model, Constantes.ZERO_BIG_DECIMAL );
	}
	
	public String initCart(Model model, Void v) {
		return getCartController().iniciar(model);
	}
	
	
	public String initConfirm(Model model, BigDecimal value) {
		checkIfSalesIsOpened();
		
		model.addAttribute( "addressDeliveryCode", MeioRecebimento.ENTREGAR_NO_ENDERECO.getCode() );
		model.addAttribute( "faceWithMoneyCode", MeioPagamento.PRESENCIAL_DINHEIRO.getCode() );
		model.addAttribute( "amountPayable"    , Formatter.numberToString( Formatter.arredondar(value) ) );
		return "pedido/confirm";
	}
	
	@RequestMapping(value="/finish", method=RequestMethod.POST)
	@FormError(methodName="initConfirm")
	@Loggable
	public String finalizar(Model model, @RequestParam BigDecimal amountPayable, @RequestParam BigDecimal deliveryPrice, @RequestParam boolean entregar) {
		
		UserWEB userWEB = SessionUtils.getUserWEB();
		User    user    = userWEB.getEntity();
		Address address = userWEB.getDeliveryAddress();
		Cart    cart    = userWEB.getCart();
		
		Pedido pedido = new Pedido(cart, address, user, amountPayable, deliveryPrice, entregar);
		
		getPedidoApp().save( pedido );
		
		template.convertAndSendToUser( "gestor", "/dashboard/notify/pedidos", getPedidoApp().countNotEnteredInDashboard() );
		SessionUtils.getCart().clean();
		
		return getUserLoggedController().meusPedidos(model);
	}
	
	@RequestMapping(value="/json/find", method=RequestMethod.GET)
	public @ResponseBody Pedido updateStatusPedido(Model model, @RequestParam Long number) {
		return getPedidoApp().findByNumber(number);
	}
	
	
}
