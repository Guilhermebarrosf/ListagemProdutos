import axios from 'axios';


const PRODUCT_API_BASE_URL = 'http://localhost:9090';
class ApiService {

/**
* Busca os produtos
* @returns{Promise<AxiosResponse<any>>}
*/

listarProdutos() {
return axios.get(PRODUCT_API_BASE_URL + '/listar-produtos');
}
/**
* Salva um produtos
* @param produto
* @returns{Promise<AxiosResponse<any>>}
*/
salvarproduto(produto) {
return axios.post(PRODUCT_API_BASE_URL + '/incluir-produto', produto);
}
/**
* Exclui um produto por Id
* @param produtoId
* @returns{Promise<AxiosResponse<any>>}
*/
excluirprodutoById(produtoId) {
return axios.delete(PRODUCT_API_BASE_URL + '/excluir-produto/' + produtoId);
}
}
export default new ApiService()