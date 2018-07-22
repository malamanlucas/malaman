package br.com.exames.apps.exame;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import br.com.exames.dao.ExameDAO;
import br.com.exames.model.Clinica;
import br.com.exames.model.ClinicaKey;
import br.com.exames.model.Exame;

@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Service
public class ExameFacade implements ExameApp {

	@Autowired
	private ExameDAO dao;
	
	@Override
	public Exame save(Exame entity) {
		if (entity.getClinicas() == null) {
			entity.setClinicas(Lists.newArrayList());
		}
		if ( entity.getId() == null ) {
			entity.setId( dao.retrieveNextId() );
		}
		entity.getClinicas().forEach(c -> c.getKey().setExameId(entity.getId()));
		dao.save( entity );
		return entity;
	}

	@Override
	public List<Exame> findAll() {
		return dao.findAll();
	}

	@Override
	public void delete(Integer id) {
		dao.delete(id);
	}

	@Override
	public Exame getExame(Integer id) {
		return dao.findOne(id);
	}

	@Override
	public void reset() {
		this.deleteAll();
		List<Exame> exames = Lists.newArrayList();
		exames.add(getExame("Chegar com 30 minutos de antecedência do horário agendado. É obrigatório trazer pedido médico e documento de identificação . Trazer exames anteriores da região a ser examinada.", "Ressonância Magnética"));
		exames.add(getExame("Cliente menor de 18 anos (17 anos, 11 meses e 29 dias) é obrigatório a presença de um responsável legal para a realização do exame.", "Raio X Digital"));
		exames.add(getExame("Exame não realizado em gestantes. Mulheres com atraso menstrual OU incerteza em relação a gravidez: NÃO realizar o exame. Confirmar a ausência de gravidez (esperar a menstruação ou procurar o seu médico). Mulheres com gravidez conhecida: NÃO realizar o exame se não tiver autorização do médico solicitante \"por escrito\".", "Ultrassonografia Doppler Vascular"));
		
		exames.forEach(t -> this.save(t));
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

	@Override
	public void deleteAll() {
		this.dao.deleteAll();
	}

}
