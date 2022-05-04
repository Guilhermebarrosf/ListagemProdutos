package br.com.guilhermeb.ProductList.model;
import javax.persistence.*;

@Entity
@Table(name = "produtos")
public class Produto {

    /**
     * ATRIBUTOS PRIVADOS
     */
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idProduto;
    
    @Column(name = "nome")
    private String Nome;
    
    @Column(name = "TipoProduto")
    private String TipoProduto;
    
    @Column(name = "valor")
    private Double Valor;
    
	public Integer getIdProduto() {
		return idProduto;
	}
	public void setIdProduto(Integer idProduto) {
		this.idProduto = idProduto;
	}
	public String getNome() {
		return Nome;
	}
	public void setNome(String nome) {
		Nome = nome;
	}
	public String getTipoProduto() {
		return TipoProduto;
	}
	public void setTipoProduto(String tipoProduto) {
		TipoProduto = tipoProduto;
	}
	public Double getValor() {
		return Valor;
	}
	public void setValor(Double valor) {
		Valor = valor;
	}
    
}
