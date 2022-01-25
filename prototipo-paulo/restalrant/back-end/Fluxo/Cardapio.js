export class Cardapio { 
    static Massas = [
        {
            id: 20,
            nome: "Vegetariano",
            img: "http://s2.glbimg.com/EFoi-6iFchrfO3HXBJQMlpoknhM=/smart/e.glbimg.com/og/ed/f/original/2017/11/28/receita-macarrao-com-almondegas-vegano_01.jpg",
            quantidade:0,
            preco:40,
            tipo: "prato"
        },
        {
            id: 1,
            nome: "macarrao com atum",
            img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-com-atum.jpg",
            quantidade:0,
            preco:28,
            tipo: "prato"
        },
        {
            id: 2,
            nome: "macarrao com frango",
            img: "https://img.itdg.com.br/tdg/images/recipes/000/173/054/162457/162457_original.jpg?mode=crop&width=710&height=400",
            quantidade:0,
            preco:45,
            tipo: "prato"
        },
        {
            id: 3,
            nome: "macarrao espaguet a bolonhesa",
            img: "https://www.sabornamesa.com.br/media/k2/items/cache/9e9e1351d6a763151a8613c1dd10d427_XL.jpg",
            quantidade:0,
            preco:68,
            tipo: "prato"
        },
        {
            id: 4,
            nome: "macarrao ravioli ao molho branco",
            img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/ravioli-molho-4-queijos-1024x683.jpg",
            quantidade:0,
            preco:35,
            tipo: "prato"
        },
        {
            id: 5,
            nome: "Risotto Gamberettie Spinaci",
            img: "https://blog.giallozafferano.it/chezbibia/wp-content/uploads/2015/03/risotto-spinaci-e-gamberetti-2.jpg",
            quantidade:0,
            descricao:"Risoto com camarões flambado, espinafre, leve toque de molho da Nona e grana padano",
            preco:36,
            tipo: "prato"
        },
        {
            id: 6,
            nome: "Rotoloni",
            img: "http://2.bp.blogspot.com/-uLA0fXBNKIM/TswpA4TqK_I/AAAAAAAAAuk/lz_tjjPYVH4/s1600/2011-11-22+18.32.17.jpg",
            quantidade:0,
            descricao:"rotoloni de queijo e presunto ao duo de molhos pomodoro e bechamel",
            preco:37,
            tipo: "prato"
        },
        {
            id: 7,
            nome: "Rondelli ao Molho Quatro Queijos",
            img: "https://www.curraldeminas.com.br/wp-content/uploads/2016/02/rondelli-quatro-queijos.jpg",
            quantidade:0,
            descricao:"Massa artesanal com mussarela e o molho branco com mix de queijos",
            preco:42,
            tipo: "prato"
        },
        {
            id: 8,
            nome: "Rondelli ao Molho Bolonhesa",
            img: "https://lcdelivery-images.s3.sa-east-1.amazonaws.com/tlduUrRR8.png",
            quantidade:0,
            descricao:"Massa artesanal com mussarela e o molho de tomate com carne moida",
            preco:42,
            tipo: "prato"
        },
        {
            id: 9,
            nome: "Inhoque ao Sugo",
            img: "https://2.bp.blogspot.com/-MvyIoUyS48g/TocKqQX6jII/AAAAAAAAC5U/1xPZAaFz7nk/s1600/nhoque.JPG",
            quantidade:0,
            descricao: "Massa artesanal feita com batatas",
            preco:28,
            tipo: "prato"
        },

        // {
        //     id: 10,
        //     nome: "Lasagna",
        //     img: "https://sanremo.imgix.net/2017/05/Traditional-Lasagna-Plated-1500x1000.jpg?auto=format&w=2000",
        //     quantidade:0,
        //     descricao: "Receita Bolognese italiano, carne, presunto, queijo",
        //     preco:36,
        //     tipo: "prato"
        // },
        // {
        //     id: 11,
        //     nome: "Polpettone",
        //     img: "https://ruarocha.files.wordpress.com/2020/10/3c58e4ac-6e7b-48fb-96c6-982726bd569c.jpg?w=1024",
        //     quantidade:0,
        //     descricao: "Carne com molho de tomate, tomete, cebola e salsa",
        //     preco:39,
        //     tipo: "prato"
        // },


    ]

    static pizzas = [
            {
                id: 10,
                nome: "MUSSARELA",
                img: "https://www.picanhacia.com.br/wp-content/uploads/2017/02/produto_pizza_mussarela-1.jpg",
                quantidade: Cardapio.quantidade_pizza0,
                descricao:"Queijo mussarela e azeitonas",
                preco:35,
                tipo: "prato"
            },
            {
                id: 11,
                nome: "CALABRESA",
                img: "https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
                quantidade:0,
                descricao:"Queijo mussarela, calabresa, cebolas e azeitonas",
                preco:40,
                tipo: "prato"
            },
            {
                id: 12,
                nome: "PORTUGUESA",
                img: "https://www.nidelins.com.br/wp-content/uploads/2019/08/Top-Pizzas-Pizza-Portuguesa-.jpg",
                quantidade:0,
                descricao:"Queijo mussarela, calabresa, presunto, cebolas, ovos e azeitonas",
                preco:42,
                tipo: "prato"
            },
            {
                id: 13,
                nome: "ATUM",
                img: "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2015/03/pizza_atum_especial.jpg",
                quantidade:0,
                descricao:"Queijo mussarela, atum ralado, cebolas e azeitonas",
                preco:45,
                tipo: "prato"
            },
            {
                id: 14,
                nome: "NAPOLITANA",
                img: "https://portalsabores.com.br/wp-content/uploads/2015/05/pizza-napolitana.jpg",
                quantidade:0,
                descricao: "Queijo mussarela, tomates, queijo parmesao e alho frito",
                preco:37,
                tipo: "prato"
            },


            // {
            //     id: 17,
            //     nome: "CAMARAO",
            //     img: "https://a-static.mlcdn.com.br/1500x1500/pizza-camarao-2-saborosa-e-caprichada/restauranteepizzariasensacao/43af3346bf2d11ebaa364201ac18500e/4fd2441426f9d641a8108ceeb9243a83.jpg",
            //     quantidade:0,
            //     descricao: "Queijo mussarela, camarao, cebola, salsa",
            //     preco:45,
            //     tipo: "prato"
            // },

    ]
        static bebidas = [
            {
                id: 15,
                nome: "Agua Mineral",
                img: "https://imagens.ne10.uol.com.br/img/imagens/2021/02/16/454648b027_agua.jpg",
                quantidade:0,
                preco:3,
                tipo: "liquido"
            },
            {
                id: 16,
                nome: "Refrigerante 1 Litro",
                img: "https://i.pinimg.com/originals/99/70/29/997029c827d5bbd693f570196687487d.png",
                quantidade:0,
                preco:5,
                tipo: "liquido"
            },
            {
                id: 17,
                nome: "Cerveja",
                img: "https://exame.com/wp-content/uploads/2020/11/cerveja-gelada-e1598542702646-1.jpg",
                quantidade:0,
                preco:10,
                tipo: "liquido"
            },
            {
                id: 18,
                nome: "Jarra de Suco 1 Litro",
                img: "http://i.mlcdn.com.br/portaldalu/fotosconteudo/86846_00.jpg",
                quantidade:0,
                preco:14,
                tipo: "liquido"
            },
            {
                id: 19,
                nome: "Vinho",
                img: "https://www.divvino.com.br/blog/wp-content/uploads/2019/06/dia-mundial-do-vinho.jpg" ,
                quantidade:0,
                preco:36,
                tipo: "liquido"
            },

            
            // {
            //     id: 24,
            //     nome: "Vinho Branco",
            //     img: "https://emporioconfrades.com.br/wp-content/uploads/2019/08/tacas-de-vinho-branco.jpg",
            //     quantidade:0,
            //     preco:40,
            //     tipo: "liquido"
            // },
            
        ]

    // Contadores Static
    //Pizzas
    static quantidade_pizza0 = 0;
    static quantidade_pizza1 = 0; 
    static quantidade_pizza2 = 0; 
    static quantidade_pizza3 = 0;
    static quantidade_pizza4 = 0;  
    //Bebidas
    static quantidade_bebida0 = 0;
    static quantidade_bebida1 = 0;
    static quantidade_bebida2 = 0;
    static quantidade_bebida3 = 0;
    static quantidade_bebida4 = 0;
    //Massas
    static quantidade_vegetariano = 0;
    static quantidade_massa1 = 0;
    static quantidade_massa2 = 0;
    static quantidade_massa3 = 0;
    static quantidade_massa4 = 0;
    static quantidade_massa5 = 0;
    static quantidade_massa6 = 0;
    static quantidade_massa7 = 0;
    static quantidade_massa8 = 0;
    static quantidade_massa9 = 0;
    
    //Contadores Globais de pedidos feitos
    //Pizzas
    static quantidade_GlobalPizza0 = 0;
    static quantidade_GlobalPizza1 = 0; 
    static quantidade_GlobalPizza2 = 0; 
    static quantidade_GlobalPizza3 = 0;
    static quantidade_GlobalPizza4 = 0;  
    //Bebidas
    static quantidade_GlobalBebida0 = 0;
    static quantidade_GlobalBebida1 = 0;
    static quantidade_GlobalBebida2 = 0;
    static quantidade_GlobalBebida3 = 0;
    static quantidade_GlobalBebida4 = 0;
    //Massas
    static quantidade_GlobalMassa0 = 0;
    static quantidade_GlobalMassa1 = 0;
    static quantidade_GlobalMassa2 = 0;
    static quantidade_GlobalMassa3 = 0;
    static quantidade_GlobalMassa4 = 0;
    static quantidade_GlobalMassa5 = 0;
    static quantidade_GlobalMassa6 = 0;
    static quantidade_GlobalMassa7 = 0;
    static quantidade_GlobalMassa8 = 0;
    static quantidade_GlobalMassa9 = 0;

    constructor(){
    if(this.constructor == Cardapio){
        throw new Error("Você não deveria instânciar um objeto do tipo Cardapio diretamente, pois essa é uma classe Abstrata.")
    }
    }

//Getters

//Cardapio Massas
    
    //Vegetariano
    static getVegetarianoId = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 20){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getVegetarianoNome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 20){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getVegetarianoTipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 20){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getVegetarianoPreco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 20){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 1

    static getMassa1Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 1){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa1Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 1){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa1Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 1){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa1Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 1){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa1Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 1){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 2

    static getMassa2Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 2){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa2Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 2){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa2Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 2){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa2Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 2){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa2Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 2){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 3

    static getMassa3Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 3){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa3Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 3){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa3Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 3){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa3Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 3){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa3Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 3){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }
    //Massa 4

    static getMassa4Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 4){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa4Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 4){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa4Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 4){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa4Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 4){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa4Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 4){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 5

    static getMassa5Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 5){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa5Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 5){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa5Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 5){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa5Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 5){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa5Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 5){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 6

    static getMassa6Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 6){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa6Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 6){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa6Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 6){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa6Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 6){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa6Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 6){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 7

    static getMassa7Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 7){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa7Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 7){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa7Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 7){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa7Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 7){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa7Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 7){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 8

    static getMassa8Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 8){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa8Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 8){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa8Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 8){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa8Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 8){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa8Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 8){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    //Massa 9

    static getMassa9Id = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 9){
                return val.id
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }


    static getMassa9Nome = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 9){
                return val.nome
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa9Quantidade = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 9){
                return val.quantidade
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa9Tipo = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 9){
                return val.tipo
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

    static getMassa9Preco = () => {
        return Cardapio.Massas.map((val) =>{
            if(val.id == 9){
                return val.preco
            }
        }).filter(notUndefined => notUndefined !== undefined).join(', ');
    }

//Cardapio Pizza
        //Pizza0
        static getPizza0Id = () => {
        return Cardapio.pizzas.map((val) =>{
                if(val.id == 10){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza0Nome = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 10){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza0Tipo = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 10){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getPizza0Preco = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 10){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Pizza1
        static getPizza1Id = () => {
        return Cardapio.pizzas.map((val) =>{
                if(val.id == 11){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza1Nome = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 11){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza1Tipo = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 11){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getPizza1Preco = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 11){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Pizza2
        static getPizza2Id = () => {
        return Cardapio.pizzas.map((val) =>{
                if(val.id == 12){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza2Nome = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 12){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getPizza2Tipo = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 12){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getPizza2Preco = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 12){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Pizza3
        static getPizza3Id = () => {
        return Cardapio.pizzas.map((val) =>{
                if(val.id == 13){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza3Nome = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 13){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getPizza3Tipo = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 13){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getPizza3Preco = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 13){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Pizza4
        static getPizza4Id = () => {
        return Cardapio.pizzas.map((val) =>{
                if(val.id == 14){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza4Nome = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 14){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getPizza4Tipo = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 14){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getPizza4Preco = () => {
            return Cardapio.pizzas.map((val) =>{
                if(val.id == 14){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }
    
    
//Cardapio Bebidas
        //Bebida0
        static getBebida0Id = () => {
        return Cardapio.bebidas.map((val) =>{
                if(val.id == 15){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida0Nome = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 15){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida0Tipo = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 15){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getBebida0Preco = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 15){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Bebida1
        static getBebida1Id = () => {
        return Cardapio.bebidas.map((val) =>{
                if(val.id == 16){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida1Nome = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 16){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida1Tipo = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 16){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getBebida1Preco = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 16){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Bebida2
        static getBebida2Id = () => {
        return Cardapio.bebidas.map((val) =>{
                if(val.id == 17){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida2Nome = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 17){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida2Tipo = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 17){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getBebida2Preco = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 17){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Bebida3
        static getBebida3Id = () => {
        return Cardapio.bebidas.map((val) =>{
                if(val.id == 18){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida3Nome = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 18){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getBebida3Quantidade = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 18){
                    return val.quantidade
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getBebida3Tipo = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 18){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getBebida3Preco = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 18){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

            //Bebida4
        static getBebida4Id = () => {
        return Cardapio.bebidas.map((val) =>{
                if(val.id == 19){
                    return val.id
                    
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida4Nome = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 19){
                    return val.nome
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }

        static getBebida4Tipo = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 19){
                    return val.tipo
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }


        static getBebida4Preco = () => {
            return Cardapio.bebidas.map((val) =>{
                if(val.id == 19){
                    return val.preco
                }
            }).filter(notUndefined => notUndefined !== undefined).join(', ');
        }   
} 