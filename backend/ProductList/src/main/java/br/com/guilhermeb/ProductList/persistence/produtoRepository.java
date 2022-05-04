package br.com.guilhermeb.ProductList.persistence;

import org.springframework.data.repository.CrudRepository;
import br.com.guilhermeb.ProductList.model.Produto;

/**
 * Interface que estende todas
 * operações básicas do CRUD
 * do Spring Data
 */

public interface produtoRepository extends CrudRepository<Produto, Integer> {

}
