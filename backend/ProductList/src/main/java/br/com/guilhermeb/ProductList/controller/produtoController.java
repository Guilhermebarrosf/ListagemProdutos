package br.com.guilhermeb.ProductList.controller;
import br.com.guilhermeb.ProductList.model.*;
import br.com.guilhermeb.ProductList.service.*;
import br.com.guilhermeb.ProductList.util.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin(origins = "", maxAge = 3600)
@RequestMapping(value = "/")
public class produtoController {

    private produtoService ProdutoService;

    /**
     * Injeção de dependencia do Spring
     * @param produtoService
     */
    @Autowired
    public void setMedicoService(produtoService ProdutoService) {
        this.ProdutoService = ProdutoService;
    }

    /**
     * Metodo para listagem de produtos
     * @return Lista de Produtos
     */
    @GetMapping(value = "/listar-produtos")
    public List<Produto> listar(){
        List <Produto> lista = ProdutoService.listar();
        return lista;
    }

    /**
     * METODO PARA CONSULTAR PRODUTO
     * @param id
     * @return Produto Consultado
     */
    @GetMapping(value = "consultar-produto/{id}")
    public Produto consultar(@PathVariable Integer id){
        return ProdutoService.consultar(id);
    }


    /**
     * Metodo para salvar Produto no banco de dados
     * @param TODAS as informações do veiculo recebidas por parametro
     * @return Produto
     */
    @PostMapping(value= "incluir-produto")
    public Produto salvar(@RequestBody Produto produto) {
        try{
            if (produto.getIdProduto() == null){
                produto = ProdutoService.incluir(produto);
            }
            else{
                ProdutoService.alterar(produto);
            }
            return produto;
        }
        catch (produtoException ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, ex.getReason());
        }
    }


    /**
     * Metodo que exclui produto pelo id
     * @param id do produto a ser excluido
     */
    @DeleteMapping(value = "excluir-produto/{id}")
    public void excluir(@PathVariable Integer id){
        ProdutoService.excluir(id);
    }

}

