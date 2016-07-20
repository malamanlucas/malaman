package br.com.web.controladores.usuario;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.comum.config.ConfigProperties;
import br.com.comum.fmt.Formatter;
import br.com.model.entities.manager.PaymentMethod;
import br.com.model.entities.manager.Product;
import br.com.model.entities.manager.ReceiverMethod;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.Cart;
import br.com.model.entities.user.ItemCartKey;
import br.com.model.enums.AddressType;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;
import br.com.model.enums.ProductType;
import br.com.web.annotations.Message;
import br.com.web.util.SessionUtils;

@Scope("prototype")
@Controller(value="carrinhoController")
@RequestMapping(value="/carrinho")
public class CartController {
	
	@RequestMapping(value="/",method={RequestMethod.GET, RequestMethod.GET} )
	public String iniciar(Model model) {
		checkIfSalesIsOpened();
		model.addAttribute( "uf", ConfigProperties.getUF() );
		model.addAttribute( "city", ConfigProperties.getCity() );
		model.addAttribute( "addressTypes", new AddressType[]{ AddressType.ENDERECO_CADASTRADO, AddressType.OUTRO_ENDERECO });
		return "carrinho/inicio";
	}
	
	@RequestMapping(value="/add", method={RequestMethod.POST, RequestMethod.GET})
	public String addProduct(Model model, Product product) {
		
		checkIfSalesIsOpened();
		getProductApp().checkIntegrity(product);
		
		populateTextForPrint(product);
		
		Cart cart = SessionUtils.getCart();
		cart.addItem( product );
		
		return iniciar(model);
	}
	
	private void populateTextForPrint(Product actual) {
		if (actual.getType() != ProductType.PRODUCT) {
			Product original = getProductApp().find( actual.getId() );
			actual.setTextPrint( getPrintFormatterApp().generateTextForPrintItensInLunch(actual, original) );
		}
	}
	
	@RequestMapping(value="/add/no/redirect", method={RequestMethod.POST, RequestMethod.GET})
	public String addProductWithoutRedirect(Model model, Product product) {
		
		checkIfSalesIsOpened();
		getProductApp().checkIntegrity(product);
		populateTextForPrint(product);
		
		Cart cart = SessionUtils.getCart();
		cart.addItem( product );
		
		return "home/cart/itens";
	}
	
	@Message("Seu carrinho foi limpado com sucesso")
	@RequestMapping(value="/clean")
	public String cleanCart(Model model) {
		SessionUtils.getCart().clean();
		return getHomeController().iniciar(model);
	}
	
	@RequestMapping(value="/payments", method=RequestMethod.GET)
	public String loadPaymentMethods(Model model) {
		model.addAttribute( "payments", getManagerApp().searchPaymentMethodsEnabled() );
		return "carrinho/ajax/pagamento";
	}
	
	@RequestMapping(value="/receivers", method=RequestMethod.GET)
	public String loadReceiverMethods(Model model) {
		model.addAttribute( "receivers", getManagerApp().searchReceiverMethodsEnabled() );
		return "carrinho/ajax/recebimento";
	}
	
	@RequestMapping(value="/address", method=RequestMethod.GET)
	public @ResponseBody String getAddress(Model model, @RequestParam Byte typeAddress) {
		Address address = SessionUtils.getEntity().getAddress();
		String result = "Nenhum endereço para entrega especificado";
		saveTypeAddress( typeAddress );
		if (address != null) {
			SessionUtils.getUserWEB().setDeliveryAddress( address );
			result = address.getFullAddress();
		}
		return result;
	}
	
	@RequestMapping(value="/itens", method=RequestMethod.GET)
	public String loadItensAjax(Model model) {
		return "carrinho/ajax/itens";
	}
	
	private void saveTypeAddress(Byte code) {
		Cart cart = SessionUtils.getCart();
		cart.setAddressType( AddressType.fromCode( code ) );
	}
	
	@RequestMapping(value="/quantity", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> modifyQuantity(Model model, ItemCartKey key, @RequestParam Integer quantity) {
		Map<String, Object> params = new HashMap<String, Object>();
		Cart cart = SessionUtils.getCart();
		BigDecimal subTotal = cart.modifyQuantity(key, quantity);
		
		params.put( "quantity"  , quantity );
		params.put( "priceTotal", cart.getPriceTotalAsText() );
		params.put( "subTotal"  , Formatter.numberToString(subTotal) );
		return params;
	}
	
	@RequestMapping(value="/address/save", method=RequestMethod.POST)
	public @ResponseBody Object saveDeliveryAddress(Model model, Address address, @RequestParam Byte typeAddress) {
		SessionUtils.getUserWEB().setDeliveryAddress( address );
		saveTypeAddress( typeAddress );
		
		try {
			getAddressApp().validate( address );
		} catch (Exception e) {
			Map<String,Object> map = new HashMap<>();
			map.put("hasError", true);
			map.put("errorMsg", e.getMessage());
			return map;
		}
		
		return address.getFullAddress();
	}
	
	@RequestMapping(value="/method/change", method=RequestMethod.POST)
	public @ResponseBody boolean changeMethod(Model model, @RequestParam String type, @RequestParam Byte code) {
		
		Cart cart = SessionUtils.getCart();
		
		if ( type.equals("receiver") ) {
			MeioRecebimento meioRecebimento = MeioRecebimento.fromCode( code );
			ReceiverMethod receiverMethod   = cart.getReceiverMethod();
			receiverMethod.setDescription( meioRecebimento.getDescricao() );
			receiverMethod.setId         ( (int) meioRecebimento.getCode() );
		} else {
			MeioPagamento meioPagamento = MeioPagamento.fromCode( code );
			PaymentMethod paymentMethod = cart.getPaymentMethod();
			paymentMethod.setDescription( meioPagamento.getDescricao() );
			paymentMethod.setId         ( (int) meioPagamento.getCode() );
		}
		
		return true;
	}

}
