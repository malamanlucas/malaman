package br.com.core.apps.pedido.validate;

import java.math.BigDecimal;
import java.util.Collection;

import org.springframework.util.CollectionUtils;

import br.com.comum.math.MathUtils;
import br.com.core.validate.BeanValidator;
import br.com.model.entities.user.Address;
import br.com.model.entities.user.ItemCart;
import br.com.model.entities.user.Pedido;
import br.com.model.enums.MeioRecebimento;

import com.google.common.base.Preconditions;

public class PedidoValidator {

	private BeanValidator validator;

	public PedidoValidator(BeanValidator beanValidator) {
		this.validator = beanValidator;
	}
	
	public void validate(Pedido pedido) {
		
		Preconditions.checkNotNull( pedido.getUserLogged(), "Usuário obrigatório" );
		
		if ( pedido.isPresencialDinheiro() ) {
			BigDecimal amountPayable = pedido.getAmountPayable();
			BigDecimal priceTotal    = pedido.getPrice();
			Preconditions.checkArgument( amountPayable.compareTo( priceTotal ) != -1, 
										 "O valor pago deve ser maior ou igual ao valor do pedido");
			pedido.setTroco( MathUtils.subtract( amountPayable, priceTotal ) );
		}
		
		validateItens( pedido.getItens() );
		
		MeioRecebimento recebimento = pedido.getReceiverMethod().getEnum();
		Address address             = pedido.getAddress();
		if ( recebimento == MeioRecebimento.ENTREGAR_NO_ENDERECO ) {
			Preconditions.checkNotNull( address, "Por favor o informe um endereço de entrega");
			validator.validate( address );
		}
		
	}
	
	private void validateItens(Collection<ItemCart> itens) {
		
		Preconditions.checkArgument( !CollectionUtils.isEmpty(itens), "Pelo menos um informe um item no pedido" );
		
	}
	
}
