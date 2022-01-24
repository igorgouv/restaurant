export class Estoque {

    static toSaveEstoque = [
        //Massas
        {
            id: 0,
            total: Estoque.QuantidadeEstoque.MassasTotal,
            item0: Estoque.QuantidadeEstoque.Massas0,
            item

        },
    ]

    //Controle Estoque Massas
    static QuantidadeEstoqueMassasTotal = 0;
    static QuantidadeEstoqueMassas0 = 0;
    static QuantidadeEstoqueMassas1 = 0;
    static QuantidadeEstoqueMassas2 = 0;
    static QuantidadeEstoqueMassas3 = 0;
    static QuantidadeEstoqueMassas4 = 0;
    static QuantidadeEstoqueMassas5 = 0;
    static QuantidadeEstoqueMassas6 = 0;
    static QuantidadeEstoqueMassas7 = 0;
    static QuantidadeEstoqueMassas8 = 0;
    static QuantidadeEstoqueMassas9 = 0;
    
    //Controle Estoque Bebidas
    static QuantidadeEstoqueBebidasTotal = 0;
    static QuantidadeEstoqueBebidas0 = 0;
    static QuantidadeEstoqueBebidas1 = 0;
    static QuantidadeEstoqueBebidas2 = 0;
    static QuantidadeEstoqueBebidas3 = 0;
    static QuantidadeEstoqueBebidas4 = 0;

    
    //Controle Estoque Pizzas
    static QuantidadeEstoquePizzasTotal = 0;
    static QuantidadeEstoquePizzas0 = 0;
    static QuantidadeEstoquePizzas1 = 0;
    static QuantidadeEstoquePizzas2 = 0;
    static QuantidadeEstoquePizzas3 = 0;
    static QuantidadeEstoquePizzas4 = 0;


    static addEstoqueItemMassas = (val) => {
        return Estoque.QuantidadeEstoque += val,
        console.log("adicionado Massas0")
    }

    static removeEstoqueItemMassas = (val) => {
       return Estoque.QuantidadeEstoque -= val
    }
}