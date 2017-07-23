package br.com.biblia.enums;

import static br.com.biblia.enums.Idioma.*;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;

public enum LivroEnum {
	
	GENESIS ("Gênesis", "Genesis", 50, "Gen", "Gn", HEBRAICO),
	EXODO ("Êxodo", "Exodo", 40, "Ex", "Ex", HEBRAICO),
	LEVITICO ("Levítico", "Levitico", 27, "Lev", "Lv", HEBRAICO),
	NUMEROS ("Números", "Numeros", 36, "Num", "Nm", HEBRAICO),
	DEUTERONOMIO ("Deuteronomio", "Deuteronomio", 34, "Deut", "Dt", HEBRAICO),
	JOSUE ("Josué", "Josue", 24, "Josh", "Js", HEBRAICO),
	JUIZES ("Juízes", "Juizes", 21, "Judg", "Jz", HEBRAICO),
	RUTE ("Rute", "Rute", 4, "Ruth", "Rt", HEBRAICO),
	PRIMEIRO_SAMUEL ("1 Samuel", "1 Samuel", 31, "1Sam", "1 Sm", HEBRAICO),
	SEGUNDO_SAMUEL ("2 Samuel", "2 Samuel", 24, "2Sam", "2 Sm", HEBRAICO),
	PRIMEIRO_REIS  ("1 Reis ", "1 Reis ", 22, "1Kgs", "1 Rs", HEBRAICO),
	SEGUNDO_REIS ("2 Reis", "2 Reis", 25, "2Kgs", "2 Rs", HEBRAICO),
	PRIMEIRO_CRONICAS ("1 Crônicas", "1 Cronicas", 29, "1Chr", "1 Cr", HEBRAICO),
	SEGUNDO_CRONICAS ("2 Crônicas", "2 Cronicas", 36, "2Chr", "2 Cr", HEBRAICO),
	ESDRAS ("Esdras", "Esdras", 10, "Ezra", "Ed", HEBRAICO),
	NEEMIAS ("Neemias", "Neemias", 13, "Neh", "Ne", HEBRAICO),
	ESTER ("Ester", "Ester", 10, "Est", "Et", HEBRAICO),
	JO ("Jó", "Jo", 42, "Job", "Jó", HEBRAICO),
	SALMOS ("Salmos", "Salmos", 150, "Ps", "Sl", HEBRAICO),
	PROVÉRBIOS ("Provérbios", "Proverbios", 31, "Prov", "Pv", HEBRAICO),
	ECLESIASTES ("Eclesiastes", "Eclesiastes", 12, "Eccl", "Ec", HEBRAICO),
	CANTARES ("Cantares", "Cantares", 8, "Song", "Ct", HEBRAICO),
	ISAÍAS ("Isaías", "Isaias", 66, "Isa", "Is", HEBRAICO),
	JEREMIAS ("Jeremias", "Jeremias", 52, "Jer", "Jr", HEBRAICO),
	LAMENTACOES ("Lamentações", "Lamentacoes", 5, "Lam", "Lm", HEBRAICO),
	EZEQUIEL ("Ezequiel", "Ezequiel", 48, "Ezek", "Ez", HEBRAICO),
	DANIEL ("Daniel", "Daniel", 12, "Dan", "Dn", HEBRAICO),
	OSEIAS ("Oseias", "Oseias", 14, "Hos", "Os", HEBRAICO),
	JOEL ("Joel", "Joel", 3, "Joel", "Jl", HEBRAICO),
	AMOS ("Amós", "Amos", 9, "Amos", "Am", HEBRAICO),
	OBADIAS ("Obadias", "Obadias", 1, "Obad", "Ob", HEBRAICO),
	JONAS ("Jonas", "Jonas", 4, "Jonah", "Jn", HEBRAICO),
	MIQUEIAS ("Miqueias", "Miqueias", 7, "Mic", "Mq", HEBRAICO),
	NAUM ("Naum", "Naum", 3, "Nah", "Na", HEBRAICO),
	HABACUQUE ("Habacuque", "Habacuque", 3, "Hab", "Hc", HEBRAICO),
	SOFONIAS ("Sofonias", "Sofonias", 3, "Zeph", "Sf", HEBRAICO),
	AGEU ("Ageu", "Ageu", 2, "Hag", "Ag", HEBRAICO),
	ZACARIAS ("Zacarias", "Zacarias", 14, "Zech", "Zc", HEBRAICO),
	MALAQUIAS ("Malaquias", "Malaquias", 4, "Mal", "Ml", HEBRAICO),
	MATEUS ("Mateus", "Mateus", 28, "Matt", "Mt", GREGO),
	MARCOS ("Marcos", "Marcos", 16, "Mark", "Mc", GREGO),
	LUCAS ("Lucas", "Lucas", 24, "Luke", "Lc", GREGO),
	JOAO ("João", "Joao", 21, "John", "Jo", GREGO),
	ATOS ("Atos", "Atos", 28, "Acts", "At", GREGO),
	ROMANOS ("Romanos", "Romanos", 16, "Rom", "Rm", GREGO),
	PRIMEIRA_CORINTIOS ("1 Coríntios", "1 Corintios", 16, "1Cor", "1 Co", GREGO),
	SEGUNDA_CORINTIOS ("2 Coríntios", "2 Corintios", 13, "2Cor", "2 Co", GREGO),
	GALATAS ("Gálatas", "Galatas", 6, "Gal", "Gl", GREGO),
	EFÉSIOS ("Efésios", "Efesios", 6, "Eph", "Ef", GREGO),
	FILIPENSES ("Filipenses", "Filipenses", 4, "Phil", "Fp", GREGO),
	COLOSSENSES ("Colossenses", "Colossenses", 4, "Col", "Cl", GREGO),
	PRIMEIRA_TESSALONICENSES ("1 Tessalonicenses", "1 Tessalonicenses", 5, "1Thess", "1 Ts", GREGO),
	SEGUNDA_TESSALONICENSES ("2 Tessalonicenses", "2 Tessalonicenses", 3, "2Thess", "2 Ts", GREGO),
	PRIMEIRA_TIMOTEO ("1 Timóteo", "1 Timoteo", 6, "1Tim", "1 Tm", GREGO),
	SEGUNDA_TIMOTEO ("2 Timóteo", "2 Timoteo", 4, "2Tim", "2 Tm", GREGO),
	TITO ("Tito", "Tito", 3, "Titus", "Tt", GREGO),
	FILEMOM ("Filemom", "Filemom", 1, "Phlm", "Fl", GREGO),
	HEBREUS ("Hebreus", "Hebreus", 13, "Heb", "Hb", GREGO),
	TIAGO ("Tiago", "Tiago", 5, "Jas", "Tg", GREGO),
	PRIMEIRA_PEDRO ("1 Pedro", "1 Pedro", 5, "1Pet", "1 Pe", GREGO),
	SEGUNDA_PEDRO ("2 Pedro", "2 Pedro", 3, "2Pet", "2 Pe", GREGO),
	PRIMEIRA_JOAO ("1 João", "1 Joao", 5, "1John", "1 Jo", GREGO),
	SEGUNDA_JOAO ("2 João", "2 Joao", 1, "2John", "2 Jo", GREGO),
	TERCEIRA_JOAO ("3 João", "3 Joao", 1, "3John", "3 Jo", GREGO),
	JUDAS ("Judas", "Judas", 1, "Jude", "Jd", GREGO),
	APOCALIPSE ("Apocalipse", "Apocalipse", 22, "Rev", "Ap", GREGO);
	
	private static Map<String, LivroEnum> map;
	private static Map<String, LivroEnum> mapNome;
	
	static {
		map = new HashMap<>();
		
		LivroEnum[] values = LivroEnum.values();
		for (LivroEnum livroEnum : values) {
			map.put(livroEnum.getNomeSemAcentuacao(), livroEnum);
		}
	}
	
	static {
		mapNome = new HashMap<>();
		
		LivroEnum[] values = LivroEnum.values();
		for (LivroEnum livroEnum : values) {
			mapNome.put(livroEnum.getNomeNoBD(), livroEnum);
		}
	}
	
	public static LivroEnum fromNomeSemAcentuacao(String nomeSemAcentuacao) {
		return map.get(nomeSemAcentuacao);
	}
	
	public static LivroEnum fromNomeBD(String nomeBD) {
		return mapNome.get(nomeBD);
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
	private String siglaEmPortugues;

	@Getter
	private Idioma idioma;

	private LivroEnum(String nomeNoBD, String nomeSemAcentuacao, Integer qtdCapitulo, String siglaEmIngles, String siglaEmPortugues, Idioma idioma) {
		this.nomeNoBD = nomeNoBD;
		this.nomeSemAcentuacao = nomeSemAcentuacao;
		this.qtdCapitulo = qtdCapitulo;
		this.siglaEmIngles = siglaEmIngles;
		this.siglaEmPortugues = siglaEmPortugues;
		this.idioma = idioma;
	}

	public boolean isStartingWithNumber() {
//		return this == PRIMEIRO_SAMUEL || this == SEGUNDO_SAMUEL || 
//			   this == LivroEnum.PRIMEIRO_REIS || this == LivroEnum.SEGUNDO_REIS ||
//			   this == PRIMEIRO_CRONICAS || this == SEGUNDO_CRONICAS;
		return this == PRIMEIRA_CORINTIOS || this == LivroEnum.SEGUNDA_CORINTIOS ||
			   this == PRIMEIRA_TESSALONICENSES || this == LivroEnum.PRIMEIRA_JOAO ||
			   this == PRIMEIRA_PEDRO || this == PRIMEIRA_TIMOTEO || 
			   this == SEGUNDA_JOAO || this == SEGUNDA_PEDRO || this == SEGUNDA_TESSALONICENSES ||
			   this == SEGUNDA_TIMOTEO || this == TERCEIRA_JOAO;
	}
	
	
}
