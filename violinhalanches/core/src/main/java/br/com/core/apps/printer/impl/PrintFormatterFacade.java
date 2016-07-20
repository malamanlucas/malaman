package br.com.core.apps.printer.impl;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.ui.velocity.VelocityEngineUtils;

import br.com.comum.fmt.Formatter;
import br.com.comum.math.MathUtils;
import br.com.core.apps.printer.PrintFormatterApp;
import br.com.core.apps.produto.validate.ProductUtils;
import br.com.model.entities.manager.Product;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.ItemCart;
import br.com.model.entities.user.Pedido;
import br.com.model.enums.MeioPagamento;
import br.com.model.enums.MeioRecebimento;
import br.com.model.enums.ProductType;
import br.com.model.enums.StatusPagamento;

import com.google.common.base.Strings;

@Scope("singleton")
@Service("printFormatterFacade")
public class PrintFormatterFacade implements PrintFormatterApp {

	@Autowired
	private VelocityEngine velocity;
	
	private static final Integer MAX_COLUMNS = 48;
	
	private static final String TEMPLATE_COOKER  = "printer/cooker.vm";
	private static final String TEMPLATE_DELIVER = "printer/deliver.vm";
	
	@Override
	public String generateForCooker(Pedido pedido) {
		Map<String, Object> map = generateDefaultMapForPrint(pedido);
		return VelocityEngineUtils.mergeTemplateIntoString(velocity, TEMPLATE_COOKER, "UTF-8", map);
	}
	
	@Override
	public String generateTextForPrintItensInLunch(Product actual,	Product original) {
		return ProductUtils.getTextForPrint(actual, original);
	}


	@Override
	public String generateForDeliver(Pedido pedido) {
		Map<String, Object> map = generateDefaultMapForPrint(pedido);
		map.put("address"              , retrieveAddress(pedido.getAddress()));
		map.put("isDelivered"          , formatBoolean(pedido.getReceiverMethod().getEnum() == MeioRecebimento.ENTREGAR_NO_ENDERECO) );
		map.put("isPayed"              , formatBoolean(pedido.getStatusPagamento() == StatusPagamento.PAGO) );
		map.put("eatHere"              , formatBoolean(pedido.isEntregar())    );
		map.put("additionalPaymentData", retrieveAdditionalPaymentData(pedido) );
		return VelocityEngineUtils.mergeTemplateIntoString(velocity, TEMPLATE_DELIVER, "UTF-8", map);
	}
	
	private Map<String, Object> generateDefaultMapForPrint(Pedido pedido) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("p"                    , pedido);
		map.put("retrieveInfoLunchs"   , retrieveInfoLunchs(pedido.getItens()) );
		map.put("retrieveInfoProducts" , retrieveInfoProducts(pedido.getItens()) );
		return map;
	}


	private String retrieveInfoProducts(Collection<ItemCart> itens) {
		StringBuilder builder = new StringBuilder();
		for (ItemCart item : itens) {
			if (item.getTypeAsEnum() == ProductType.PRODUCT) {
				builder.append( formatText(item.getQuantity() + " - " + item.getName() + " - " + item.getPriceUnitAsText()) );
			}
		}
		return builder.toString();
	}


	private String retrieveInfoLunchs(Collection<ItemCart> itens) {
		StringBuilder builder = new StringBuilder();
		for (ItemCart item : itens) {
			ProductType type = item.getTypeAsEnum();
			if (type != ProductType.PRODUCT) {
				builder.append( formatText(item.getQuantity() + " - " + item.getName() + " " +type.getAcronym() + " - " + item.getPriceUnitAsText()) );
				if ( !Strings.isNullOrEmpty(item.getTextPrint()) ) {
					builder.append( item.getTextPrint()+"\n" );
				}
				String extraInfo = item.getExtraInfo();
				if ( !Strings.isNullOrEmpty(extraInfo) ) {
					builder.append( item.getExtraInfo()+"\n" );
				}
				builder.append("\n");
			}
		}
		
		return builder.toString();
	}


	private String retrieveAdditionalPaymentData(Pedido pedido) {
		if (pedido.getPaymentMethod().getEnum() != MeioPagamento.PRESENCIAL_DINHEIRO)
			return "";
		StringBuilder builder = new StringBuilder();
		builder.append( formatText( "Valor a ser Pago: "+Formatter.numberToString(MathUtils.sum(pedido.getPrice(), pedido.getTroco()))) );
		builder.append( formatText( "Troco: "+pedido.getTrocoAsText() ) );
		return builder.toString();
	}

	@Override
	public String genearateForDeliver(Pedido pedido) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("p", pedido);
		return VelocityEngineUtils.mergeTemplateIntoString(velocity, TEMPLATE_DELIVER, "UTF-8", map);
	}
	
	private String retrieveAddress(Address address) {
		if (address == null) return formatText( "Nenhum endereço specificado ");
		StringBuilder builder = new StringBuilder();
		builder.append( formatText(address.getStreet() + ", "+address.getNumber()) );
		builder.append( formatText(address.getBairro() + ", "+address.getComplement()) );
		return builder.toString();
	}
	
	private String formatText(String txt) {
		int size = txt.length();
		return StringUtils.rightPad( txt, MAX_COLUMNS-size) + "\n";
	}
	
	private String formatBoolean(boolean val) {
		return val ? "Sim" : "Não";
	}

}


