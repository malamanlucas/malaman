package br.com.biblia.core.apps.importador;

import java.io.IOException;
import java.net.URI;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.stereotype.Service;

import br.com.biblia.core.enums.LivroEnum;
import lombok.AllArgsConstructor;
import lombok.Data;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class ImportarBibliaFacade implements ImportarBiblia {

//	@Autowired
//	private JdbcTemplate jdbcTemplate;
	
	@Override
	public void importar(String livro, String abbreviation, Integer qtdCapitulos) {
//		System.out.println(jdbcTemplate);
//		t(livro, abbreviation, qtdCapitulos);
	}

	static JdbcTemplate jdbcTemplate;
	
		public static void main(String[] args) {
			LivroEnum[] values = LivroEnum.values();
			DataSource dataSource = DataSourceBuilder
					.create()
					.password("postgres")
					.username("postgres")
					.driverClassName("org.postgresql.Driver")
					.url("jdbc:postgresql://localhost:5432/postgres")
					.build();
			jdbcTemplate = new JdbcTemplate(dataSource);
				
//			LivroEnum[] values = LivroEnum.values();
			
//			for (LivroEnum enum1 : values) {
//				if (enum1 == LivroEnum.MATEUS)
//					continue;
//				System.out.println("Inserindo: "+enum1.name());
				internalImport(LivroEnum.GALATAS);
//			}
			
		}
	
	private static void internalImport(LivroEnum livro) {
		
		Integer livroId = jdbcTemplate.queryForObject( "SELECT id FROM livro WHERE nome=?", Integer.class, livro.getNomeNoBD());
		
		for (int capituloId = 1; capituloId <= livro.getQtdCapitulo(); capituloId++) {
			
			Document doc = null;
			try {
				String url = null;
				if ( livro.isStartingWithNumber()) {
					url = String.format("https://www.biblegateway.com/passage/?search=%s+%s&version=ARC&interface=print", livro.getNomeSemAcentuacao().replace(" ", "%20"), capituloId);
				} else if ( livro == LivroEnum.LAMENTACOES || livro == LivroEnum.LEVITICO ) {
					url = String.format("https://www.biblegateway.com/passage/?search=%s+%s&version=ARC&interface=print", livro.getNomeNoBD(), capituloId);
				} else {
					url = String.format("https://www.biblegateway.com/passage/?search=%s+%s&version=ARC&interface=print", livro.getNomeSemAcentuacao(), capituloId);
				}
				doc = Jsoup.parse(URI.create(url).toURL(), 9000);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			
			Elements elements = doc.getElementsByAttributeValueContaining("class", "text "+livro.getSiglaEmIngles());
			
			int numeroVersiculo = 0;
			List<VersData> versiculos = new ArrayList<>();
			StringBuffer titulo = new StringBuffer();
			for (Element e : elements) {
				String nodeName = e.parent().nodeName();
				if (numeroVersiculo == 0 && !nodeName.equals("p")) { // titulo capitulo
					titulo.append(e.text());
					jdbcTemplate.update( "UPDATE capitulo SET titulo=? WHERE id=? AND livro_id=?",titulo.toString(), capituloId, livroId);
					numeroVersiculo++;
				} else if (numeroVersiculo <= 1 && !nodeName.equals("p")) {
					titulo.append( " " + e.text());
					jdbcTemplate.update( "UPDATE capitulo SET titulo=? WHERE id=? AND livro_id=?",titulo.toString(), capituloId, livroId);
				} else { // versiculo
					if (nodeName.equals("p")) {
						if (numeroVersiculo == 0) {
							numeroVersiculo++;
						}
						String versiculo = e.text().substring(2);
						versiculos.add( new VersData(versiculo, numeroVersiculo, capituloId, livroId) );
						numeroVersiculo++;
					}
				}
			}
			
//			String sqlUpdate = "UPDATE versiculo SET limpo=? WHERE numero=? AND capitulo_id=? AND livro_id=?;";
//			jdbcTemplate.batchUpdate(sqlUpdate, new BatchPreparedStatementSetter() {
//				public void setValues(PreparedStatement ps, int i) throws SQLException {
//					VersData e = versiculos.get(i);
//					ps.setString(1, e.getText());
//					ps.setInt(2, e.getNumeroVersiculo());
//					ps.setInt(3, e.getCapituloId());
//					ps.setInt(4, e.getLivroId());
//				}
//				public int getBatchSize() {
//					return versiculos.size();
//				}
//			});
			
			String sqlInsert = "INSERT INTO versiculo(id,capitulo_id,livro_Id,texto,idioma,formatado,numero,limpo) VALUES(?,?,?,?,?,?,?,?)";
			for (VersData e : versiculos) {
				try {
					jdbcTemplate.update(sqlInsert, new PreparedStatementSetter() {
						@Override
						public void setValues(PreparedStatement ps) throws SQLException {
							String sqlMax = "SELECT COALESCE(MAX(numero),0)+1 FROM versiculo WHERE livro_id = ? AND capitulo_id = ?";
							Integer nextVal = jdbcTemplate.queryForObject(sqlMax, Integer.class, e.getLivroId(), e.getCapituloId());
							ps.setInt(1, nextVal);
							ps.setInt(2, e.getCapituloId());
							ps.setInt(3, e.getLivroId());
							ps.setString(4, e.getText());
							ps.setString(5, livro.getIdioma().name());
							ps.setString(6, e.getText());
							ps.setInt(7, e.getNumeroVersiculo());
							ps.setString(8, e.getText());
							
						}
					});
				} catch (Exception e1){}
			}
			
		}
	}
	
	@Data
	@AllArgsConstructor
	static class VersData {
		private String text;
		private Integer numeroVersiculo;
		private Integer capituloId;
		private Integer livroId;
	}
	
}
