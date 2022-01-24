import {Usuario} from "../ValidarSenha/Usuario.js"
import {ValidarSenha} from "../ValidarSenha/ValidarSenha.js"
import {Admin} from "../ValidarSenha/Admin.js"
import {Cliente} from "./Cliente.js"
import {Cardapio} from "./Cardapio.js"
import {NotaFiscal} from "./NotaFiscal.js"
import {Pedidos} from "./Pedidos.js"


const cliente = new Pedidos("igor", "gouveia@email", "b00000");
// console.log(`O cliente foi cadastrado ${cliente.id} + ${cliente.getNome()} + do email ${cliente.getEmail()} + com o cpf ${cliente.getCpf()} `)
// cliente.addToCartP0();
// cliente.addToCartP0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemP0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemP0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemP0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);


// >>>>>>>>>>>>>>>>>>>>>>>>> TESTES DE FLUXO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// CarrinhoPizza-------------------------------------------------------------------------------------------
/*
cliente.addToCartP0();
cliente.addToCartP0();
cliente.RemoveCartItemP0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartP1();
cliente.addToCartP1();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemP0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartP3();
cliente.addToCartP3();
cliente.RemoveCartItemP1();
cliente.RemoveCartItemP1();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);

cliente.addToCartP4();
cliente.addToCartP4();

cliente.RemoveCartItemP3();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemP3();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);

cliente.RemoveCartItemP3();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemP4();
cliente.RemoveCartItemP4();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
------------------------------------------------------------------------------------------------*/

/* ---------------------------Carrinho Bebidas ----------------------------------------------------------------------------------
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB1();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB2();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB3();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB4();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.addToCartB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB4();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB3();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB2();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB1();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
cliente.RemoveCartItemB0();
console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
O total até o momento é: R$${cliente.total},00
`);
*/



/* ------------------------------------- Carrinho Massas ---------------------- */



/* --------------- Map do IndexOf----------------------
// console.log(cliente.pedidos[0])
// console.log(cliente.pedidos[1])
// cliente.readPedidos().map((map)=>{
//     if(map.id == 14){
//         var index = cliente.pedidos.indexOf(map)
//         cliente.pedidos.splice(index, 1)
//     }
// })
// console.log(JSON.stringify(cliente.readPedidos()))*/

// cliente.RemoveCartItemP0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);

// cliente.RemoveCartItemP0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartP1();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemP1();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartP2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemP2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartP3();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartP3();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartP4();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemP4();
// cliente.RemoveCartItemP4();

// cliente.RemoveCartItemP3();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);

// cliente.addToCartB0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartB0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemB0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartB1();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemB1();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);

// cliente.addToCartB2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemB2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemB2();

// cliente.addToCartB3();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemB3();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartB4();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemB4();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);

// cliente.addToCartV();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM0();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM1();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM1();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM3();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM3();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM4();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM4();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM5();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM5();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM6();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM6();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM7();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM7();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM8();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM8();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM9();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.RemoveCartItemM9();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartM2();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartB4();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);
// cliente.addToCartB4();
// console.log(`O seu pedido está composto por: ${JSON.stringify(cliente.readPedidos())},
// O total até o momento é: R$${cliente.total},00
// `);



