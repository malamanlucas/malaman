package br.com.exames.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.exames.model.Clinica;
import br.com.exames.model.ClinicaKey;

public interface ClinicaDAO extends JpaRepository<Clinica, ClinicaKey> {

}
