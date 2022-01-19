import {NotaFiscal} from './NotaFiscal.js'

export class Cardapio { 
    
    //Itens do Cardápio
    static Itens = [
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
        {
            id: 5,
            nome: "Pizza",
            img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/ravioli-molho-4-queijos-1024x683.jpg",
            quantidade:0,
            preco:60,
            tipo: "prato"
        },
    ]
    
    static count_pizza;
    static count_vegetariano;
    static count_macarrao1;
    static count_macarrao2;
    static count_macarrao3;
    static count_macarrao4;




    constructor(){
    if(this.constructor == Usuario){
        throw new Error("Você não deveria instânciar um objeto do tipo Cardapio diretamente, pois essa é uma classe Abstrata.")
    }
    }
    
    //Getters

    //AddToCartValue
    static getPizzaValue = () => {
        count_pizza++
        Cardapio.Itens.map((val) =>{
            if(val.nome == "Pizza"){
                return val.preco;
            }
        })
    }

    static getLasanhaValue = () => {
        count_lasanha++
        return this.lasanha
    }

    static getMacarraoValue = () => {
        count_macarrao++
        return this.macarrao
    }

    //Getter Contadores de pizzas.
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