package br.com.biblia.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.biblia.model.Mapa;

public interface MapaDAO extends JpaRepository<Mapa, Integer> {

}
