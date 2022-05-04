package br.com.guilhermeb.ProductList.service;


import br.com.guilhermeb.ProductList.model.Produto;
import br.com.guilhermeb.ProductList.persistence.produtoRepository;
import br.com.guilhermeb.ProductList.util.produtoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;

@Component
@Transactional
public class produtoServiceImpl implements produtoService{
    private final produtoRepository repository;

    @Autowired
    public produtoServiceImpl(produtoRepository repository) {
        this.repository = repository;
    }

    /**
     * TRATAMENTO DE INFORMAÇÕES PARA METODO DE INCLUSÃO
     * @param produto contendo todas as informações coletadas nos campos do usuario
     */
    @Override
    public Produto incluir(Produto produto) {
        try {
            repository.save(produto);
            return produto;
        }
        catch (Exception e){
            throw new produtoException("Não foi possível incluir o produto! :->" + e.getMessage());
        }
    }

    /**
     * TRATAMENTO DE INFORMAÇÕES PARA METODO DE LISTAGEM DE PRODUTOS
     *
     */
    @Override
    public List<Produto> listar() {
        try {
            return (List<Produto>) this.repository.findAll();
        }
        catch (Exception e){
            throw new produtoException("Não foi possível listar os produtos! :-> " + e.getMessage() );
        }
    }


    /**
     * TRATAMENTO DE INFORMAÇÕES PARA MÉTODO DE CONSULTA DE PRODUTOS
     * @param id informando qual produto deve ser listado
     */
    @Override
    public Produto consultar(Integer id) {
        try {
            return this.repository.findById(id).get();
        }
        catch (Exception e){
            throw new produtoException("Não foi possível consultar o produto: "+id+ " ! :-> " + e.getMessage());
        }
    }

    /**
     * TRATAMENTO DE INFORMAÇÕES PARA METODO QUE ALTERA INFORMAÇÕES DO PRODUTO
     * @param produto para aplicar as alterações necessárias
     */
    @Override
    public void alterar(Produto produto) {
        try {
            repository.save(produto);
        }
        catch (Exception e){
            throw new produtoException("Não foi possível alterar o produto: " + produto.getIdProduto() + "! :->" + e.getMessage());
        }
    }

    /**
     * TRATAMENTO DE INFORMAÇÕES PARA METODO DE EXCLUSÃO
     * @param id informando que produto deve ser deletado
     */
    @Override
    public void excluir(Integer id) {
        try {
            repository.deleteById(id);
        }
        catch (Exception e){
            throw new produtoException("Não foi possível excluir o produto: "+id+"!");
        }
    }

}

