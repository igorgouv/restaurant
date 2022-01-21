import {Cliente} from "./Cliente.js";

import {Cardapio} from "./Cardapio.js";

export class Pedidos extends Cliente {
    comanda;
    constructor(nome, email, cpf){
        super(nome, email, cpf);
        this.comanda = {}
    }

    //Zerar Todos cardápios
    static ResetQuantidades = () => {
        // All Pizzas
       return Cardapio.quantidade_pizza0 = 0,
        Cardapio.quantidade_pizza1 = 0,
        Cardapio.quantidade_pizza2 = 0,
        Cardapio.quantidade_pizza3 = 0,
        Cardapio.quantidade_pizza4 = 0,

        //All Bebidas
        Cardapio.quantidade_bebida0 = 0,
        Cardapio.quantidade_bebida1 = 0,
        Cardapio.quantidade_bebida2 = 0,
        Cardapio.quantidade_bebida3 = 0,
        Cardapio.quantidade_bebida4 = 0,

        //All Massas
        Cardapio.quantidade_massa0 = 0,
        Cardapio.quantidade_massa1 = 0,
        Cardapio.quantidade_massa2 = 0,
        Cardapio.quantidade_massa3 = 0,
        Cardapio.quantidade_massa4 = 0,
        Cardapio.quantidade_massa5 = 0,
        Cardapio.quantidade_massa6 = 0,
        Cardapio.quantidade_massa7 = 0,
        Cardapio.quantidade_massa8 = 0,
        Cardapio.quantidade_massa9 = 0
    }
    

    //Adicionar ao Carrinho!
    addToCartP0 = () => {
        Cardapio.quantidade_pizza0 += 1;
        this.comanda = {
            id: parseInt(Cardapio.getPizza0Id()),
            item: Cardapio.getPizza0Nome(),
            quantidade: Cardapio.quantidade_pizza0,
            tipo: Cardapio.getPizza0Tipo(),
            valor: parseFloat(Cardapio.getPizza0Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            this.pedidos.map((val)=>{
                if(val.id == 10){
                    val.quantidade = Cardapio.quantidade_pizza0;
                    val.valor = this.comanda.valor * val.quantidade;
                    this.total = this.total + this.comanda.valor;
                    console.log("Quantidade Alterada!")
                } else {
                    this.pedidos.push(this.comanda)
                    this.total = this.total + this.comanda.valor;
                    console.log("Fez outro pedido")
                }
            })
        }
        console.log("Fim do add")
    };
        
        
        //     Cardapio.quantidade_pizza0 += 1;
        //     this.comanda = {
        //         id: Cardapio.getPizza0Id(),
        //         item: Cardapio.getPizza0Nome(),
        //         quantidade: Cardapio.quantidade_pizza0,
        //         tipo: Cardapio.getPizza0Tipo(),
        //         valor: Cardapio.getPizza0Preco()
        //     }
        //     console.log("Criou comanda")
        //     if(!this.pedidos.length){
        //         this.pedidos.push(this.comanda)
        //         this.total = this.total + this.comanda.valor;
        //         console.log("Inseriu a comanda")
        //     } else {
        //         this.pedidos.map((val)=>{
        //             if(val.id == this.comanda.id){
        //                 val.quantidade = Cardapio.quantidade_pizza0;
        //                 val.valor = this.comanda.valor * val.quantidade;
        //                 this.total = this.total + this.comanda.valor;
        //                 console.log("Alterado!")
        //             }
        //         })
        //     }
        //     console.log("Fim do add")
        // };



    //     Cardapio.quantidade_pizza0 += 1;
    //     this.comanda = {
    //         id: parseInt(Cardapio.getPizza0Id()),
    //         item: Cardapio.getPizza0Nome(),
    //         quantidade: Cardapio.quantidade_pizza0,
    //         tipo: Cardapio.getPizza0Tipo(),
    //         valor: parseFloat(Cardapio.getPizza0Preco())
    //     }
    //     console.log("Criou comanda")
    //     if(!this.pedidos.length){
    //         this.pedidos.push(this.comanda)
    //         this.total = this.total + this.comanda.valor;
    //         console.log("Sentou na mesa e fez o primeiro pedido")
    //     } else {
    //         this.pedidos.map((val)=>{
    //             if(val.id == 10){
    //                 val.quantidade = Cardapio.quantidade_pizza0;
    //                 val.valor = this.comanda.valor * val.quantidade;
    //                 this.total = this.total + this.comanda.valor;
    //                 console.log("Quantidade Alterada!")
    //             }
    //         })
    //         this.pedidos.map((val)=>{
    //             if(val.id !== 10){
    //             this.pedidos.push(this.comanda)
    //             this.total = this.total + this.comanda.valor;
    //             console.log("Fez outro pedido")  
    //             }
    //         })
    //     }
    //     console.log("Fim do add")
    // };

    // addToCartV = () => {
    //     Cardapio.quantidade_vegetariano += 1;
    //     this.comanda = {
    //         id: parseInt(Cardapio.getVegetarianoId()),
    //         item: Cardapio.getVegetarianoNome(),
    //         quantidade: Cardapio.quantidade_vegetariano,
    //         tipo: Cardapio.getVegetarianoTipo(),
    //         valor: parseFloat(Cardapio.getVegetarianoPreco())
    //     }
    //     console.log("Criou comanda")
    //     if(!this.pedidos.length){
    //         this.pedidos.push(this.comanda)
    //         this.total = this.total + this.comanda.valor;
    //         console.log("Sentou na mesa e fez o primeiro pedido")
    //     } else {
    //         this.pedidos.map((val)=>{
    //             if(val.id == 20){
    //                 val.quantidade = Cardapio.quantidade_vegetariano;
    //                 val.valor = this.comanda.valor * val.quantidade;
    //                 this.total = this.total + this.comanda.valor;
    //                 console.log("Quantidade Alterada!")
    //             } else{
    //                 return;
    //             }
    //         })
    //         this.pedidos.map((val)=>{
    //             if(val.id !== 20){
    //             this.pedidos.push(this.comanda)
    //             this.total = this.total + this.comanda.valor;
    //             console.log("Fez outro pedido")  
    //             } else {
    //                 return;
    //             }
    //         })
    //     }
    //     console.log("Fim do add")
    // };

    addToCartV(){
        Cardapio.quantidade_vegetariano += 1;
        this.comanda = {
            id: parseInt(Cardapio.getVegetarianoId()),
            item: Cardapio.getVegetarianoNome(),
            quantidade: Cardapio.quantidade_vegetariano,
            tipo: Cardapio.getVegetarianoTipo(),
            valor: parseFloat(Cardapio.getVegetarianoPreco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            this.pedidos.map((val)=>{
                if(val.id == 20){
                    val.quantidade = Cardapio.quantidade_vegetariano;
                    val.valor = this.comanda.valor * val.quantidade;
                    this.total = this.total + this.comanda.valor;
                    console.log("Quantidade Alterada!")
                }else {
                    this.pedidos.push(this.comanda)
                    this.total = this.total + this.comanda.valor;
                    console.log("Fez outro pedido")
                }
            })
        }
        console.log("Fim do add")
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