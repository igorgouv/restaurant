import {Cliente} from "./Cliente.js";

import {Cardapio} from "./Cardapio.js";

export class Pedidos extends Cliente {
    comanda;
    constructor(nome, email, cpf){
        super(nome, email, cpf);
        this.comanda = {}
    }

    //Adicionar ao Carrinho!
    addToCartP(){
        this.pedidos.map((val) =>{
            if(this.pedidos === undefined){
                var add = Cardapio.getPizzaQuantidade()
                this.comanda = {
                    id: Cardapio.getPizzaQuantidade(),
                    item: Cardapio.getPizzaNome(),
                    quantidade: add += 1,
                    tipo: Cardapio.getPizzaTipo(),
                    valor: Cardapio.getPizzaPreco()
                }
                this.pedidos.push(this.comanda)
                this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
                this.total = this.total + this.comanda.valor;
            }else if(val.id == 5){
                val.quantidade++
                this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
                this.total = this.total + this.comanda.valor;
            }
        })
        console.log("Pizza add")
    };

    addToCartV(){
        var add = Cardapio.getVegetarianoQuantidade()
        this.comanda = {
            item: Cardapio.getVegetarianoNome(),
            quantidade: add++,
            tipo: Cardapio.getVegetarianoTipo(),
            valor: Cardapio.getVegetarianoPreco()
        }
        this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
        this.total = this.total + this.comanda.valor;
        this.pedidos.push(this.comanda)
        console.log("Vegetariano add")
    };

    addToCartM1(){
        var add = Cardapio.getMacarrao1Quantidade()
        this.comanda = {
            item: Cardapio.getMacarrao1Nome(),
            quantidade: add++,
            tipo: Cardapio.getMacarrao1Tipo(),
            valor: Cardapio.getMacarrao1Preco()
        }
        this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
        this.total = this.total + this.comanda.valor;
        this.pedidos.push(this.comanda)
        console.log("Macarrao1 add")
    };

    addToCartM2(){
        var add = Cardapio.getMacarrao2Quantidade()
        this.comanda = {
            item: Cardapio.getMacarrao2Nome(),
            quantidade: add++,
            tipo: Cardapio.getMacarrao2Tipo(),
            valor: Cardapio.getMacarrao2Preco()
        }
        this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
        this.total = this.total + this.comanda.valor;
        this.pedidos.push(this.comanda)
        console.log("Macarrao2 add")
    };

    addToCartM3(){
        var add = Cardapio.getMacarrao3Quantidade()
        this.comanda = {
            item: Cardapio.getMacarrao3Nome(),
            quantidade: add++,
            tipo: Cardapio.getMacarrao3Tipo(),
            valor: Cardapio.getMacarrao3Preco()
        }
        this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
        this.total = this.total + this.comanda.valor;
        this.pedidos.push(this.comanda)
        console.log("Macarrao3 add")
    };

    addToCartM4(){
        var add = Cardapio.getMacarrao4Quantidade()
        this.comanda = {
            item: Cardapio.getMacarrao4Nome(),
            quantidade: add++,
            tipo: Cardapio.getMacarrao4Tipo(),
            valor: Cardapio.getMacarrao4Preco()
        }
        this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
        this.total = this.total + this.comanda.valor;
        this.pedidos.push(this.comanda)
        console.log("Macarrao4 add")
    };

    //Remover do Carrinho!

    RemoveCartItemP = () => {
        var remove = Cardapio.getPizzaQuantidade();
        this.pedidos.map((item) => {
            if(item.item == Cardapio.getPizzaNome()){
                if(item.quantidade > 1){
                    remove -= 1;
                    item.valor = item.valor * item.quantidade;
                    this.total = this.total - item.valor;
                } else if(item.quantidade == 1){
                    remove -= 1;
                    this.total = this.total - item.valor;
                    this.pedidos.splice(item, 1);
                }
            }
        })
    }
    
    RemoveCartItemV = () => {
        var remove = Cardapio.getVegetarianoQuantidade();
        this.pedidos.map((item) => {
            if(item.item == Cardapio.getVegetarianoNome()){
                if(item.quantidade > 1){
                    remove -= 1;
                    item.valor = item.valor * item.quantidade;
                    this.total = this.total - item.valor;
                }
                remove -= 1;
                this.total = this.total - item.valor;
                this.pedidos.splice(item, 1);
            }
        })
    }

    RemoveCartItemM1 = () => {
        var remove = Cardapio.getMacarrao1Quantidade();
        this.pedidos.map((item) => {
            if(item.item == Cardapio.getMacarrao1Nome()){
                if(item.quantidade > 1){
                    remove -= 1;
                    item.valor = item.valor * item.quantidade;
                    this.total = this.total - item.valor;
                }
                remove -= 1;
                this.total = this.total - item.valor;
                this.pedidos.splice(item, 1);
            }
        })
    }

    RemoveCartItemM2 = () => {
        var remove = Cardapio.getMacarrao2Quantidade();
        this.pedidos.map((item) => {
            if(item.item == Cardapio.getMacarrao2Nome()){
                if(item.quantidade > 1){
                    remove -= 1;
                    item.valor = item.valor * item.quantidade;
                    this.total = this.total - item.valor;
                }
                remove -= 1;
                this.total = this.total - item.valor;
                this.pedidos.splice(item, 1);
            }
        })
    }

    RemoveCartItemM3 = () => {
        var remove = Cardapio.getMacarrao3Quantidade();
        this.pedidos.map((item) => {
            if(item.item == Cardapio.getMacarrao3Nome()){
                if(item.quantidade > 1){
                    remove -= 1;
                    item.valor = item.valor * item.quantidade;
                    this.total = this.total - item.valor;
                }
                remove -= 1;
                this.total = this.total - item.valor;
                this.pedidos.splice(item, 1);
            }
        })
    }

    RemoveCartItemM4 = () => {
        var remove = Cardapio.getMacarrao4Quantidade();
        this.pedidos.map((item) => {
            if(item.item == Cardapio.getMacarrao4Nome()){
                if(item.quantidade > 1){
                    remove -= 1;
                    item.valor = item.valor * item.quantidade;
                    this.total = this.total - item.valor;
                }
                remove -= 1;
                this.total = this.total - item.valor;
                this.pedidos.splice(item, 1);
            }
        })
    }


    AtualizarTotal = () => {
        this.pedidos.map((item) => {
            return this.total = this.total + item.valor
        })
    }

}


// Quando efetuar o pedido **LEMBRAR DE ZERAR TODAS AS QUANTIDADES DO CARDAPIO**

//If de Paulo para debuggar 
/*        this.pedidos.map((val) =>{
            if(this.pedidos === undefined){
                var add = Cardapio.getPizzaQuantidade()
                this.comanda = {
                    id: Cardapio.getPizzaQuantidade(),
                    item: Cardapio.getPizzaNome(),
                    quantidade: add += 1,
                    tipo: Cardapio.getPizzaTipo(),
                    valor: Cardapio.getPizzaPreco()
                }
                this.pedidos.push(this.comanda)
                this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
                this.total = this.total + this.comanda.valor;
            }else if(val.id == 5){
                val.quantidade++
                this.comanda.valor = this.comanda.valor * this.comanda.quantidade;
                this.total = this.total + this.comanda.valor;
            }
        })  */