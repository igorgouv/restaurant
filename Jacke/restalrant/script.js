$(window).load(function()
{
    $('#myModal').modal('show');
});

var p1 = 40
let p2 = 28
let p3 = 45
let p4 = 68
let p5 = 35
var Itens = [
    {
        id: 0,
        nome: "vegetariano",
        img: "http://s2.glbimg.com/EFoi-6iFchrfO3HXBJQMlpoknhM=/smart/e.glbimg.com/og/ed/f/original/2017/11/28/receita-macarrao-com-almondegas-vegano_01.jpg",
        quantidade:0,
        preco:p1,
        tipo: "prato"
    },
    {
        id: 1,
        nome: "macarrao com atum",
        img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-com-atum.jpg",
        quantidade:0,
        preco:p2,
        tipo: "prato"
    },
    {
        id: 2,
        nome: "macarrao com frango",
        img: "https://img.itdg.com.br/tdg/images/recipes/000/173/054/162457/162457_original.jpg?mode=crop&width=710&height=400",
        quantidade:0,
        preco:p3,
        tipo: "prato"
    },
    {
        id: 3,
        nome: "macarrao espaguet a bolonhesa",
        img: "https://www.sabornamesa.com.br/media/k2/items/cache/9e9e1351d6a763151a8613c1dd10d427_XL.jpg",
        quantidade:0,
        preco:p4,
        tipo: "prato"
    },
    {
        id: 4,
        nome: "macarrao ravioli ao molho branco",
        img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/ravioli-molho-4-queijos-1024x683.jpg",
        quantidade:0,
        preco:p5,
        tipo: "prato"
    },
]
function menuDaLoja (){
    var conteuDoPrato = document.getElementById("pratos");
    Itens.map((val) =>{
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
function menuDaLojaPromocoes (){
    var conteudoDasPromocoes = document.getElementById("Promocoes");
    Itens.map((a) =>{
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
    Itens.map((bebidas) =>{
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
function metodoTop(nome,quantidade,tipo,total) {
    pedidos = {
        Nome : nome,
        quantidade:quantidade,
        tipo:tipo,
        total:total
    }
    return pedidos
}
menuDaLoja();
menuDaLojaPromocoes();
menuDaLojaBebidas();
var Pedidos=[]
atualizarCarrinho =()=>{
    var conteudoDoCarrinho = document.getElementById("carrinhoDeCompras");
    conteudoDoCarrinho.innerHTML = "";
    Itens.map((val) =>{
        if(val.quantidade > 0){
            let x = val.preco*val.quantidade;
            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.nome+` | quantidade: `+val.quantidade+` | tipo: `+val.tipo+`| preco:`+x.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
            <hr>
            `;
        }
    })
}
notaFiscal =()=>{
    var conteudoDoCarrinho = document.getElementById("nota");
    conteudoDoCarrinho.innerHTML = "";
    Itens.map((val) =>{
        if(val.quantidade > 0){
            let x = val.preco*val.quantidade;
            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.nome+` | quantidade: `+val.quantidade+` | tipo: `+val.tipo+`| preco:`+x.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
            <hr>
            `;
        }
    })
}
var links = document.getElementsByClassName("aDoCarrinho");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(e){
        e.preventDefault();
        let key = this.getAttribute(`key`);
        Itens[key].quantidade++ ;
        atualizarCarrinho();
        notaFiscal();
        total= total+ Itens[key].preco ;
        efetuandoPagamento();
        mostrarTotal();
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
        mostrarTotal();
        return false;
    })
}

var total = 0;
efetuandoPagamento =()=>{
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
notaFiscal =()=>{
    var conteudoDoCarrinho = document.getElementById("nota");
    conteudoDoCarrinho.innerHTML = "";
    Itens.map((val) =>{
        if(val.quantidade > 0){
            let x = val.preco*val.quantidade;
            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.quantidade+` X - `+val.nome+` - `+x.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
            <hr>
            `;
        }
    })
}
mostrarTotal =()=>{
    var mostrarTotal = document.getElementById("total");
    mostrarTotal.innerHTML =` - `+total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
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
