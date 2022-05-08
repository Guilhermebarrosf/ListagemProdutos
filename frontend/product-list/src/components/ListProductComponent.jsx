import React, { Component } from "react";
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import ApiService from "../service/ApiService";
import { DataGrid } from '@mui/x-data-grid';

const ColumnsProducts = [
    { field: 'idProduto', headerName: 'ID', width: 90 },
    { field: 'nome', editable: true, headerName: 'Nome', width: 150 },
    { field: 'valor', editable: true, type: 'number' , headerName: 'Valor', width: 130 },
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


    reloadProductList() {
        ApiService.listarProdutos()
            .then((res) => {
                this.setState({ Products: res.data })
            })
            .catch(err => {
                console.log('Não foi possível obter a lista de Produtos!', 'Erro!')
            });
    }
    setIDs(id){
        this.setState({IDs: id})
    }

    RemoveProduct() {
        for (let UniqueId of this.state.IDs) {
            ApiService.excluirprodutoById(UniqueId)
        }
        window.location.reload(true);
    }

    render() {
        return (
            <Container maxWidth="sm">
                <h2 className="text-center">Lista de Produtos</h2>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={this.state.Products}
                        columns={ColumnsProducts}
                        getRowId={(row) => row.idProduto}
                        onSelectionModelChange={(ids) => {
                            const selectedIDs = new Set(ids);
                            this.setIDs(selectedIDs)
                        }}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
                <br /> <br />
                <a href="/AddListProduct" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ m: 2 }} color="primary">Adicionar</Button>
                </a>
                <Button variant="contained" onClick={(e) => {
                    this.RemoveProduct()
                }} color="error">Remover</Button>
                <br /> <br /><br /> <br />
                <p>Observação: Para editar um produto, clique duas vezes na celula desejável</p>

        
            </Container>
        );
    }
}

export default ListProductComponent;