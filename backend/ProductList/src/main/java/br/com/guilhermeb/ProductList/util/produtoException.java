package br.com.guilhermeb.ProductList.util;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

/**
 * Classe para TRATAMENTO de ERROS DATABASE
 */
public class produtoException extends ResponseStatusException {

    public produtoException (String msg){
        super(HttpStatus.INTERNAL_SERVER_ERROR, msg);
    }

}
