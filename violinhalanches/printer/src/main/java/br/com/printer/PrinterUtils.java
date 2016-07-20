package br.com.printer;

public class PrinterUtils {

	private static BematechNFiscal i = BematechNFiscal.Instance;
	
	public static void imprimir(String message) {
		BematechNFiscal i = BematechNFiscal.Instance;
		i.ConfiguraModeloImpressora(8);
		i.IniciaPorta("USB");
		i.BematechTX( message );
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
}
