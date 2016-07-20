package br.com.violinhalanches.dao.jpa.item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.violinhalanches.model.entities.manager.Item;

@Repository
@Transactional
public interface ItemDAOJpa extends JpaRepository<Item, Integer>{

}
