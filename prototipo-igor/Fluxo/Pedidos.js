import {Cliente} from "./Cliente.js";

import {Cardapio} from "./Cardapio";

export class Pedidos extends Cliente {
    comanda;
    constructor(){
        super();
        this.comanda = {}
    }

    //Adicionar ao Carrinho!
    addToCartP(){
        this.comanda = {
            item: Pizza,
            valor: Cardapio.getPizzaValue()
        }
        this.pedidos.push(this.comanda)
        console.log("Pizza add")
    };

    addToCartL(){
        this.comanda = {
            item: Lasanha,
            valor: Cardapio.getLasanhaValue()
        }
        this.pedidos.push(this.comanda)
        console.log("Lasanha add")
    };

    addToCartM(){
        this.comanda = {
            item: Macarrao,
            valor: Cardapio.getMacarraoValue()
        }
        this.pedidos.push(this.comanda)
        console.log("Lasanha add")
    };

    //Remover do Carrinho!

    //For para remover quantidade de pedidos N
    RemoveCartItemP(){

        this.pedidos.splice(Cardapio.getPVAndRemove(), 1)
    }

}