import {Cliente} from "./Cliente.js";

import {Cardapio} from "./Cardapio.js";

export class Pedidos extends Cliente {
    comanda;
    constructor(nome, email,){
        super(nome, email,);
        this.comanda = {}
        // this.total= 0;
    }
    // Quando efetuar o pedido **LEMBRAR DE ZERAR TODAS AS QUANTIDADES DO CARDAPIO**
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
        Cardapio.quantidade_massa9 = 0,
        console.log("resetou tudo")
    }
    

    //Adicionar ao Carrinho!
    
    //Cardápio de Pizzas
    addToCartP0 = () => {
        Cardapio.quantidade_pizza0 += 1;
        Cardapio.quantidade_GlobalPizza0 += 1;
        this.comanda = {
            total:this.total,
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
                console.log("Não encontrou o objeto específico, inserindo produto!")
            } else {
                this.pedidos.map((val) => {
                    if(val.id == 10){
                        val.valor = parseInt(Cardapio.getPizza0Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getPizza0Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartP1 = () => {
        Cardapio.quantidade_pizza1 += 1;
        Cardapio.quantidade_GlobalPizza1 += 1;
        this.comanda = {
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getPizza1Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getPizza1Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartP2 = () => {
        Cardapio.quantidade_pizza2 += 1;
        Cardapio.quantidade_GlobalPizza2 += 1;
        this.comanda = {
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getPizza2Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getPizza2Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartP3 = () => {
        Cardapio.quantidade_pizza3 += 1;
        Cardapio.quantidade_GlobalPizza3 += 1;
        this.comanda = {
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getPizza3Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getPizza3Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartP4 = () => {
        Cardapio.quantidade_pizza4 += 1;
        Cardapio.quantidade_GlobalPizza4 += 1;
        this.comanda = {
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getPizza4Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getPizza4Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getVegetarianoPreco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getVegetarianoPreco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa1Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa1Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa2Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa2Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa3Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa3Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa4Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa4Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa5Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa5Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa6Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa6Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
                total:this.total,
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
                            val.valor = parseInt(Cardapio.getMassa7Preco()) * val.quantidade
                            console.log("Encontrou objeto, Atualizando o valor do pedido")
                            console.log(`Total anterior: ${this.total}`)
                            this.total = this.total + parseInt(Cardapio.getMassa7Preco())
                            console.log(`Total atual: ${this.total}`)
                        }
                    })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa8Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa8Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getMassa9Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getMassa9Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
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
            total:this.total,
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
                        val.valor = parseInt(Cardapio.getBebida0Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getBebida0Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartB1(){
        Cardapio.quantidade_bebida1 += 1;
        Cardapio.quantidade_GlobalBebida1 += 1;
        var encontrou = true;
        this.comanda = {
            total:this.total,
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
                        val.valor = Cardapio.parseInt(getBebida1Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getBebida1Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartB2(){
        Cardapio.quantidade_bebida2 += 1;
        Cardapio.quantidade_GlobalBebida2 += 1;
        var encontrou = true;
        this.comanda = {
            total:this.total,
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
                        val.valor = Cardapio.parseInt(getBebida2Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getBebida2Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartB3(){
        Cardapio.quantidade_bebida3 += 1;
        Cardapio.quantidade_GlobalBebida3 += 1;
        var encontrou = true;
        this.comanda = {
            total:this.total,
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
                        val.valor = Cardapio.parseInt(getBebida3Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getBebida3Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };

    addToCartB4(){
        Cardapio.quantidade_bebida4 += 1;
        Cardapio.quantidade_GlobalBebida4 += 1;
        var encontrou = true;
        this.comanda = {
            total:this.total,
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
                        val.valor = Cardapio.parseInt(getBebida4Preco()) * val.quantidade
                        console.log("Encontrou objeto, Atualizando o valor do pedido")
                        console.log(`Total anterior: ${this.total}`)
                        this.total = this.total + parseInt(Cardapio.getBebida4Preco())
                        console.log(`Total atual: ${this.total}`)
                    }
                })
            }         
        }
        console.log("Fim do add")
    };


    //Remover do Carrinho!

    //Cardapio de Pizzas!
    //Remove Pizza0
    RemoveCartItemP0 = () => {
        console.log(`A quantidade de ${Cardapio.getPizza0Nome()} no seu pedido é: ${Cardapio.quantidade_pizza0}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_pizza0 > 0 && Cardapio.quantidade_GlobalPizza0 > 0){
                Cardapio.quantidade_pizza0 -= 1;
                Cardapio.quantidade_GlobalPizza0 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 10){
                        obj.quantidade = Cardapio.quantidade_pizza0;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getPizza0Nome()} no seu pedido é: ${Cardapio.quantidade_pizza0}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 10){
                            console.log(`Valor de Pizzas ${Cardapio.getPizza0Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getPizza0Preco()) * val.quantidade
                            console.log(`Valor de Pizzas ${Cardapio.getPizza0Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getPizza0Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 10){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getPizza0Nome()} é ${Cardapio.quantidade_pizza0}, portanto foi removida do carrinho!`)
                                        }
                                    })
                
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getPizza0Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_pizza0 == 0 && Cardapio.quantidade_GlobalPizza0 == 0){

                        console.log("Item não encontrado, adicione para poder remover.")
                
                } else {
                    // Se for < 0
                    Cardapio.quantidade_pizza0 = 0;
                    Cardapio.quantidade_GlobalPizza0 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 10){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getPizza0Nome()} é ${Cardapio.quantidade_pizza0}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getPizza0Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };
    
    //Remove Pizza1
    RemoveCartItemP1 = () => {
        console.log(`A quantidade de ${Cardapio.getPizza1Nome()} no seu pedido é: ${Cardapio.quantidade_pizza1}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_pizza1 > 0 && Cardapio.quantidade_GlobalPizza1 > 0){
                Cardapio.quantidade_pizza1 -= 1;
                Cardapio.quantidade_GlobalPizza1 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 11){
                        obj.quantidade = Cardapio.quantidade_pizza1;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getPizza1Nome()} no seu pedido é: ${Cardapio.quantidade_pizza1}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 11){
                            console.log(`Valor de Pizzas ${Cardapio.getPizza1Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getPizza1Preco()) * val.quantidade
                            console.log(`Valor de Pizzas ${Cardapio.getPizza1Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getPizza1Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 11){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getPizza1Nome()} é ${Cardapio.quantidade_pizza1}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getPizza1Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_pizza1 == 0 && Cardapio.quantidade_GlobalPizza1 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")

                } else {
                    // Se for < 0
                    Cardapio.quantidade_pizza1 = 0;
                    Cardapio.quantidade_GlobalPizza1 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 11){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getPizza1Nome()} é ${Cardapio.quantidade_pizza1}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getPizza1Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Pizza2
    RemoveCartItemP2 = () => {
        console.log(`A quantidade de ${Cardapio.getPizza2Nome()} no seu pedido é: ${Cardapio.quantidade_pizza2}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_pizza2 > 0 && Cardapio.quantidade_GlobalPizza2 > 0){
                Cardapio.quantidade_pizza2 -= 1;
                Cardapio.quantidade_GlobalPizza2 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 12){
                        obj.quantidade = Cardapio.quantidade_pizza2;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getPizza2Nome()} no seu pedido é: ${Cardapio.quantidade_pizza2}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 12){
                            console.log(`Valor de Pizzas ${Cardapio.getPizza2Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getPizza2Preco()) * val.quantidade
                            console.log(`Valor de Pizzas ${Cardapio.getPizza2Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getPizza2Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 12){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getPizza2Nome()} é ${Cardapio.quantidade_pizza2}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getPizza2Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_pizza2 == 0 && Cardapio.quantidade_GlobalPizza2 == 0){

                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_pizza2 = 0;
                    Cardapio.quantidade_GlobalPizza2 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 12){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getPizza2Nome()} é ${Cardapio.quantidade_pizza2}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getPizza2Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Pizza3
    RemoveCartItemP3 = () => {
        console.log(`A quantidade de ${Cardapio.getPizza3Nome()} no seu pedido é: ${Cardapio.quantidade_pizza3}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_pizza3 > 0 && Cardapio.quantidade_GlobalPizza3 > 0){
                Cardapio.quantidade_pizza3 -= 1;
                Cardapio.quantidade_GlobalPizza3 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 13){
                        obj.quantidade = Cardapio.quantidade_pizza3;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getPizza3Nome()} no seu pedido é: ${Cardapio.quantidade_pizza3}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 13){
                            console.log(`Valor de Pizzas ${Cardapio.getPizza3Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getPizza3Preco()) * val.quantidade
                            console.log(`Valor de Pizzas ${Cardapio.getPizza3Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getPizza3Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 13){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getPizza3Nome()} é ${Cardapio.quantidade_pizza3}, portanto foi removida do carrinho!`)
                                        }
                                    })

                                } else {
                                    this.total = this.total - parseInt(Cardapio.getPizza3Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_pizza3 == 0 && Cardapio.quantidade_GlobalPizza3 == 0){

                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_pizza3 = 0;
                    Cardapio.quantidade_GlobalPizza3 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 13){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getPizza3Nome()} é ${Cardapio.quantidade_pizza3}, portanto foi removida do carrinho!`)
                        }
                    })
                }
            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getPizza3Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    RemoveCartItemP4 = () => {
        console.log(`A quantidade de ${Cardapio.getPizza4Nome()} no seu pedido é: ${Cardapio.quantidade_pizza4}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_pizza4 > 0 && Cardapio.quantidade_GlobalPizza4 > 0){
                Cardapio.quantidade_pizza4 -= 1;
                Cardapio.quantidade_GlobalPizza4 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 14){
                        obj.quantidade = Cardapio.quantidade_pizza4;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getPizza4Nome()} no seu pedido é: ${Cardapio.quantidade_pizza4}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 14){
                            console.log(`Valor de Pizzas ${Cardapio.getPizza4Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getPizza4Preco()) * val.quantidade
                            console.log(`Valor de Pizzas ${Cardapio.getPizza4Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getPizza4Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 14){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getPizza4Nome()} é ${Cardapio.quantidade_pizza4}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getPizza4Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_pizza4 == 0 && Cardapio.quantidade_GlobalPizza4 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_pizza4 = 0;
                    Cardapio.quantidade_GlobalPizza4 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 14){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getPizza4Nome()} é ${Cardapio.quantidade_pizza4}, portanto foi removida do carrinho!`)
                        }
                    })
                        console.log("Item não encontrado, adicione para poder remover.")
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getPizza4Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Cardapio de Bebibas!!
    //Remove Bebidas 0
    RemoveCartItemB0 = () => {
        console.log(`A quantidade de ${Cardapio.getBebida0Nome()} no seu pedido é: ${Cardapio.quantidade_bebida0}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_bebida0 > 0 && Cardapio.quantidade_GlobalBebida0 > 0){
                Cardapio.quantidade_bebida0 -= 1;
                Cardapio.quantidade_GlobalBebida0 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 15){
                        obj.quantidade = Cardapio.quantidade_bebida0;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getBebida0Nome()} no seu pedido é: ${Cardapio.quantidade_bebida0}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 15){
                            console.log(`Valor de Bebidas ${Cardapio.getBebida0Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getBebida0Preco()) * val.quantidade
                            console.log(`Valor de Bebidas ${Cardapio.getBebida0Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getBebida0Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 15){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getBebida0Nome()} é ${Cardapio.quantidade_bebida0}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getBebida0Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_bebida0 == 0 && Cardapio.quantidade_GlobalBebida0 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_bebida0 = 0;
                    Cardapio.quantidade_GlobalBebida0 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 15){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getBebida0Nome()} é ${Cardapio.quantidade_bebida0}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getBebida0Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };
    //Remove Bebida 1
    RemoveCartItemB1 = () => {
        console.log(`A quantidade de ${Cardapio.getBebida1Nome()} no seu pedido é: ${Cardapio.quantidade_bebida1}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_bebida1 > 0 && Cardapio.quantidade_GlobalBebida1 > 0){
                Cardapio.quantidade_bebida1 -= 1;
                Cardapio.quantidade_GlobalBebida1 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 16){
                        obj.quantidade = Cardapio.quantidade_bebida1;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getBebida1Nome()} no seu pedido é: ${Cardapio.quantidade_bebida1}`)
                    }
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 16){
                            console.log(`Valor de Bebidas ${Cardapio.getBebida1Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getBebida1Preco()) * val.quantidade
                            console.log(`Valor de Bebidas ${Cardapio.getBebida1Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getBebida1Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 16){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getBebida1Nome()} é ${Cardapio.quantidade_bebida1}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getBebida1Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_bebida1 == 0 && Cardapio.quantidade_GlobalBebida1 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_bebida1 = 0;
                    Cardapio.quantidade_GlobalBebida1 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 16){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getBebida1Nome()} é ${Cardapio.quantidade_bebida1}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getBebida1Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Bebidas 2
    RemoveCartItemB2 = () => {
        console.log(`A quantidade de ${Cardapio.getBebida2Nome()} no seu pedido é: ${Cardapio.quantidade_bebida2}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_bebida2 > 0 && Cardapio.quantidade_GlobalBebida2 > 0){
                Cardapio.quantidade_bebida2 -= 1;
                Cardapio.quantidade_GlobalBebida2 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 17){
                        obj.quantidade = Cardapio.quantidade_bebida2;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getBebida2Nome()} no seu pedido é: ${Cardapio.quantidade_bebida2}`)
                    }
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 17){
                            console.log(`Valor de Bebidas ${Cardapio.getBebida2Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getBebida2Preco()) * val.quantidade
                            console.log(`Valor de Bebidas ${Cardapio.getBebida2Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getBebida2Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 17){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getBebida2Nome()} é ${Cardapio.quantidade_bebida2}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getBebida2Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_bebida2 == 0 && Cardapio.quantidade_GlobalBebida2 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_bebida2 = 0;
                    Cardapio.quantidade_GlobalBebida2 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 17){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getBebida2Nome()} é ${Cardapio.quantidade_bebida2}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getBebida2Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Bebidas 3
    RemoveCartItemB3 = () => {
        console.log(`A quantidade de ${Cardapio.getBebida3Nome()} no seu pedido é: ${Cardapio.quantidade_bebida3}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_bebida3 > 0 && Cardapio.quantidade_GlobalBebida3 > 0){
                Cardapio.quantidade_bebida3 -= 1;
                Cardapio.quantidade_GlobalBebida3 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 18){
                        obj.quantidade = Cardapio.quantidade_bebida3;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getBebida3Nome()} no seu pedido é: ${Cardapio.quantidade_bebida3}`) 
                    }
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 18){
                            console.log(`Valor de Bebidas ${Cardapio.getBebida3Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getBebida3Preco()) * val.quantidade
                            console.log(`Valor de Bebidas ${Cardapio.getBebida3Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getBebida3Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 18){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getBebida3Nome()} é ${Cardapio.quantidade_bebida3}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getBebida3Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_bebida3 == 0 && Cardapio.quantidade_GlobalBebida3 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_bebida3 = 0;
                    Cardapio.quantidade_GlobalBebida3 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 18){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getBebida03ome()} é ${Cardapio.quantidade_bebida3}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getBebida3Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Bebidas 4
    RemoveCartItemB4 = () => {
        console.log(`A quantidade de ${Cardapio.getBebida4Nome()} no seu pedido é: ${Cardapio.quantidade_bebida4}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_bebida4 > 0 && Cardapio.quantidade_GlobalBebida4 > 0){
                Cardapio.quantidade_bebida4 -= 1;
                Cardapio.quantidade_GlobalBebida4 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 19){
                        obj.quantidade = Cardapio.quantidade_bebida4;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getBebida4Nome()} no seu pedido é: ${Cardapio.quantidade_bebida4}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 19){
                            console.log(`Valor de Bebidas ${Cardapio.getBebida4Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getBebida4Preco()) * val.quantidade
                            console.log(`Valor de Bebidas ${Cardapio.getBebida4Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getBebida4Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 19){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getBebida4Nome()} é ${Cardapio.quantidade_bebida4}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getBebida4Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_bebida4 == 0 && Cardapio.quantidade_GlobalBebida4 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_bebida0 = 0;
                    Cardapio.quantidade_GlobalBebida0 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 19){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getBebida4Nome()} é ${Cardapio.quantidade_bebida4}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getBebida4Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Cardapio de Massas!!
    //Remove Massas 0
    RemoveCartItemM0 = () => {
        console.log(`A quantidade de ${Cardapio.getVegetarianoNome()} no seu pedido é: ${Cardapio.quantidade_vegetariano}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_vegetariano > 0 && Cardapio.quantidade_GlobalMassa0 > 0){
                Cardapio.quantidade_vegetariano -= 1;
                Cardapio.quantidade_GlobalMassa0 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 20){
                        obj.quantidade = Cardapio.quantidade_vegetariano;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getVegetarianoNome()} no seu pedido é: ${Cardapio.quantidade_vegetariano}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 20){
                            console.log(`Valor de ${Cardapio.getVegetarianoNome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getVegetarianoPreco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getVegetarianoNome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getVegetarianoPreco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 20){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getVegetarianoNome()} é ${Cardapio.quantidade_vegetariano}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getVegetarianoPreco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_vegetariano == 0 && Cardapio.quantidade_GlobalMassa0 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_vegetariano = 0;
                    Cardapio.quantidade_GlobalMassa0 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 20){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getVegetarianoNome()} é ${Cardapio.quantidade_vegetariano}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getVegetarianoNome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };


    //Remove Massas 1
    RemoveCartItemM1 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa1Nome()} no seu pedido é: ${Cardapio.quantidade_massa1}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa1 > 0 && Cardapio.quantidade_GlobalMassa1 > 0){
                Cardapio.quantidade_massa1 -= 1;
                Cardapio.quantidade_GlobalMassa1 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 1){
                        obj.quantidade = Cardapio.quantidade_massa1;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa1Nome()} no seu pedido é: ${Cardapio.quantidade_massa1}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 1){
                            console.log(`Valor de ${Cardapio.getMassa1Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa1Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa1Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa1Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 1){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa1Nome()} é ${Cardapio.quantidade_massa1}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa1Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa1 == 0 && Cardapio.quantidade_GlobalMassa1 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa1 = 0;
                    Cardapio.quantidade_GlobalMassa1 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 1){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa1Nome()} é ${Cardapio.quantidade_massa1}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa1Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };


    //Remove Massas 2
    RemoveCartItemM2 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa2Nome()} no seu pedido é: ${Cardapio.quantidade_massa2}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa2 > 0 && Cardapio.quantidade_GlobalMassa2 > 0){
                Cardapio.quantidade_massa2 -= 1;
                Cardapio.quantidade_GlobalMassa2 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 2){
                        obj.quantidade = Cardapio.quantidade_massa2;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa2Nome()} no seu pedido é: ${Cardapio.quantidade_massa2}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 2){
                            console.log(`Valor de ${Cardapio.getMassa2Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa2Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa2Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa2Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 2){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa2Nome()} é ${Cardapio.quantidade_massa2}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa2Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa2 == 0 && Cardapio.quantidade_GlobalMassa2 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa2 = 0;
                    Cardapio.quantidade_GlobalMassa2 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 2){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa2Nome()} é ${Cardapio.quantidade_massa2}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa2Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Massas 3
    RemoveCartItemM3 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa3Nome()} no seu pedido é: ${Cardapio.quantidade_massa3}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa3 > 0 && Cardapio.quantidade_GlobalMassa3 > 0){
                Cardapio.quantidade_massa3 -= 1;
                Cardapio.quantidade_GlobalMassa3 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 3){
                        obj.quantidade = Cardapio.quantidade_massa3;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa3Nome()} no seu pedido é: ${Cardapio.quantidade_massa3}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 3){
                            console.log(`Valor de ${Cardapio.getMassa3Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa3Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa3Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa3Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 3){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa3Nome()} é ${Cardapio.quantidade_massa3}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa3Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa3 == 0 && Cardapio.quantidade_GlobalMassa3 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa3 = 0;
                    Cardapio.quantidade_GlobalMassa3 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 3){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa3Nome()} é ${Cardapio.quantidade_massa3}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa3Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Massas 4
    RemoveCartItemM4 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa4Nome()} no seu pedido é: ${Cardapio.quantidade_massa4}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa4 > 0 && Cardapio.quantidade_GlobalMassa4 > 0){
                Cardapio.quantidade_massa4 -= 1;
                Cardapio.quantidade_GlobalMassa4 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 4){
                        obj.quantidade = Cardapio.quantidade_massa4;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa4Nome()} no seu pedido é: ${Cardapio.quantidade_massa4}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 4){
                            console.log(`Valor de ${Cardapio.getMassa4Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa4Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa4Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa4Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 4){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa4Nome()} é ${Cardapio.quantidade_massa4}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa4Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa4 == 0 && Cardapio.quantidade_GlobalMassa4 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa4 = 0;
                    Cardapio.quantidade_GlobalMassa4 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 4){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa4Nome()} é ${Cardapio.quantidade_massa4}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa4Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Massas 5
    RemoveCartItemM5 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa5Nome()} no seu pedido é: ${Cardapio.quantidade_massa5}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa5 > 0 && Cardapio.quantidade_GlobalMassa5 > 0){
                Cardapio.quantidade_massa5 -= 1;
                Cardapio.quantidade_GlobalMassa5 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 5){
                        obj.quantidade = Cardapio.quantidade_massa5;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa5Nome()} no seu pedido é: ${Cardapio.quantidade_massa5}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 5){
                            console.log(`Valor de ${Cardapio.getMassa5Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa5Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa5Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa5Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 5){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa5Nome()} é ${Cardapio.quantidade_massa5}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa5Preco())
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa5 == 0 && Cardapio.quantidade_GlobalMassa5 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa5 = 0;
                    Cardapio.quantidade_GlobalMassa5 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 5){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa5Nome()} é ${Cardapio.quantidade_massa5}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa5Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Massas 6
    RemoveCartItemM6 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa6Nome()} no seu pedido é: ${Cardapio.quantidade_massa6}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa6 > 0 && Cardapio.quantidade_GlobalMassa6 > 0){
                Cardapio.quantidade_massa6 -= 1;
                Cardapio.quantidade_GlobalMassa6 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 6){
                        obj.quantidade = Cardapio.quantidade_massa1;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa6Nome()} no seu pedido é: ${Cardapio.quantidade_massa6}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 6){
                            console.log(`Valor de ${Cardapio.getMassa6Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa6Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa6Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa6Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 6){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa6Nome()} é ${Cardapio.quantidade_massa6}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa6Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa6 == 0 && Cardapio.quantidade_GlobalMassa6 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa6 = 0;
                    Cardapio.quantidade_GlobalMassa6 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 6){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa6Nome()} é ${Cardapio.quantidade_massa6}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa6Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };


    //Remove Massas 7
    RemoveCartItemM7 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa7Nome()} no seu pedido é: ${Cardapio.quantidade_massa7}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa7 > 0 && Cardapio.quantidade_GlobalMassa7 > 0){
                Cardapio.quantidade_massa7 -= 1;
                Cardapio.quantidade_GlobalMassa7 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 7){
                        obj.quantidade = Cardapio.quantidade_massa7;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa7Nome()} no seu pedido é: ${Cardapio.quantidade_massa7}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 7){
                            console.log(`Valor de ${Cardapio.getMassa7Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa7Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa7Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa7Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 7){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa7Nome()} é ${Cardapio.quantidade_massa7}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa7Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa7 == 0 && Cardapio.quantidade_GlobalMassa7 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa7 = 0;
                    Cardapio.quantidade_GlobalMassa7 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 7){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa7Nome()} é ${Cardapio.quantidade_massa7}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa7Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Massas 8
    RemoveCartItemM8 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa8Nome()} no seu pedido é: ${Cardapio.quantidade_massa8}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa8 > 0 && Cardapio.quantidade_GlobalMassa8 > 0){
                Cardapio.quantidade_massa8 -= 1;
                Cardapio.quantidade_GlobalMassa8 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 8){
                        obj.quantidade = Cardapio.quantidade_massa1;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa8Nome()} no seu pedido é: ${Cardapio.quantidade_massa8}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 8){
                            console.log(`Valor de ${Cardapio.getMassa8Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa8Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa8Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa8Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 8){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa8Nome()} é ${Cardapio.quantidade_massa8}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa8Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa8 == 0 && Cardapio.quantidade_GlobalMassa8 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa8 = 0;
                    Cardapio.quantidade_GlobalMassa8 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 8){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa8Nome()} é ${Cardapio.quantidade_massa8}, portanto foi removida do carrinho!`)
                        }
                    })
                }

            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa8Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };

    //Remove Massas 9
    RemoveCartItemM9 = () => {
        console.log(`A quantidade de ${Cardapio.getMassa9Nome()} no seu pedido é: ${Cardapio.quantidade_massa9}`)
        console.log("Procurando item para remoção...")
        if(!this.pedidos.length){
            console.log("Não há oque remover")
        } else {
            var encontrou = false;
            if(Cardapio.quantidade_massa9 > 0 && Cardapio.quantidade_GlobalMassa9 > 0){
                Cardapio.quantidade_massa9 -= 1;
                Cardapio.quantidade_GlobalMassa9 -= 1;       
                for(var index = 0, total=this.pedidos.length; index < total; index++){
                    var obj = this.pedidos[index];
                    if(obj.id == 9){
                        obj.quantidade = Cardapio.quantidade_massa9;
                        encontrou = true;
                        console.log("Encontrou objeto, Removendo 1 item. Quantidade alterada!")                    
                        console.log(`A quantidade de ${Cardapio.getMassa9Nome()} no seu pedido é: ${Cardapio.quantidade_massa9}`)
                    } 
                }
                
                if(encontrou == true){
                    this.pedidos.map((val) => {
                        if(val.id == 9){
                            console.log(`Valor de ${Cardapio.getMassa9Nome()} antes de ser Settado: ${val.valor}`) 
                            val.valor = parseInt(Cardapio.getMassa9Preco()) * val.quantidade
                            console.log(`Valor de ${Cardapio.getMassa9Nome()} após cálculo de valor: ${val.valor}`) 
                            console.log(`O total antes é: ${this.total}`)
                            if(this.total == val.valor){
                                this.total = val.valor
                                console.log("Encontrou objeto, Atualizando o valor do pedido")
                                console.log(`O total depois é: ${this.total}`)
                            } else {
                                if(val.valor == 0){
                                    this.total = this.total - parseInt(Cardapio.getMassa9Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                    this.pedidos.map((x)=>{
                                        if(x.id == 9){
                                            var index = this.pedidos.indexOf(x)
                                            this.pedidos.splice(index, 1)
                                            console.log(`Quantidade de ${Cardapio.getMassa9Nome()} é ${Cardapio.quantidade_massa9}, portanto foi removida do carrinho!`)
                                        }
                                    })
                                } else {
                                    this.total = this.total - parseInt(Cardapio.getMassa9Preco());
                                    console.log(`Encontrou objeto com valor atual igual a ${val.valor} Atualizando o valor do pedido`)
                                    console.log(`O total depois é: ${this.total}`)
                                }
                            }

                        }
                    })
                

                }
            }else{
                if(Cardapio.quantidade_massa9 == 0 && Cardapio.quantidade_GlobalMassa9 == 0){
                        console.log("Item não encontrado, adicione para poder remover.")
                } else {
                    // Se for < 0
                    Cardapio.quantidade_massa9 = 0;
                    Cardapio.quantidade_GlobalMassa9 = 0;
                    this.pedidos.map((x)=>{
                        if(x.id == 9){
                            var index = this.pedidos.indexOf(x)
                            this.pedidos.splice(index, 1)
                            console.log(`Quantidade de ${Cardapio.getMassa9Nome()} é ${Cardapio.quantidade_massa9}, portanto foi removida do carrinho!`)
                        }
                    })
                }
            }
            console.log(`Fim da verificação se Quantidades de ${Cardapio.getMassa9Nome()} é válida.`)  
        } 
        console.log("Fim do Remove!")
    };
}
