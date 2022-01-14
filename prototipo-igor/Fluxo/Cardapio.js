import {NotaFiscal} from './NotaFiscal.js'

export class Cardapio {
    pizza = {
        valor: 10,
    };
    lasanha = 10;
    macarrao = 10;

    count_pizza;
    count_lasanha;
    count_macarrao;

    constructor(){}
    
    //Getters

    //AddToCartValue
    static getPizzaValue = () => {
        count_pizza++
        return this.pizza
    }

    static getLasanhaValue = () => {
        count_lasanha++
        return this.lasanha
    }

    static getMacarraoValue = () => {
        count_macarrao++
        return this.macarrao
    }

    static getCountPizzaValue = () => {
        return this.count_pizza;
    }

    static getCountLasanhaValue = () => {
        return this.count_lasanha;
    }

    static getCountMacarraoValue = () => {
        return this.count_macarrao;
    }

    //RemoveItemCartValue

    static getPVAndRemove = () => {
        count_pizza-=1
        return this.pizza.id
    }

    static getLVAndRemove = () => {
        count_lasanha-=1
        return this.lasanha.id
    }

    static getMVAndRemove = () => {
        count_macarrao-=1
        return this.macarrao
    }


}