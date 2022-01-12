import {Cardapio} from './NotaFiscal.js'

import {Cliente} from './Cliente.js'

export class NotaFiscal extends Cliente{
    comanda;
    constructor(){
        super();
    }

    util = (A) => class extends Cardapio{

        addToCartP(){
            A.count_pizza++;
            comanda = {
                item: Pizza,
                valor: this.pizza
            }
            this.pedidos.push(comanda)
            console.log("Pizza add")
        };

        addToCartL(){
            A.count_lasanha++;
            comanda = {
                item: Lasanha,
                valor: this.lasanha
            }
            this.pedidos.push(comanda)
        };

        addToCartM(){
            A.count_macarrao++;
            comanda = {
                item: Macarrao,
                valor: this.macarrao
            }
            this.pedidos.push(comanda)
        };

        //Remover do Carrinho
        removeCartP(){
            A.count_pizza-=1
        };

        removeCartL(){
            A.count_lasanha-=1
        };

        removeCartM(){
            A.count_macarrao-=1
        };
    }


}
