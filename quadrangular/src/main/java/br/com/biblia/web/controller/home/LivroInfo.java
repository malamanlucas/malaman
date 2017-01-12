package br.com.biblia.web.controller.home;

import br.com.biblia.core.enums.Idioma;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder
@NoArgsConstructor(force=true)
@AllArgsConstructor
public class LivroInfo {

	private String nome = "BLABLA";
	private Integer livroId;
	private Idioma idioma;
	private Boolean isAdmin;
	
}
