package br.com.comum.constantes;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;

public interface Constantes {

	String BUNDLE_FILE_NAME = "config";
	
	String VAZIO = "";

	String ESPACO = " ";

	String ITENS_MINIMOS = "itens_minimo";
	
	String ADICAO = "+";

	String LST_ITEM = "lstItem";

	String TABLE_FOTO = "foto_produto_lanche";

	String SQL_BUSCAR_FOTO = "select foto from foto_produto_lanche where nome=?";
	
	String ERRO_GENERICO = "erro_no_form";

	String NOME = "nome";

	String VALOR = "valor";

	String CATEGORIA = "categoria";
	
	String SUCESSO = "sucesso";

	String ITEMS = "items";

	String ID = "id";

	String LANCHE = "lanche";

	String LANCHE_SESSAO = "lancheSessao";

	String FOTO = "foto";

	String IMAGEM = "imagem";

	String FOTO_TEMPORARIA = "foto_temporaria";
	
	BigDecimal ZERO_BIG_DECIMAL = new BigDecimal(0.00);

	ArrayList<String> FOTO_COLUMS_NAME = new ArrayList<String>(
			Arrays.asList(new String[] { "nome", "foto" }));

}
