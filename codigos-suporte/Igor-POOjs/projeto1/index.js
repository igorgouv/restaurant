// npm init para criar um novo package.json na pasta do projeto, depois do arquivo criado, digitar "type": "module" no corpo do arquivo e salvar, para poder importar funcoes e classes.

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente('Alicia', 88822233309);
let numeroDeContas = 0;
const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1002, cliente2);


contaCorrenteRicardo.depositar(500);
//conta2.cliente2.cpf;
//conta2.cliente2.nome;

let valorTransferencia = 200;
contaCorrenteRicardo.transferir(valorTransferencia, conta2);

// Uma variavel primitiva, em uma funcao o seu valor e feito uma 'copia', enquanto o objeto e alterado por referencia em uma funcao. Isso tem haver com a maneira de como o javascript armazena seus dados na memoria do computador.
console.log('valor: ', valorTransferencia)
//Static permite que um atributo ou uma funcao seja chamada da Classe sem ser Instanciada.
console.log(ContaCorrente.numeroDeContas)

// Oque um projeto precisa pra funcionar e nao precisa
// Como alcancar
// Oque ta rolando hj