export class Cardapio { 
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
    this.Itens = [
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
    }

    
    //Getters
 
    //Pizza

    static getPizzaId = () => {
        this.Itens.map((val) =>{
            if(val.id == 5){
                return Itens[val].id
            }
        })
    }

    static getPizzaNome = () => {
        this.Itens.map((val) =>{
            if(val.id == 5){
                return Itens[val].nome
            }
        })
    }


    static getPizzaQuantidade = () => {
        this.Itens.map((val) =>{
            if(val.id == 5){
                return Itens[val].quantidade
            }
        })
    }


    static getPizzaTipo = () => {
        this.Itens.map((val) =>{
            if(val.id == 5){
                return Itens[val].tipo
            }
        })
    }


    static getPizzaPreco = () => {
        this.Itens.map((val) =>{
            if(val.id == 5){
                return Itens[val].preco
            }
        })
    }

    //Vegetariano

    static getVegetarianoId = () => {
        Itens.map((val) =>{
            if(val.id == 0){
                return Itens[val].id
            }
        })
    }


    static getVegetarianoNome = () => {
        Itens.map((val) =>{
            if(val.id == 0){
                return Itens[val].nome
            }
        })
    }

    static getVegetarianoQuantidade = () => {
        Itens.map((val) =>{
            if(val.id == 0){
                return Itens[val].quantidade
            }
        })
    }

    static getVegetarianoTipo = () => {
        Itens.map((val) =>{
            if(val.id == 0){
                return Itens[val].tipo
            }
        })
    }

    static getVegetarianoPreco = () => {
        Itens.map((val) =>{
            if(val.id == 0){
                return Itens[val].preco
            }
        })
    }

    //Macarrão 1

    static getMacarrao1Id = () => {
        Itens.map((val) =>{
            if(val.id == 1){
                return Itens[val].id
            }
        })
    }
    

    static getMacarrao1Nome = () => {
        Itens.map((val) =>{
            if(val.id == 1){
                return Itens[val].nome
            }
        })
    }

    static getMacarrao1Quantidade = () => {
        Itens.map((val) =>{
            if(val.id == 1){
                return Itens[val].quantidade
            }
        })
    }

    static getMacarrao1Tipo = () => {
        Itens.map((val) =>{
            if(val.id == 1){
                return Itens[val].tipo
            }
        })
    }

    static getMacarrao1Preco = () => {
        Itens.map((val) =>{
            if(val.id == 1){
                return Itens[val].preco
            }
        })
    }

    //Macarrão 2

    static getMacarrao2Id = () => {
        Itens.map((val) =>{
            if(val.id == 2){
                return Itens[val].id
            }
        })
    }

    static getMacarrao2Nome = () => {
        Itens.map((val) =>{
            if(val.id == 2){
                return Itens[val].nome
            }
        })
    }

    static getMacarrao2Quantidade = () => {
        Itens.map((val) =>{
            if(val.id == 2){
                return Itens[val].quantidade
            }
        })
    }

    static getMacarrao2Tipo = () => {
        Itens.map((val) =>{
            if(val.id == 2){
                return Itens[val].tipo
            }
        })
    }

    static getMacarrao2Preco = () => {
        Itens.map((val) =>{
            if(val.id == 2){
                return Itens[val].preco
            }
        })
    }

    //Macarrão 3

    static getMacarrao3Id = () => {
        Itens.map((val) =>{
            if(val.id == 3){
                return Itens[val].id
            }
        })
    }



    static getMacarrao3Nome = () => {
        Itens.map((val) =>{
            if(val.id == 3){
                return Itens[val].nome
            }
        })
    }

    static getMacarrao3Quantidade = () => {
        Itens.map((val) =>{
            if(val.id == 3){
                return Itens[val].quantidade
            }
        })
    }

    static getMacarrao3Tipo = () => {
       Itens.map((val) =>{
            if(val.id == 3){
                return Itens[val].tipo
            }
        })
    }

    static getMacarrao3Preco = () => {
        Itens.map((val) =>{
            if(val.id == 3){
                return Itens[val].preco
            }
        })
    }

    //Macarrão 4

    static getMacarrao4Id = () => {
        Itens.map((val) =>{
            if(val.id == 4){
                return Itens[val].id
            }
        })
    }


    static getMacarrao4Nome = () => {
        Itens.map((val) =>{
            if(val.id == 4){
                return Itens[val].nome
            }
        })
    }

    static getMacarrao4Quantidade = () => {
        Itens.map((val) =>{
            if(val.id == 4){
                return Itens[val].quantidade
            }
        })
    }

    static getMacarrao4Tipo = () => {
        Itens.map((val) =>{
            if(val.id == 4){
                return Itens[val].tipo
            }
        })
    }

    static getMacarrao4Preco = () => {
        Itens.map((val) =>{
            if(val.id == 4){
                return Itens[val].preco
            }
        })
    }
}