package br.com.guilhermeb.ProductList.service;
import java.util.List;

import br.com.guilhermeb.ProductList.model.Produto;
public interface produtoService {
	
	public Produto incluir(Produto produto);
	public List<Produto> listar();
	public Produto consultar(Integer id);
	public void alterar(Produto produto);
	public void excluir(Integer id);

}
