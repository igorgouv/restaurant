$(window).load(function()
{
    $('#myModal').modal('show');
});

import{Cardapio} from"./back-end/Fluxo/Cardapio.js"
import { Cliente } from "./back-end/Fluxo/Cliente.js";
import{Pedidos} from "./back-end/Fluxo/Pedidos.js";



function getLocalStorage1(){
    return JSON.parse(localStorage.getItem('db_client1'))}


var cliente = new Pedidos("igor", "gouveia@email", "b00000");
console.log(cliente.nome);
console.log(cliente.email)
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
botao.addEventListener("click",function(e){
    e.preventDefault();
        var inputsenhalogin = document.getElementById('input-login').value;
        var inputEmailLogin = document.getElementById('input-senha').value;
        console.log(`O valor de ${inputsenhalogin}, ${typeof inputsenhalogin}`)
        console.log(`O valor de ${inputEmailLogin}, ${typeof inputEmailLogin}`)
        var array1 = inputsenhalogin.split("");
        var array2 = inputEmailLogin.split("");
        
        array1 = array1.sort().join('');
        console.log(array1)
        array2 = array2.sort().join('');
        console.log(array2)
        var clientes = localStorage.getItem('db_client1');// Variavel que pega o Array de Antonio
        var clientetrans = JSON.parse(clientes)
        console.log(clientetrans)
        for(var index = 0, total=clientetrans.length; index < total; index++){
            var obj = clientetrans[index];
            var x = obj.senha.split("")
            var z = obj.email.split("")
            x = x.sort().join('');
            console.log(x)
            z = z.sort().join('');
            console.log(z)
            console.log(obj.senha, typeof obj.senha, obj.email, typeof obj.email)
            if( x == array2 && z == array1){
                encontrouCadastro = true
                console.log("Encontrou!")
            }else {
                encontrouCadastro = false
                console.log("Nao encontrou!")
            }
        }
  console.log("Fim da validacao")
})
var links = document.getElementsByClassName("aDoCarrinho");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(e){
        e.preventDefault();
        var clientes = getLocalStorage1();// Variavel que pega o Array de Antonio
        console.log(clientes)
            if(encontrouCadastro == true){
                
                let key = this.getAttribute(`key`);
                if (key== 20) {
                    cliente.addToCartV();
                }
                else if (key == 19 ) {
                    cliente.addToCartB5();
                }
                else if (key == 18 ) {
                    cliente.addToCartB4();
                }
                else if (key == 17 ) {
                    cliente.addToCartB3();
                }
                else if (key == 16 ) {
                    cliente.addToCartB2();
                }
                else if (key == 16 ) {
                    cliente.addToCartB1();
                }
                else if (key == 15 ) {
                    cliente.addToCartB0();
                }
                else if (key == 14 ) {
                    cliente.addToCartP4();
                }
                else if (key == 13 ) {
                    cliente.addToCartP3();
                }
                else if (key == 12 ) {
                    cliente.addToCartP2();
                }
                else if (key == 11 ) {
                    cliente.addToCartP1();
                }
                else if (key == 10 ) {
                    cliente.addToCartP0();
                }
                else if (key == 9 ) {
                    cliente.addToCartM9();
                }
                else if (key == 8 ) {
                    cliente.addToCartM8();
                }
                else if (key == 7 ) {
                    cliente.addToCartM7();
                }
                else if (key == 6 ) {
                    cliente.addToCartM6();
                }
                else if (key == 5 ) {
                    cliente.addToCartM5();
                }
                else if (key == 4 ) {
                    cliente.addToCartM4();
                }
                else if (key == 3 ) {
                    cliente.addToCartM3();
                }else if (key == 2 ) {
                    cliente.addToCartM2();
                }
                else if (key == 1 ) {
                    cliente.addToCartM1();
                }
                notaFiscal();
                atualizarCarrinho();
                efetuandoPagamento();
                mostrarTotal()
                return false;
            }
            alert("Voce precisa logar")
    })
}
//For Fluxo Remover Carrinho
var links2 = document.getElementsByClassName("retirarDoCarrinho");
for (var i = 0; i < links2.length; i++) {
    links2[i].addEventListener("click",function(e){
        e.preventDefault();
            if(encontrouCadastro == true){
                
                let key = this.getAttribute(`key`);
                if (key== 20 ) {
                    cliente.RemoveCartItemV();
                }
                else if (key == 19 ) {
                    cliente.RemoveCartItemB5();
                }
                else if (key == 18 ) {
                    cliente.RemoveCartItemB4();
                }
                else if (key == 17 ) {
                    cliente.RemoveCartItemB3();
                }
                else if (key == 16 ) {
                    cliente.RemoveCartItemB2();
                }
                else if (key == 16 ) {
                    cliente.RemoveCartItemB1();
                }
                else if (key == 15 ) {
                    cliente.RemoveCartItemB0();
                }
                else if (key == 14 ) {
                    cliente.RemoveCartItemP4();
                }
                else if (key == 13 ) {
                    cliente.RemoveCartItemP3();
                }
                else if (key == 12 ) {
                    cliente.RemoveCartItemP2();
                }
                else if (key == 11 ) {
                    cliente.RemoveCartItemP1();
                }
                else if (key == 10 ) {
                    cliente.RemoveCartItemP0();
                }
                else if (key == 9 ) {
                    cliente.RemoveCartItemM9();
                }
                else if (key == 8 ) {
                    cliente.RemoveCartItemM8();
                }
                else if (key == 7 ) {
                    cliente.RemoveCartItemM7();
                }
                else if (key == 6 ) {
                    cliente.RemoveCartItemM6();
                }
                else if (key == 5 ) {
                    cliente.RemoveCartItemM5();
                }
                else if (key == 4 ) {
                    cliente.RemoveCartItemM4();
                }
                else if (key == 3 ) {
                    cliente.RemoveCartItemM3();
                }else if (key == 2 ) {
                    cliente.RemoveCartItemM2();
                }
                else if (key == 1 ) {
                    cliente.RemoveCartItemM1();
                } else{
                    alert("Faca uma reserva para logar no sistema!")
                }
                atualizarCarrinho();
                notaFiscal();
                efetuandoPagamento();
                mostrarTotal()
                return false;
            }
            alert("Voce precisa logar")
    })
}

//Clicou em imprimir NotaFiscal



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
time();