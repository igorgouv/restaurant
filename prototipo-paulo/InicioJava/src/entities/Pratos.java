package entities;

import java.util.List;

public class Pratos {
    protected Integer id;
    protected String nome;
    protected Double preco;
    protected Integer quantidade = 1;

    public Pratos(String nome,Double preco, Integer quantidade) {
        this.nome = nome;
        this.preco= preco;
        this.quantidade = quantidade;
    }

    public Pratos(Integer id, String nome, Double preco, Integer quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public Pratos(Integer id, String nome, Double preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {return nome;}
    public void setNome(String nome) {this.nome = nome;}
    public Double getPreco() {return preco;}
    public void setPreco(Double preco) {this.preco = preco;}
    public Integer getQuantidade() {return quantidade;}
    public void setQuantidade(Integer quantidade) {this.quantidade = quantidade;}

    public Integer maiscomida(){
        return quantidade+ 1;
    }

    public Double total(){
        return preco*quantidade;
    }

    public String toStringCarrinho(){
        return nome+ ", " +
                "R$"+
                preco +", Qty "+
                quantidade +
                "\n";
    }

    public String toString(){
        return id +", "+
                nome+ ", " +
                "R$"+
                preco +
                "\n";
    }


}
