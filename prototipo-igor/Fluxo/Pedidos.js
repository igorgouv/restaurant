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
    
    //Cardápio de Pizzas
    addToCartP0 = () => {
        Cardapio.quantidade_pizza0 += 1;
        Cardapio.quantidade_GlobalPizza0 += 1;
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
            console.log("Total Somando")
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 10){
                    obj.quantidade = Cardapio.quantidade_pizza0;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 10){
                        val.valor = Cardapio.getPizza0Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + this.comanda.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartP1 = () => {
        Cardapio.quantidade_pizza1 += 1;
        Cardapio.quantidade_GlobalPizza1 += 1;
        this.comanda = {
            id: parseInt(Cardapio.getPizza1Id()),
            item: Cardapio.getPizza1Nome(),
            quantidade: Cardapio.quantidade_pizza1,
            tipo: Cardapio.getPizza1Tipo(),
            valor: parseFloat(Cardapio.getPizza1Preco())
        }
        console.log("Criou comanda")
        
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Total Somando")
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 11){
                    obj.quantidade = Cardapio.quantidade_pizza1;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 11){
                        val.valor = Cardapio.getPizza1Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + this.comanda.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartP2 = () => {
        Cardapio.quantidade_pizza2 += 1;
        Cardapio.quantidade_GlobalPizza2 += 1;
        this.comanda = {
            id: parseInt(Cardapio.getPizza2Id()),
            item: Cardapio.getPizza2Nome(),
            quantidade: Cardapio.quantidade_pizza2,
            tipo: Cardapio.getPizza2Tipo(),
            valor: parseFloat(Cardapio.getPizza2Preco())
        }
        console.log("Criou comanda")
        
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Total Somando")
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 12){
                    obj.quantidade = Cardapio.quantidade_pizza2;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 12){
                        val.valor = Cardapio.getPizza2Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + this.comanda.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartP3 = () => {
        Cardapio.quantidade_pizza3 += 1;
        Cardapio.quantidade_GlobalPizza3 += 1;
        this.comanda = {
            id: parseInt(Cardapio.getPizza3Id()),
            item: Cardapio.getPizza3Nome(),
            quantidade: Cardapio.quantidade_pizza3,
            tipo: Cardapio.getPizza3Tipo(),
            valor: parseFloat(Cardapio.getPizza3Preco())
        }
        console.log("Criou comanda")
        
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Total Somando")
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 13){
                    obj.quantidade = Cardapio.quantidade_pizza3;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 13){
                        val.valor = Cardapio.getPizza3Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + this.comanda.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartP4 = () => {
        Cardapio.quantidade_pizza4 += 1;
        Cardapio.quantidade_GlobalPizza4 += 1;
        this.comanda = {
            id: parseInt(Cardapio.getPizza4Id()),
            item: Cardapio.getPizza4Nome(),
            quantidade: Cardapio.quantidade_pizza4,
            tipo: Cardapio.getPizza4Tipo(),
            valor: parseFloat(Cardapio.getPizza4Preco())
        }
        console.log("Criou comanda")
        
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Total Somando")
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 14){
                    obj.quantidade = Cardapio.quantidade_pizza4;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 14){
                        val.valor = Cardapio.getPizza4Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + this.comanda.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };
   //Cardápio de Massas
    
   //Vegetariano
    addToCartV(){
        Cardapio.quantidade_vegetariano += 1;
        Cardapio.quantidade_GlobalMassa0 += 1;
        var encontrou = true;
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
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 20){
                    obj.quantidade = Cardapio.quantidade_vegetariano;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 20){
                        val.valor = Cardapio.getVegetarianoPreco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    //Massa1
    addToCartM1(){
        Cardapio.quantidade_massa1 += 1;
        Cardapio.quantidade_GlobalMassa1 += 1;

        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa1Id()),
            item: Cardapio.getMassa1Nome(),
            quantidade: Cardapio.quantidade_massa1,
            tipo: Cardapio.getMassa1Tipo(),
            valor: parseFloat(Cardapio.getMassa1Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 1){
                    obj.quantidade = Cardapio.quantidade_massa1;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 1){
                        val.valor = Cardapio.getMassa1Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };
    //Massa2
    addToCartM2(){
        Cardapio.quantidade_massa2 += 1;
        Cardapio.quantidade_GlobalMassa2 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa2Id()),
            item: Cardapio.getMassa2Nome(),
            quantidade: Cardapio.quantidade_massa2,
            tipo: Cardapio.getMassa2Tipo(),
            valor: parseFloat(Cardapio.getMassa2Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 2){
                    obj.quantidade = Cardapio.quantidade_massa2;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 2){
                        val.valor = Cardapio.getMassa2Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };
    //Massa3
    addToCartM3(){
        Cardapio.quantidade_massa3 += 1;
        Cardapio.quantidade_GlobalMassa3 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa3Id()),
            item: Cardapio.getMassa3Nome(),
            quantidade: Cardapio.quantidade_massa3,
            tipo: Cardapio.getMassa3Tipo(),
            valor: parseFloat(Cardapio.getMassa3Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 3){
                    obj.quantidade = Cardapio.quantidade_massa3;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 3){
                        val.valor = Cardapio.getMassa3Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };
    //Massa4
    addToCartM4(){
        Cardapio.quantidade_massa4 += 1;
        Cardapio.quantidade_GlobalMassa4 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa4Id()),
            item: Cardapio.getMassa4Nome(),
            quantidade: Cardapio.quantidade_massa4,
            tipo: Cardapio.getMassa4Tipo(),
            valor: parseFloat(Cardapio.getMassa4Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 4){
                    obj.quantidade = Cardapio.quantidade_massa4;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 4){
                        val.valor = Cardapio.getMassa4Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };
    //Massa5
    addToCartM5(){
        Cardapio.quantidade_massa5 += 1;
        Cardapio.quantidade_GlobalMassa5 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa5Id()),
            item: Cardapio.getMassa5Nome(),
            quantidade: Cardapio.quantidade_massa5,
            tipo: Cardapio.getMassa5Tipo(),
            valor: parseFloat(Cardapio.getMassa5Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 5){
                    obj.quantidade = Cardapio.quantidade_massa5;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 5){
                        val.valor = Cardapio.getMassa5Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    //Massa6
    addToCartM6(){
        Cardapio.quantidade_massa6 += 1;
        Cardapio.quantidade_GlobalMassa6 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa6Id()),
            item: Cardapio.getMassa6Nome(),
            quantidade: Cardapio.quantidade_massa6,
            tipo: Cardapio.getMassa6Tipo(),
            valor: parseFloat(Cardapio.getMassa6Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 6){
                    obj.quantidade = Cardapio.quantidade_massa6;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 6){
                        val.valor = Cardapio.getMassa6Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

        //Massa7
        addToCartM7(){
            Cardapio.quantidade_massa7 += 1;
            Cardapio.quantidade_GlobalMassa7 += 1;
            var encontrou = true;
            this.comanda = {
                id: parseInt(Cardapio.getMassa7Id()),
                item: Cardapio.getMassa7Nome(),
                quantidade: Cardapio.quantidade_massa7,
                tipo: Cardapio.getMassa7Tipo(),
                valor: parseFloat(Cardapio.getMassa7Preco())
            }
            console.log("Criou comanda")
            if(!this.pedidos.length){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Sentou na mesa e fez o primeiro pedido")
            } else {
                var encontrou = false;
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 7){
                        obj.quantidade = Cardapio.quantidade_massa7;
                        encontrou = true;
                        console.log("Encontrou objeto, Quantidade alterada!")
                    }
            
                }
                
                if(encontrou == false){
                    this.pedidos.push(this.comanda)
                    this.total = this.total + this.comanda.valor;
                    console.log("Total somando")
                    console.log("Nao encontrou objeto, inserindo produto")
                } else {
                    this.pedidos.map((val) => {
                        if(val.id == 7){
                            val.valor = Cardapio.getMassa7Preco() * val.quantidade
                            console.log("Encontrou objeto, Atualizando o valor do pedido")
                        }
                    })
                    this.total = this.total + obj.valor
                    console.log("Total somando")
                }         
            }
            console.log("Fim do add")
        };

        //Massa8
    addToCartM8(){
        Cardapio.quantidade_massa8 += 1;
        Cardapio.quantidade_GlobalMassa8 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa8Id()),
            item: Cardapio.getMassa8Nome(),
            quantidade: Cardapio.quantidade_massa8,
            tipo: Cardapio.getMassa8Tipo(),
            valor: parseFloat(Cardapio.getMassa8Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 8){
                    obj.quantidade = Cardapio.quantidade_massa8;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 8){
                        val.valor = Cardapio.getMassa8Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    //Massa9
    addToCartM9(){
        Cardapio.quantidade_massa9 += 1;
        Cardapio.quantidade_GlobalMassa9 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getMassa9Id()),
            item: Cardapio.getMassa9Nome(),
            quantidade: Cardapio.quantidade_massa9,
            tipo: Cardapio.getMassa9Tipo(),
            valor: parseFloat(Cardapio.getMassa9Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 9){
                    obj.quantidade = Cardapio.quantidade_massa9;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 9){
                        val.valor = Cardapio.getMassa9Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    // Cardápio de bebidas

    addToCartB0(){
        Cardapio.quantidade_bebida0 += 1;
        Cardapio.quantidade_GlobalBebida0 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getBebida0Id()),
            item: Cardapio.getBebida0Nome(),
            quantidade: Cardapio.quantidade_bebida0,
            tipo: Cardapio.getBebida0Tipo(),
            valor: parseFloat(Cardapio.getBebida0Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 15){
                    obj.quantidade = Cardapio.quantidade_bebida0;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 15){
                        val.valor = Cardapio.getBebida0Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartB1(){
        Cardapio.quantidade_bebida1 += 1;
        Cardapio.quantidade_GlobalBebida1 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getBebida1Id()),
            item: Cardapio.getBebida1Nome(),
            quantidade: Cardapio.quantidade_bebida1,
            tipo: Cardapio.getBebida1Tipo(),
            valor: parseFloat(Cardapio.getBebida1Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 16){
                    obj.quantidade = Cardapio.quantidade_bebida1;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 16){
                        val.valor = Cardapio.getBebida1Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartB2(){
        Cardapio.quantidade_bebida2 += 1;
        Cardapio.quantidade_GlobalBebida2 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getBebida2Id()),
            item: Cardapio.getBebida2Nome(),
            quantidade: Cardapio.quantidade_bebida2,
            tipo: Cardapio.getBebida2Tipo(),
            valor: parseFloat(Cardapio.getBebida2Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 17){
                    obj.quantidade = Cardapio.quantidade_bebida2;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 17){
                        val.valor = Cardapio.getBebida2Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartB3(){
        Cardapio.quantidade_bebida3 += 1;
        Cardapio.quantidade_GlobalBebida3 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getBebida3Id()),
            item: Cardapio.getBebida3Nome(),
            quantidade: Cardapio.quantidade_bebida3,
            tipo: Cardapio.getBebida3Tipo(),
            valor: parseFloat(Cardapio.getBebida3Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 18){
                    obj.quantidade = Cardapio.quantidade_bebida3;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 18){
                        val.valor = Cardapio.getBebida3Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
    };

    addToCartB4(){
        Cardapio.quantidade_bebida4 += 1;
        Cardapio.quantidade_GlobalBebida4 += 1;
        var encontrou = true;
        this.comanda = {
            id: parseInt(Cardapio.getBebida4Id()),
            item: Cardapio.getBebida4Nome(),
            quantidade: Cardapio.quantidade_bebida4,
            tipo: Cardapio.getBebida4Tipo(),
            valor: parseFloat(Cardapio.getBebida4Preco())
        }
        console.log("Criou comanda")
        if(!this.pedidos.length){
            this.pedidos.push(this.comanda)
            this.total = this.total + this.comanda.valor;
            console.log("Sentou na mesa e fez o primeiro pedido")
        } else {
            var encontrou = false;
            for(var index = 0, total=this.pedidos.length; index < total; index++){
                var obj = this.pedidos[index];
                if(obj.id == 19){
                    obj.quantidade = Cardapio.quantidade_bebida4;
                    encontrou = true;
                    console.log("Encontrou objeto, Quantidade alterada!")
                }
        
            }
            
            if(encontrou == false){
                this.pedidos.push(this.comanda)
                this.total = this.total + this.comanda.valor;
                console.log("Total somando")
                console.log("Nao encontrou objeto, inserindo produto")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 19){
                        val.valor = Cardapio.getBebida4Preco() * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                    }
                })
                this.total = this.total + obj.valor
                console.log("Total somando")
            }         
        }
        console.log("Fim do add")
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