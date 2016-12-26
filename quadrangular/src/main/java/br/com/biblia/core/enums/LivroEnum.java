package br.com.biblia.core.enums;

import static br.com.biblia.core.enums.Idioma.*;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;

public enum LivroEnum {
	
	GENESIS ("Gênesis", "Genesis", 50, "Gen", HEBRAICO),
	EXODO ("Êxodo", "Exodo", 40, "Ex", HEBRAICO),
	LEVITICOS ("Leviticos", "Leviticos", 27, "Lev", HEBRAICO),
	NUMEROS ("Números", "Numeros", 36, "Num", HEBRAICO),
	DEUTERONOMIO ("Deuteronomio", "Deuteronomio", 34, "Deut", HEBRAICO),
	JOSUE ("Josué", "Josue", 24, "Josh", HEBRAICO),
	JUIZES ("Juízes", "Juizes", 21, "Judg", HEBRAICO),
	RUTE ("Rute", "Rute", 4, "Ruth", HEBRAICO),
	PRIMEIRO_SAMUEL ("1 Samuel", "1 Samuel", 31, "1Sam", HEBRAICO),
	SEGUNDO_SAMUEL ("2 Samuel", "2 Samuel", 24, "2Sam", HEBRAICO),
	PRIMEIRO_REIS  ("1 Reis ", "1 Reis ", 22, "1Kgs", HEBRAICO),
	SEGUNDO_REIS ("2 Reis", "2 Reis", 25, "2Kgs", HEBRAICO),
	PRIMEIRO_CRONICAS ("1 Crônicas", "1 Cronicas", 29, "1Chr", HEBRAICO),
	SEGUNDO_CRONICAS ("2 Crônicas", "2 Cronicas", 36, "2Chr", HEBRAICO),
	ESDRAS ("Esdras", "Esdras", 10, "Ezra", HEBRAICO),
	NEEMIAS ("Neemias", "Neemias", 13, "Neh", HEBRAICO),
	ESTER ("Ester", "Ester", 10, "Est", HEBRAICO),
	JO ("Jó", "Jo", 42, "Job", HEBRAICO),
	SALMOS ("Salmos", "Salmos", 150, "Ps", HEBRAICO),
	PROVÉRBIOS ("Provérbios", "Proverbios", 31, "Prov", HEBRAICO),
	ECLESIASTES ("Eclesiastes", "Eclesiastes", 12, "Eccl", HEBRAICO),
	CANTARES ("Cantares", "Cantares", 8, "Song", HEBRAICO),
	ISAÍAS ("Isaías", "Isaias", 66, "Isa", HEBRAICO),
	JEREMIAS ("Jeremias", "Jeremias", 52, "Jer", HEBRAICO),
	LAMENTACOES ("Lamentações", "Lamentacoes", 5, "Lam", HEBRAICO),
	EZEQUIEL ("Ezequiel", "Ezequiel", 48, "Ezek", HEBRAICO),
	DANIEL ("Daniel", "Daniel", 12, "Dan", HEBRAICO),
	OSEIAS ("Oseias", "Oseias", 14, "Hos", HEBRAICO),
	JOEL ("Joel", "Joel", 3, "Joel", HEBRAICO),
	AMOS ("Amós", "Amos", 9, "Amos", HEBRAICO),
	OBADIAS ("Obadias", "Obadias", 1, "Obad", HEBRAICO),
	JONAS ("Jonas", "Jonas", 4, "Jonah", HEBRAICO),
	MIQUEIAS ("Miqueias", "Miqueias", 7, "Mic", HEBRAICO),
	NAUM ("Naum", "Naum", 3, "Nah", HEBRAICO),
	HABACUQUE ("Habacuque", "Habacuque", 3, "Hab", HEBRAICO),
	SOFONIAS ("Sofonias", "Sofonias", 3, "Zeph", HEBRAICO),
	AGEU ("Ageu", "Ageu", 2, "Hag", HEBRAICO),
	ZACARIAS ("Zacarias", "Zacarias", 14, "Zech", HEBRAICO),
	MALAQUIAS ("Malaquias", "Malaquias", 4, "Mal", HEBRAICO),
	MATEUS ("Mateus", "Mateus", 28, "Matt", GREGO),
	MARCOS ("Marcos", "Marcos", 16, "Mark", GREGO),
	LUCAS ("Lucas", "Lucas", 24, "Luke", GREGO),
	JOAO ("João", "Joao", 21, "John", GREGO),
	ATOS ("Atos", "Atos", 28, "Acts", GREGO),
	ROMANOS ("Romanos", "Romanos", 16, "Rom", GREGO),
	PRIMEIRA_CORÍNTIOS ("1 Coríntios", "1 Corintios", 16, "1Cor", GREGO),
	SEGUNDA_CORÍNTIOS ("2 Coríntios", "2 Corintios", 13, "2Cor", GREGO),
	GÁTALAS ("Gátalas", "Gatalas", 6, "Gal", GREGO),
	EFÉSIOS ("Efésios", "Efesios", 6, "Eph", GREGO),
	FILIPENSES ("Filipenses", "Filipenses", 4, "Phil", GREGO),
	COLOSSENSES ("Colossenses", "Colossenses", 4, "Col", GREGO),
	PRIMEIRA_TESSALONICENSES ("1 Tessalonicenses", "1 Tessalonicenses", 5, "1Thess", GREGO),
	SEGUNDA_TESSALONICENSES ("2 Tessalonicenses", "2 Tessalonicenses", 3, "2Thess", GREGO),
	PRIMEIRA_TIMOTEO ("1 Timóteo", "1 Timoteo", 6, "1Tim", GREGO),
	SEGUNDA_TIMOTEO ("2 Timóteo", "2 Timoteo", 4, "2Tim", GREGO),
	TITO ("Tito", "Tito", 3, "Titus", GREGO),
	FILEMOM ("Filemom", "Filemom", 1, "Phlm", GREGO),
	HEBREUS ("Hebreus", "Hebreus", 13, "Heb", GREGO),
	TIAGO ("Tiago", "Tiago", 5, "Jas", GREGO),
	PRIMEIRA_PEDRO ("1 Pedro", "1 Pedro", 5, "1Pet", GREGO),
	SEGUNDA_PEDRO ("2 Pedro", "2 Pedro", 3, "2Pet", GREGO),
	PRIMEIRA_JOAO ("1 João", "1 Joao", 5, "1John", GREGO),
	SEGUNDA_JOAO ("2 João", "2 Joao", 1, "2John", GREGO),
	TERCEIRA_JOAO ("3 João", "3 Joao", 1, "3John", GREGO),
	JUDAS ("Judas", "Judas", 1, "Jude", GREGO),
	APOCALIPSE ("Apocalipse", "Apocalipse", 22, "Rev", GREGO);
	
	private static Map<String, LivroEnum> map;
	
	static {
		map = new HashMap<>();
		
		LivroEnum[] values = LivroEnum.values();
		for (LivroEnum livroEnum : values) {
			map.put(livroEnum.getNomeSemAcentuacao(), livroEnum);
		}
	}
	
	public static LivroEnum fromNomeSemAcentuacao(String nomeSemAcentuacao) {
		return map.get(nomeSemAcentuacao);
	}
	
	@Getter
	private String nomeNoBD;
	
	@Getter
	private String nomeSemAcentuacao;

	@Getter
	private Integer qtdCapitulo;

	@Getter
	private String siglaEmIngles;

	@Getter
	private Idioma idioma;

	private LivroEnum(String nomeNoBD, String nomeSemAcentuacao, Integer qtdCapitulo, String siglaEmIngles, Idioma idioma) {
		this.nomeNoBD = nomeNoBD;
		this.nomeSemAcentuacao = nomeSemAcentuacao;
		this.qtdCapitulo = qtdCapitulo;
		this.siglaEmIngles = siglaEmIngles;
		this.idioma = idioma;
	}

	public boolean isStartingWithNumber() {
//		return this == PRIMEIRO_SAMUEL || this == SEGUNDO_SAMUEL || 
//		return this == LivroEnum.PRIMEIRO_REIS || this == LivroEnum.SEGUNDO_REIS ||
//			   this == PRIMEIRO_CRONICAS || this == SEGUNDO_CRONICAS;
		return this == PRIMEIRA_CORÍNTIOS || this == LivroEnum.SEGUNDA_CORÍNTIOS ||
			   this == PRIMEIRA_TESSALONICENSES || this == LivroEnum.PRIMEIRA_JOAO ||
			   this == PRIMEIRA_PEDRO || this == PRIMEIRA_TIMOTEO || 
			   this == SEGUNDA_JOAO || this == SEGUNDA_PEDRO || this == SEGUNDA_TESSALONICENSES ||
			   this == SEGUNDA_TIMOTEO || this == TERCEIRA_JOAO;
	}
	
	
}
