import {Usuario} from "../InternSystem/Usuario.js"
import {ValidarSenha} from "../InternSystem/ValidarSenha.js"
import {Admin} from "../InternSystem/Admin.js"
import {Cliente} from "./Cliente.js"
import {Cardapio} from "./Cardapio.js"
import {NotaFiscal} from "./NotaFiscal.js"
import {Pedidos} from "./Pedidos.js"


const cliente = new Pedidos("igor", "gouveia@email", "b00000");
// console.log(`O cliente foi cadastrado ${cliente.id} + ${cliente.getNome()} + do email ${cliente.getEmail()} + com o cpf ${cliente.getCpf()} `)
cliente.addToCartV();
// cliente.addToCartV();
// cliente.addToCartP0();;
// cliente.addToCartP0();
// console.log(Cardapio.getPizzaId())
console.log(cliente.readPedidos());


// console.log(cliente.pedidos.some(Boolean))
// console.log(Cardapio.getPizzaQuantidade())
// console.log(Cardapio.getPizzaNome())

// // cliente.RemoveCartItemM4();
// // cliente.RemoveCartItemM2();
// console.log(cliente.readPedidos());






