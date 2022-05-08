import React, { Component } from "react";
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import ApiService from "../service/ApiService";
import { DataGrid } from '@mui/x-data-grid';


const ColumnsProducts = [
    { field: 'idProduto', headerName: 'ID', width: 90 },
    { field: 'nome', editable: true, headerName: 'Nome', width: 150 },
    {
        field: 'valor', editable: true, type: 'number', sortable: 'false', headerName: 'Valor', width: 130
    },
    { field: 'tipoProduto', editable: true, headerName: 'Tipo', width: 130 }
]


class ListProductComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Products: [],
            IDs: []

        }
        this.reloadProductList = this.reloadProductList.bind(this);
    }

    componentDidMount() {
        this.reloadProductList();
    }

    //Listagem de Produtos na Tabela
    reloadProductList() {
        ApiService.listarProdutos()
            .then((res) => {
                this.setState({ Products: res.data })
            })
            .catch(err => {
                console.log('Não foi possível obter a lista de Produtos!', 'Erro!')
            });
    }

    //Função para setar ids no state
    setIDs(id) {
        this.setState({ IDs: id })
    }


    //Função para Remover Produto
    RemoveProduct() {
        for (let UniqueId of this.state.IDs) {
            ApiService.excluirprodutoById(UniqueId)
        }
        window.location.reload(true);
    }


    //Função de Ordenar Produtos Asc
    orderValuebyAsc() {
        let aux = [...this.state.Products]
        for (let i = 0; i < aux.length - 1; i++) {
            for (let j = 0; j < aux.length - i - 1; j++) {
                if (aux[j].valor > aux[j + 1].valor) {
                    let temp = aux[j];
                    aux[j] = aux[j + 1];
                    aux[j + 1] = temp;
                }
            }
        }
        this.setState({ Products: aux })
        console.log(aux)
    }

    //Função de Ordenar Produtos Desc
    orderValuebyDesc() {
        let aux = [...this.state.Products]
        for (let i = 0; i < aux.length - 1; i++) {
            for (let j = 0; j < aux.length - i - 1; j++) {
                if (aux[j].valor < aux[j + 1].valor) {
                    
                    let temp = aux[j];
                    aux[j] = aux[j + 1];
                    aux[j + 1] = temp;
                }
            }
        }
        this.setState({ Products: aux })
        console.log(aux)
    }

    render() {
        return (
            <Container maxWidth="sm">
                <h2 className="text-center">Lista de Produtos</h2>

                {/* Botões de Ordenação */}
                <Button variant="contained" onClick={(e) => {
                    this.orderValuebyAsc()
                }} color="primary" >Ordenar Asc</Button>


                <Button variant="contained" onClick={(e) => {
                    this.orderValuebyDesc()
                }} color="primary" sx={{ m: 2 }}>Ordenar Desc</Button>

                {/* Tabela de Dados */}
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={this.state.Products}
                        columns={ColumnsProducts}
                        getRowId={(row) => row.idProduto}
                        onSelectionModelChange={(ids) => {
                            const selectedIDs = new Set(ids);
                            this.setIDs(selectedIDs)
                        }}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        checkboxSelection
                    />
                </div>
                <br /> <br />

                {/* Botões Adicionar/Excluir */}
                <a href="/AddListProduct" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">Adicionar</Button>
                </a>


                <Button variant="contained" onClick={(e) => {
                    this.RemoveProduct()
                }} color="error" sx={{ m: 2 }}>Remover</Button>

                <br /> <br /><br /> <br />

                {/* Observação */}

                <p>Observação: Clique Duas Vezes sobre a Célula do Produto para Editar a mesma</p>
            </Container>
        );
    }
}

export default ListProductComponent;