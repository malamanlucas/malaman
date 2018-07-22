package br.com.exames;

import java.util.List;
import java.util.Locale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.google.common.collect.Lists;

import br.com.exames.apps.exame.ExameApp;
import br.com.exames.config.AutowireHelper;
import br.com.exames.model.Clinica;
import br.com.exames.model.ClinicaKey;
import br.com.exames.model.Exame;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		Locale.setDefault(new Locale("pt", "BR"));
		ConfigurableApplicationContext ctx = SpringApplication.run(Application.class, args);
		
		ExameApp app = ctx.getBean(ExameApp.class);
		app.reset();
//		List<Exame> exames = Lists.newArrayList();
//		exames.add(getExame("Chegar com 30 minutos de antecedência do horário agendado. É obrigatório trazer pedido médico e documento de identificação . Trazer exames anteriores da região a ser examinada.", "Ressonância Magnética"));
//		exames.add(getExame("Cliente menor de 18 anos (17 anos, 11 meses e 29 dias) é obrigatório a presença de um responsável legal para a realização do exame.", "Raio X Digital"));
//		exames.add(getExame("Exame não realizado em gestantes. Mulheres com atraso menstrual OU incerteza em relação a gravidez: NÃO realizar o exame. Confirmar a ausência de gravidez (esperar a menstruação ou procurar o seu médico). Mulheres com gravidez conhecida: NÃO realizar o exame se não tiver autorização do médico solicitante \"por escrito\".", "Ultrassonografia Doppler Vascular"));
//		
//		exames.forEach(t -> app.save(t));
	}
	

	private static Exame getExame(String preparo, String nome) {
		List<Clinica> clinicas = Lists.newArrayList();
		clinicas.add(buildClinica("Av Francisco Glicério, 1464, Centro - Campinas, SP", "Joseph'Clinic", 1));
		clinicas.add(buildClinica("R Duque de Caxias, 802, Centro - Campinas, SP", "Mary'Clinic", 2));
		clinicas.add(buildClinica("R Emília Paiva Meira, 102, Cambuí - Campinas, SP", "John'Clinic", 3));
		clinicas.add(buildClinica("Av Francisco Glicério, 1424 - - 09 sala 901, Centro - Campinas, SP", "Matthew'Clinic", 4));
		return Exame.builder()
				.preparo(preparo)
				.nome(nome)
				.clinicas(clinicas)
				.build();
	}

	private static Clinica buildClinica(String endereco, String nome, Integer id) {
		return Clinica.builder()
				.endereco(endereco)
				.nome(nome)
				.key(ClinicaKey.builder()
						.id(id)
						.build())
				.build();
	}

	@Bean
	public AutowireHelper autowireHelper(){
	    return AutowireHelper.getInstance();
	}
}
