export class Cardapio { 
    static Itens = [
        {
            id: 0,
            nome: "Vegetariano",
            img: "http://s2.glbimg.com/EFoi-6iFchrfO3HXBJQMlpoknhM=/smart/e.glbimg.com/og/ed/f/original/2017/11/28/receita-macarrao-com-almondegas-vegano_01.jpg",
            quantidade:0,
            preco:10,
            tipo: "prato"
        },
        {
            id: 1,
            nome: "macarrao com atum",
            img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-com-atum.jpg",
            quantidade:0,
            preco:20,
            tipo: "prato"
        },
        {
            id: 2,
            nome: "macarrao com frango",
            img: "https://img.itdg.com.br/tdg/images/recipes/000/173/054/162457/162457_original.jpg?mode=crop&width=710&height=400",
            quantidade:0,
            preco:30,
            tipo: "prato"
        },
        {
            id: 3,
            nome: "macarrao espaguet a bolonhesa",
            img: "https://www.sabornamesa.com.br/media/k2/items/cache/9e9e1351d6a763151a8613c1dd10d427_XL.jpg",
            quantidade:0,
            preco:40,
            tipo: "prato"
        },
        {
            id: 4,
            nome: "macarrao ravioli ao molho branco",
            img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/ravioli-molho-4-queijos-1024x683.jpg",
            quantidade:0,
            preco:50,
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
    if(this.constructor == Cardapio){
        throw new Error("Você não deveria instânciar um objeto do tipo Cardapio diretamente, pois essa é uma classe Abstrata.")
    }
    }

    
    //Getters
 
    //Pizza

    static getPizzaId = () => {
       return Cardapio.Itens.map((val) =>{
            if(val.id == 5){
                return val.nome
            }
         }).filter(notUndefined => notUndefined !== undefined);
    }

    static getPizzaNome = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 5){
                return val.nome
            }
        })
    }


    static getPizzaQuantidade = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 5){
                return val.quantidade
            }
        })
    }


    static getPizzaTipo = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 5){
                return val.tipo
            }
        })
    }


    static getPizzaPreco = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 5){
                return val.preco
            }
        })
    }

    //Vegetariano

    static getVegetarianoId = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 0){
                return val.id
            }
        })
    }


    static getVegetarianoNome = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 0){
                return val.nome
            }
        })
    }

    static getVegetarianoQuantidade = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 0){
                return val.quantidade
            }
        })
    }

    static getVegetarianoTipo = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 0){
                return val.tipo
            }
        })
    }

    static getVegetarianoPreco = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 0){
                return val.preco
            }
        })
    }

    //Macarrão 1

    static getMacarrao1Id = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 1){
                return val.id
            }
        })
    }
    

    static getMacarrao1Nome = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 1){
                return val.nome
            }
        })
    }

    static getMacarrao1Quantidade = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 1){
                return val.quantidade
            }
        })
    }

    static getMacarrao1Tipo = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 1){
                return val.tipo
            }
        })
    }

    static getMacarrao1Preco = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 1){
                return val.preco
            }
        })
    }

    //Macarrão 2

    static getMacarrao2Id = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 2){
                return val.id
            }
        })
    }

    static getMacarrao2Nome = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 2){
                return val.nome
            }
        })
    }

    static getMacarrao2Quantidade = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 2){
                return val.quantidade
            }
        })
    }

    static getMacarrao2Tipo = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 2){
                return val.tipo
            }
        })
    }

    static getMacarrao2Preco = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 2){
                return val.preco
            }
        })
    }

    //Macarrão 3

    static getMacarrao3Id = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 3){
                return val.id
            }
        })
    }



    static getMacarrao3Nome = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 3){
                return val.nome
            }
        })
    }

    static getMacarrao3Quantidade = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 3){
                return val.quantidade
            }
        })
    }

    static getMacarrao3Tipo = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 3){
                return val.tipo
            }
        })
    }

    static getMacarrao3Preco = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 3){
                return val.preco
            }
        })
    }

    //Macarrão 4

    static getMacarrao4Id = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 4){
                return val.id
            }
        })
    }


    static getMacarrao4Nome = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 4){
                return val.nome
            }
        })
    }

    static getMacarrao4Quantidade = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 4){
                return val.quantidade
            }
        })
    }

    static getMacarrao4Tipo = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 4){
                return val.tipo
            }
        })
    }

    static getMacarrao4Preco = () => {
        Cardapio.Itens.map((val) =>{
            if(val.id == 4){
                return val.preco
            }
        })
    }
}