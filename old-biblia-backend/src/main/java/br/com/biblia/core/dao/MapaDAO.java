package br.com.biblia.core.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.biblia.core.model.Mapa;

public interface MapaDAO extends JpaRepository<Mapa, Integer> {

}
