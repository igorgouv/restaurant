$(window).load(function()
{
    $('#myModal').modal('show');
});

import{Cardapio} from"./back-end/Fluxo/Cardapio.js"
import { Cliente } from "./back-end/Fluxo/Cliente.js";
import{Pedidos} from "./back-end/Fluxo/Pedidos.js"
import { readClient } from "./Adm/Client.js";





var cliente = new Pedidos("igor", "gouveia@email", "b00000");
console.log(cliente);
console.log(cliente.readPedidos())
function menuDaLoja (){
    var conteuDoPrato = document.getElementById("pratos");
    Cardapio.Massas.map((val) =>{
        conteuDoPrato.innerHTML+=`
        <div class="col">
            <div class="card h-100">
                <img src="`+val.img+`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+val.nome+`</h5>
                    <p class="card-text">`+val.descricao+`</p>
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
                    <p class="card-text">`+a.descricao+`</p>
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
            <p class="card-text">`+bebidas.nome+`</p>
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
menuDaLojaBebidas();
menuDaLoja();
menuDaLojaPizzas();

function atualizarCarrinho (){
    var conteudoDoCarrinho = document.getElementById("carrinhoDeCompras");
    conteudoDoCarrinho.innerHTML = "";
    cliente.readPedidos().map((val) =>{
        if(val.quantidade > 0){
            let x = val.preco*val.quantidade;
            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.item+` | quantidade: `+val.quantidade+` | tipo: `+val.tipo+`| preco: `+val.valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
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
            <p>total:`+cliente.total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+` </p>
    </form>
    `;
}

function notaFiscal (){
    var conteudoDoCarrinho = document.getElementById("nota");
    conteudoDoCarrinho.innerHTML = "";
    cliente.readPedidos().map((val) =>{
        if(val.quantidade > 0){
            let x = val.preco*val.quantidade;
            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.quantidade+` X - `+val.item+` - `+val.valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
            <hr>
            `;
        }
    })
}


function mostrarTotal (){
    var mostrarTotal = document.getElementById("total");
    mostrarTotal.innerHTML =` - `+cliente.total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

}
var encontrouCadastro = false;

var botao = document.getElementById("entrarLogin");
var inputsenhalogin = document.getElementById("entrar-Login");
var inputEmailLogin = document.getElementById("entrar-senha");
botao.addEventListener("click",function(e){
    e.preventDefault();
    var clientes = readClient();// Variavel que pega o Array de Antonio
    clientes.map((val)=>{
        if(val.senha == inputsenhalogin && val.email == inputEmailLogin){
            encontrouCadastro = true
        }
    }) 

})

var links = document.getElementsByClassName("aDoCarrinho");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(e){
        e.preventDefault();
        var clientes = [];// Variavel que pega o Array de Antonio
        clientes.map((val)=>{
            if(val.nome == inputnomevalue && val.email == inputemailvalue){
                encontrouCadastro = true
            }
        }) 
        let key = this.getAttribute(`key`);
        if (key== 20 && encontrouCadastro == true) {
            cliente.addToCartV();
        }
        else if (key == 19 && encontrouCadastro == true) {
            cliente.addToCartB5();
        }
        else if (key == 18 && encontrouCadastro == true) {
            cliente.addToCartB4();
        }
        else if (key == 17 && encontrouCadastro == true) {
            cliente.addToCartB3();
        }
        else if (key == 16 && encontrouCadastro == true) {
            cliente.addToCartB2();
        }
        else if (key == 16 && encontrouCadastro == true) {
            cliente.addToCartB1();
        }
        else if (key == 15 && encontrouCadastro == true) {
            cliente.addToCartB0();
        }
        else if (key == 14 && encontrouCadastro == true) {
            cliente.addToCartP4();
        }
        else if (key == 13 && encontrouCadastro == true) {
            cliente.addToCartP3();
        }
        else if (key == 12 && encontrouCadastro == true) {
            cliente.addToCartP2();
        }
        else if (key == 11 && encontrouCadastro == true) {
            cliente.addToCartP1();
        }
        else if (key == 10 && encontrouCadastro == true) {
            cliente.addToCartP0();
        }
        else if (key == 9 && encontrouCadastro == true) {
            cliente.addToCartM9();
        }
        else if (key == 8 && encontrouCadastro == true) {
            cliente.addToCartM8();
        }
        else if (key == 7 && encontrouCadastro == true) {
            cliente.addToCartM7();
        }
        else if (key == 6 && encontrouCadastro == true) {
            cliente.addToCartM6();
        }
        else if (key == 5 && encontrouCadastro == true) {
            cliente.addToCartM5();
        }
        else if (key == 4 && encontrouCadastro == true) {
            cliente.addToCartM4();
        }
        else if (key == 3 && encontrouCadastro == true) {
            cliente.addToCartM3();
        }else if (key == 2 && encontrouCadastro == true) {
            cliente.addToCartM2();
        }
        else if (key == 1 && encontrouCadastro == true) {
            cliente.addToCartM1();
        }
        notaFiscal();
        atualizarCarrinho();
        efetuandoPagamento();
        mostrarTotal()
        return false;
    })
}
//For Fluxo Remover Carrinho
var links2 = document.getElementsByClassName("retirarDoCarrinho");
for (var i = 0; i < links2.length; i++) {
    links2[i].addEventListener("click",function(e){
        e.preventDefault();
        var clientes = readClient();// Variavel que pega o Array de Antonio
        clientes.map((val)=>{
            if(val.nome == inputsenhalogin && val.email == inputEmailLogin){
                encontrouCadastro = true
            }
        }) 
        let key = this.getAttribute(`key`);
        if (key== 20 && encontrouCadastro == true) {
            cliente.RemoveCartItemV();
        }
        else if (key == 19 && encontrouCadastro == true) {
            cliente.RemoveCartItemB5();
        }
        else if (key == 18 && encontrouCadastro == true) {
            cliente.RemoveCartItemB4();
        }
        else if (key == 17 && encontrouCadastro == true) {
            cliente.RemoveCartItemB3();
        }
        else if (key == 16 && encontrouCadastro == true) {
            cliente.RemoveCartItemB2();
        }
        else if (key == 16 && encontrouCadastro == true) {
            cliente.RemoveCartItemB1();
        }
        else if (key == 15 && encontrouCadastro == true) {
            cliente.RemoveCartItemB0();
        }
        else if (key == 14 && encontrouCadastro == true) {
            cliente.RemoveCartItemP4();
        }
        else if (key == 13 && encontrouCadastro == true) {
            cliente.RemoveCartItemP3();
        }
        else if (key == 12 && encontrouCadastro == true) {
            cliente.RemoveCartItemP2();
        }
        else if (key == 11 && encontrouCadastro == true) {
            cliente.RemoveCartItemP1();
        }
        else if (key == 10 && encontrouCadastro == true) {
            cliente.RemoveCartItemP0();
        }
        else if (key == 9 && encontrouCadastro == true) {
            cliente.RemoveCartItemM9();
        }
        else if (key == 8 && encontrouCadastro == true) {
            cliente.RemoveCartItemM8();
        }
        else if (key == 7 && encontrouCadastro == true) {
            cliente.RemoveCartItemM7();
        }
        else if (key == 6 && encontrouCadastro == true) {
            cliente.RemoveCartItemM6();
        }
        else if (key == 5 && encontrouCadastro == true) {
            cliente.RemoveCartItemM5();
        }
        else if (key == 4 && encontrouCadastro == true) {
            cliente.RemoveCartItemM4();
        }
        else if (key == 3 && encontrouCadastro == true) {
            cliente.RemoveCartItemM3();
        }else if (key == 2 && encontrouCadastro == true) {
            cliente.RemoveCartItemM2();
        }
        else if (key == 1 && encontrouCadastro == true) {
            cliente.RemoveCartItemM1();
        } else{
            alert("Faca uma reserva para logar no sistema!")
        }
        atualizarCarrinho();
        notaFiscal();
        efetuandoPagamento();
        mostrarTotal()
        return false;
    })
}

//Clicou em imprimir NotaFiscal
var finalizarPedidos = document.getElementById("finalizarPedido")
    .addEventListener("click",function(e){
        e.preventDefault();
        Pedidos.ResetQuantidades();
        console.log("Resetou Quantidades ao imprimir")
    })

//Sistema de Validar senha
//Fazer um validar pra cada Botao
function ValidarSenha (){
    var clientes = []
    clientes.map((val)=>{
        if(val.nome == inputnomevalue && val.email == inputemailvalue){
            encontrouCadastro = true
        }
    }) 
}



function adicionaZero(numero){
    if(numero <=9){
        return "0"+numero
    }
    else{
        return numero
    }

}
function time(){
    var data = new Date();
    var time = document.getElementById("time")
    time.innerHTML = (adicionaZero(data.getDate().toString()) + "/" + (adicionaZero(data.getMonth()+1).toString()) + "/" + data.getFullYear()+" - "+ 
data.getHours()+`:`+data.getMinutes()+`:`+data.getSeconds());
}
time()