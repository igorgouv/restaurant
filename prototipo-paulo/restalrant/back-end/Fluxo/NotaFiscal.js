import {Pedidos} from "./Pedidos.js";
class NotaFiscal{
    static mapPedidos = () => {
        Pedidos.sort(function(a, b){
            return a.preco - b.preco
        })
        const conteudoDoCarrinho = document.getElementById("nota");
        conteudoDoCarrinho.innerHTML = "";
        Pedidos.map((val) =>{
            if(val.quantidade > 0){
                conteudoDoCarrinho.innerHTML+=`
                <p>`+val.nome+` | quantidade: `+val.quantidade+` | tipo: `+val.tipo+`| preco:`+val.preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
                <hr>
                `;
            }
        })
    }
    
    resetCardapio = () => {
        
    }

}
