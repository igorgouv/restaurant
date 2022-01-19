import {Usuario} from "../InternSystem/Usuario.js"
import {ValidarSenha} from "../InternSystem/ValidarSenha.js"
import {Admin} from "../InternSystem/Admin.js"
import {Cliente} from "./Cliente.js"
import {Cardapio} from "./Cardapio.js"
import {NotaFiscal} from "./NotaFiscal.js"
import {Pedidos} from "./Pedidos.js"


const cliente = new Pedidos("igor", "gouveia@email", "b00000");
console.log(`O cliente foi cadastrado ${cliente.id} + ${cliente.getNome()} + do email ${cliente.getEmail()} + com o cpf ${cliente.getCpf()} `)
cliente.addToCartP();
cliente.addToCartV();
cliente.addToCartM4();
cliente.addToCartM3();
cliente.addToCartM2();
cliente.addToCartM1();
console.log(cliente.readPedidos());
cliente.RemoveCartItemP();
// cliente.RemoveCartItemM4();
// cliente.RemoveCartItemM2();
console.log(cliente.readPedidos());






