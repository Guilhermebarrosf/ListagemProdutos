import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import ApiService from '../service/ApiService';


class AddListProductComponent extends Component {
    //definicao das props e state
    constructor(props) {
        super(props);
        this.state = {
            idProduct: '',
            nameProduct: '',
            typeProduct: '',
            valueProduct: '',
            nameProductVazio: false,
            typeProductVazio: false,
            valueProductVazio: false
        }
        this.saveProduct = this.saveProduct.bind(this);
    }
    //salva o produto no backend
    saveProduct = (e) => {
        //TODO: obtem os dados do state e envia para o backend salvar os dados

        this.setState({ nameProductVazio: (this.state.nameProduct === '') });
        this.setState({ typeProductVazio: (this.state.typeProduct === '') });
        this.setState({ valueProductVazio: (this.state.valueProduct === '') });


        if (this.state.nameProductVazio === this.state.typeProductVazio === this.state.valueProductVazio === false) {
            e.preventDefault();
            let produto = { nome: this.state.nameProduct, tipoProduto: this.state.typeProduct, valor: this.state.valueProduct };
            ApiService.salvarproduto(produto)
                .then(res => {
                    alert('Produto salvo com sucesso!');
                    window.location.reload(true);
                })
                .catch(err => {
                    alert('Não foi possível salvar o Produto!');
                });
        }


    }
    //modifica o valor do state do campo alterado
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    //renderiza o componente
    render() {
        return (
            <Container maxWidth="sm">
                <div>
                    <h2 className="text-center">Cadastro de Produto</h2>
                    <form>
                        <Grid container spacing={2}>

                            {/*Tipo do Produto */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    autoFocus
                                    fullWidth
                                    id="typeProduct" name="typeProduct" label="Tipo do Produto" value={this.state.typeProduct} onChange={this.onChange}
                                    helperText={this.state.typeProductVazio ? "Preencha o campo" : null} error={this.state.typeProductVazio}>
                                </TextField>
                            </Grid>

                            {/* Nome do Produto */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    autoFocus
                                    fullWidth
                                    id="nameProduct" name="nameProduct" label="Nome do Produto" value={this.state.nameProduct} onChange={this.onChange}
                                    helperText={this.state.nameProductVazio ? "Preencha o campo" : null} error={this.state.nameProductVazio}>
                                </TextField>
                            </Grid>

                            {/* Valor do Produto */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    type={"number"}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    }}
                                    id="valueProduct" name="valueProduct" label="Valor do Produto" defaultValue={this.state.valueProduct} onChange={this.onChange}
                                    helperText={this.state.valueProductVazio ? "Preencha o campo" : null} error={this.state.valueProductVazio}>
                                </TextField>
                            </Grid>
                        </Grid>
                        <br />
                        <Button variant="contained" color="primary" disableElevation onClick={(e) => {
                            this.saveProduct(e)
                        }}>
                            Adicionar
                        </Button>
                        <a href='/' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ m: 2 }} color="primary" disableElevation>
                                Voltar
                            </Button>
                        </a>

                    </form>
                </div>
            </Container >
        );
    }
}
export default AddListProductComponent
