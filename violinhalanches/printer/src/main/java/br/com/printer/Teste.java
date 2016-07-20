package br.com.printer;



public class Teste {

	public static void main(String[] args) {
		
//		imprimeNaoPagoNaoEntrega();
//		imprimePagoOnlineEntrega();
//		imprimiAsBagacera();
		cortarPapel();
//		imprimeModeloNFCaixaCliente01();
//		BematechNFiscal i = BematechNFiscal.Instance;
//		imprimirSeparadores();
		
	}
	
public static void imprimeModeloNFCaixaCliente01(){
		
		BematechNFiscal i = BematechNFiscal.Instance;
		i.ConfiguraModeloImpressora(8);
		i.IniciaPorta("USB");
		i.BematechTX("________________________________________________\n");
		i.BematechTX(" VIOLINHA LANCHES             PEDIDO N 000022   \n");
		i.BematechTX(" DATA: 08/05/2014             HORA: 16:33       \n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("\n");
		i.BematechTX("02 Hamburguer\n");
		i.BematechTX("S/Maionese S/Ketchup S/alface S/tomate +bacon \n");
		i.BematechTX("Carne bem passada\n");
		i.BematechTX("\n");
		i.BematechTX("01 Churrasco Acebolado\n");
		i.BematechTX("\n");
		i.BematechTX("01 Cachorro-Quente\n");
		i.BematechTX("+Bacon\n");
		i.BematechTX("\n");
		i.BematechTX("01 Galinh�o\n");
		i.BematechTX("p�o bem queimado\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("\n");
		i.BematechTX("01 Coca 2Lts\n");
		i.BematechTX("02 Coca Lata 350ml\n");
		i.BematechTX("01 Trufa Tradicional\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("Lucas Rocini                  Tel: 99697-5933\n");
		i.BematechTX("Rua Jos� Augusto J�nior n39\n");
		i.BematechTX("Boque de Versalles  - Araras SP\n");
		i.BematechTX("\n");
		i.BematechTX("Entregar - SIM\n");
		i.BematechTX("Pago     - N�O\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("Valor Total:___________________R$ 39,75\n");
		i.BematechTX("Dinheiro:_________R$ 50,00\n");
		i.BematechTX("Troco:____________R$ 10,25\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX(" VIOLINHA LANCHES             PEDIDO N 000021   \n");
		i.BematechTX("________________________________________________\n");

		i.AcionaGuilhotina(0);	
		
		i.BematechTX("________________________________________________\n");
		i.BematechTX(" VIOLINHA LANCHES             PEDIDO N 000022   \n");
		i.BematechTX(" DATA: 08/05/2014             HORA: 16:33       \n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX(" FIXO:   3542-7640         TIM:  98249-1610     \n");
		i.BematechTX(" VIVO:  99888-0171         VIVO: 99635-6570     \n");
		i.BematechTX(" OI:    98844-8170         OI:   98808-4075     \n");
		i.BematechTX(" CLARO: 99155-1076                              \n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("\n");
		i.BematechTX("02 Hamburguer\n");
		i.BematechTX("S/Maionese S/Ketchup S/alface S/tomate C/bacon \n");
		i.BematechTX("Carne bem passada\n");
		i.BematechTX("\n");
		i.BematechTX("01 Churrasco Acebolado\n");
		i.BematechTX("\n");
		i.BematechTX("01 Cachorro-Quente\n");
		i.BematechTX("C/Bacon\n");
		i.BematechTX("\n");
		i.BematechTX("01 Galinh�o\n");
		i.BematechTX("p�o bem queimado\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("\n");
		i.BematechTX("01 Coca 2Lts\n");
		i.BematechTX("02 Coca Lata 350ml\n");
		i.BematechTX("01 Trufa Tradicional\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("Lucas Rocini                  Tel: 99697-5933\n");
		i.BematechTX("Rua Jos� Augusto J�nior n39\n");
		i.BematechTX("Boque de Versalles  - Araras SP\n");
		i.BematechTX("\n");
		i.BematechTX("Entregar - SIM\n");
		i.BematechTX("Pago     - N�O\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("Valor Total:___________________R$ 39,75\n");
		i.BematechTX("Dinheiro:_________R$ 50,00\n");
		i.BematechTX("Troco:____________R$ 10,25\n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX(" VIOLINHA LANCHES             PEDIDO N 000021   \n");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("        WWW.VIOLINHALANCHES.COM.BR\n");
		i.BematechTX("________________________________________________\n");
		
		i.AcionaGuilhotina(1);		
		i.FechaPorta();		
		
	}

public static void imprimeModeloNFCaixaCliente02(){
	
	BematechNFiscal i = BematechNFiscal.Instance;
	i.ConfiguraModeloImpressora(8);
	i.IniciaPorta("USB");
	i.BematechTX("________________________________________________\n");
	i.BematechTX(" VIOLINHA LANCHES             PEDIDO N 000021   \n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("\n");
	i.BematechTX("02 Hamburguer\n");
	i.BematechTX("S/alface S/milho S/tomate C/bacon\n");
	i.BematechTX("S/Ketchup S/maionese\n");
	i.BematechTX("Carne bem passada\n");
	i.BematechTX("\n");
	i.BematechTX("01 Churrasco Acebolado\n");
	i.BematechTX("\n");
	i.BematechTX("01 Cachorro-Quente\n");
	i.BematechTX("C/Bacon\n");
	i.BematechTX("\n");
	i.BematechTX("01 Galinh�o\n");
	i.BematechTX("p�o bem queimado\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("\n");
	i.BematechTX("01 Coca 2Lts\n");
	i.BematechTX("02 Coca Lata 350ml\n");
	i.BematechTX("01 Trufa Tradicional\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("Lucas Rocini                  Tel: 99697-5933\n");
	i.BematechTX("Rua Jos� Augusto J�nior n39\n");
	i.BematechTX("Boque de Versalles  - Araras SP\n");
	i.BematechTX("\n");
	i.BematechTX("Entregar - SIM\n");
	i.BematechTX("\n");
	i.BematechTX("Pago - SIM\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("Valor Total:___________________R$ 39,75\n");
	i.BematechTX("Dinheiro:_________R$ 50,00\n");
	i.BematechTX("Troco:____________R$ 10,25\n");
    i.BematechTX("________________________________________________\n");
	i.BematechTX(" VIOLINHA LANCHES             PEDIDO N 000021   \n");
	i.BematechTX("________________________________________________\n");
	
	i.AcionaGuilhotina(0);	
	
	i.BematechTX("________________________________________________\n");
	i.BematechTX(" VIOLINHA LANCHES             PEDIDO N 000021   \n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX(" FIXO:  3542-7640          TIM:  98249-1610     \n");
	i.BematechTX(" VIVO: 99888-0171          VIVO: 99635-6570     \n");
	i.BematechTX(" OI:   98844-8170          OI:   98808-4075     \n");
	i.BematechTX(" CLARO:99155-1076                               \n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("\n");
	i.BematechTX("02 Hamburguer\n");
	i.BematechTX("S/alface S/milho S/tomate C/bacon\n");
	i.BematechTX("S/Ketchup S/maionese\n");
	i.BematechTX("Carne bem passada\n");
	i.BematechTX("\n");
	i.BematechTX("01 Churrasco Acebolado\n");
	i.BematechTX("\n");
	i.BematechTX("01 Cachorro-Quente\n");
	i.BematechTX("C/Bacon\n");
	i.BematechTX("\n");
	i.BematechTX("01 Galinh�o\n");
	i.BematechTX("p�o bem queimado\n");
	i.BematechTX("\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("\n");
	i.BematechTX("01 Coca 2Lts\n");
	i.BematechTX("01 Coca Lata 350ml\n");
	i.BematechTX("01 Trufa Tradicional\n");
	i.BematechTX("\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("Lucas Rocini                  Tel: 99697-5933\n");
	i.BematechTX("Rua Jos� Augusto J�nior n39\n");
	i.BematechTX("Boque de Versalles  - Araras SP\n");
	i.BematechTX("\n");
	i.BematechTX("Entregar - SIM\n");
	i.BematechTX("\n");
	i.BematechTX("Pago - SIM\n");
	i.BematechTX("________________________________________________\n");
	i.BematechTX("Valor Total:___________________R$ 39,75\n");
	i.BematechTX("Dinheiro:_________R$ 50,00\n");
	i.BematechTX("Troco:____________R$ 10,25\n");
	
	i.AcionaGuilhotina(1);		
	i.FechaPorta();		
	
	}

	public static void cortarPapel(){
		BematechNFiscal i = BematechNFiscal.Instance;
		i.ConfiguraModeloImpressora(8);
		i.IniciaPorta("USB");
		i.AcionaGuilhotina(1);		
		i.FechaPorta();		
	}
	
	public static void imprimirSeparadores(){
		
		BematechNFiscal i = BematechNFiscal.Instance;
		i.ConfiguraModeloImpressora(8);
		i.IniciaPorta("USB");
		i.BematechTX("________________________________________________\n");
		i.BematechTX("________________________________________________\n\n");
		i.BematechTX("________________________________________________\n\n");
		i.BematechTX("*************************************************\n");
		i.BematechTX("*************************************************\n\n");
		i.BematechTX("*************************************************\n\n");
		i.BematechTX("-------------------------------------------------\n");
		i.BematechTX("-------------------------------------------------\n\n");
		i.BematechTX("-------------------------------------------------\n\n");
		i.BematechTX("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
		i.BematechTX("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n");
		i.BematechTX("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n");
		i.BematechTX(".................................................\n");
		i.BematechTX(".................................................\n\n");
		i.BematechTX(".................................................\n\n");
		i.BematechTX("=================================================\n");
		i.BematechTX("=================================================\n\n");
		i.BematechTX("=================================================\n\n");	
		i.BematechTX("+++++++++++++++++++++++++++++++++++++++++++++++++\n");
		i.BematechTX("+++++++++++++++++++++++++++++++++++++++++++++++++\n\n");
		i.BematechTX("+++++++++++++++++++++++++++++++++++++++++++++++++\n\n");
		i.BematechTX("/////////////////////////////////////////////////\n");
		i.BematechTX("/////////////////////////////////////////////////\n\n");
		i.BematechTX("/////////////////////////////////////////////////\n\n");	
		i.BematechTX("#################################################\n");
		i.BematechTX("#################################################\n\n");
		i.BematechTX("#################################################\n\n");	
				
		i.AcionaGuilhotina(1);		
		i.FechaPorta();		
		
	}
	
}
