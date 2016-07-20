package br.com.printer;


import br.com.util.BundleUtils;

import com.sun.jna.Library;
import com.sun.jna.Native;

public interface BematechNFiscal extends Library {
    public BematechNFiscal Instance = (BematechNFiscal) Native.loadLibrary( BundleUtils.getDLL() , BematechNFiscal.class);

    public int ConfiguraModeloImpressora(int modelo);
    public int IniciaPorta(String porta);
    public int FechaPorta();
    public int ImprimeBitmap(String bitmap, int orientacao);
    public int AjustaLarguraPapel(int a);
    public int VerificaPapelPresenter();
    public int Le_Status();
    public int teste();
    public void ConfiguraTaxaSerial(int a);
    public int Le_Status_Gaveta();
    public int AcionaGuilhotina(int a);
    public int ImprimeCodigoBarrasCODABAR(String a);
    public int FormataTX(String t, int tipoLetra, 
    							   int italico, 
    							   int sublinhado, 
    							   int expadindo,
    							   int enfatizado);
    public void HabilitaEsperaImpressao(int a);
    public int PrinterReset();
    public int BematechTX(String a);
    public int ImprimeBmpEspecial(String bitmap, int width,int height,int angle);
    public int SelectDithering(int a);
    public int ComandoTX(String s, int a);
    public int CaracterGrafico(String s, int a);

}
