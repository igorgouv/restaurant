import{Cardapio} from"./back-end/Fluxo/Cardapio.js"
import { Cliente } from "./back-end/Fluxo/Cliente.js";
import{Pedidos} from "./back-end/Fluxo/Pedidos.js"
// import {notaFiscal} from "./back-end/Fluxo/NotaFiscal.js"


const cliente = new Pedidos("igor", "gouveia@email", "b00000");

function menuDaLoja (){
    var conteuDoPrato = document.getElementById("pratos");
    Cardapio.Massas.map((val) =>{
        conteuDoPrato.innerHTML+=`
        <div class="col">
            <div class="card h-100">
                <img src="`+val.img+`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+val.nome+`</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <br>
                    <div class="botao-card">
                    <a class="aDoCarrinho btn btn-primary" key="`+val.id+`" href="#"><b>Adicionar</b></a> <br>
                    <a class="retirarDoCarrinho btn btn-primary " key="`+val.id+`" href="#"><b>Retirar</b></a>
                    </div>
                    <p>
                    <h4> preco:`+val.preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</h3>
                </div>
            </div>
        </div>`;
    })
}
function menuDaLojaPizzas (){
    var conteudoDasPromocoes = document.getElementById("Promocoes");
    Cardapio.pizzas.map((a) =>{
        conteudoDasPromocoes.innerHTML+=`
        <div class="col">
            <div class="card h-100">
                <img src="`+a.img+`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+a.nome+`</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <br>
                    <div class="botao-card">
                    <a class="aDoCarrinho btn btn-primary" key="`+a.id+`" href="#"><b>Adicionar</b></a> <br>
                    <a class="retirarDoCarrinho btn btn-primary " key="`+a.id+`" href="#"><b>Retirar</b></a>
                    </div>
                    <h4> preco:`+a.preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</h3>
                    </div>
            </div>
        </div>`;
    })
}
function menuDaLojaBebidas (){
    var conteudoDasbebidas = document.getElementById("bebidas");
    Cardapio.bebidas.map((bebidas) =>{
        conteudoDasbebidas.innerHTML+=`
        <div class="col">
        <div class="card h-100">
        <img src="`+bebidas.img+`" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">`+bebidas.nome+`</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <br>
        <div class="botao-card">
        <a class="aDoCarrinho btn btn-primary" key="`+bebidas.id+`" href="#"><b>Adicionar</b></a> <br>
        <a class="retirarDoCarrinho btn btn-primary " key="`+bebidas.id+`" href="#"><b>Retirar</b></a>
        </div>
        <h4> preco:`+bebidas.preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</h3>
        </div>
        </div>
        </div>`;
    })
}
menuDaLoja();
menuDaLojaPizzas();
menuDaLojaBebidas();

function atualizarCarrinho (){
    var conteudoDoCarrinho = document.getElementById("carrinhoDeCompras");
    conteudoDoCarrinho.innerHTML = "";
    cliente.readPedidos().map((val) =>{
        if(val.quantidade > 0){
            let x = val.preco*val.quantidade;
            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.item+` | quantidade: `+val.quantidade+` | tipo: `+val.tipo+`| preco:`+val.valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
            <hr>
            `;
        }
    })
}
var total = 0;
function efetuandoPagamento (){
    var efetuandoPagamento = document.getElementById("efetuarPagamento");
    efetuandoPagamento.innerHTML = `
    <form>
    <div class="row mb-3">
    <label class="col-sm-2 col-form-label">Nome</label>
    <div class="col-sm-8">
    <input type="text" class="form-control" id="inputNome"  placeholder="Nome">
    </div>
    </div>
    <div class="row mb-3">
    <label class="col-sm-3 col-form-label">CPF(opcional)</label>
    <div class="col-sm-7">
    <input type="number" class="form-control" id="inputCPF" placeholder="Apenas numeros">
    </div>
    </div>
    <div class="row">
    <label class="col-sm-5 col-form-label">forma de pagamento</label>
    <div class="col-sm-5">
    <select class="form-select" id="autoSizingSelect">
                          <option selected disabled>selecione</option>
                          <option value="1">A vista</option>
                          <option value="2">Debito</option>
                          <option value="3">Credito</option>
                          <option value="4">pix</option>
                          </select>
                  </div>
            </div>
            <p>total:`+total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+` </p>
    </form>
    `;
}

// function notaFiscal (){
//     var conteudoDoCarrinho = document.getElementById("nota");
//     conteudoDoCarrinho.innerHTML = "";
//     Itens.map((val) =>{
//         if(val.quantidade > 0){
//             let x = val.preco*val.quantidade;
//             conteudoDoCarrinho.innerHTML+=`
//             <p>`+val.quantidade+` X - `+val.nome+` - `+x.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
//             <hr>
//             `;
//         }
//     })
// }
function mostrarTotal (){
    var mostrarTotal = document.getElementById("total");
    mostrarTotal.innerHTML =` - `+total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}
var links = document.getElementsByClassName("aDoCarrinho");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(e){
        e.preventDefault();
        let key = this.getAttribute(`key`);
        if (key== 20) {
            cliente.addToCartV();
        }
        else if (key == 10) {
            cliente.addToCartP0();
        }

        atualizarCarrinho();
        // NotaFiscal.mapPedidos()
        // total= total+ Itens[key].preco ;
        // efetuandoPagamento();
        // mostrarTotal()
        return false;
    })
}
//For Fluxo Remover Carrinho
var links2 = document.getElementsByClassName("retirarDoCarrinho");
for (var i = 0; i < links2.length; i++) {
    links2[i].addEventListener("click",function(e){
        e.preventDefault();
        let key = this.getAttribute(`key`);
        Itens[key].quantidade = Itens[key].quantidade - 1;
        total= total - Itens[key].preco ;
        atualizarCarrinho();
        notaFiscal();
        efetuandoPagamento();
        mostrarTotal()
        return false;
    })
}