import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupaca} from "./Conta/ContaPoupanca.js"
import {ContaSalario} from "./Conta/ContaSalario.js"

const cliente1 = new Cliente("Ricardo",11122233309);

const conta1 = new ContaCorrente(1001, cliente1);
// conta1.depositar(500);
// conta1.sacar(100);

const contaPoupanca1 = new ContaPoupaca(50, cliente1, 1001)
// contaPoupanca1.sacar(10);
// console.log(contaPoupanca1);
// console.log(conta1);

/* Teste de @Override/Sobreescrita
 conta1.teste();
console.log(conta1) // Verificar que o metodo Sacar está diferente do Sacar da contapoupança, comprovando o saldo.
console.log(contaPoupanca1) */

const contaSalario = new ContaSalario(cliente1)
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario)

