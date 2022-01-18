import { Cliente } from '../Cliente.js';

//Classe abstrata, só funciona para ser herdada, porque estamos bloqueando a sua instânciação com o throw new Error.
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            // console.log("Você não deveria instânciar um objeto do tipo Conta") console também é uma classe. Por isso podemos utilizar o .error para lançar um log de erro caso alguém tente instanciar a uma classe do tipo Conta.
            // console.error("Você não deveria instânciar um objeto do tipo Conta")
            // Agora para lançar um erro que pare a execução do nosso código utilizamos o throw e instânciamos um new Error, utilizando a classe padrão Error do js.
            throw new Error("Você não deveria instânciar um objeto do tipo Conta diretamente, pois essa é uma classe Abstrata.")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        // console.log(this.constructor)
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    //Metodo Abstrato, feito pra ser sobrescrito, JS é uma linguagem interpretada, Lançamos manualmente o erro porque o JS não possui um suporte nativo à métodos abstratos,  diferentes de linguagens compiladas igual ao Java, que naturalmente impedem a execução do código.
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato")
        // let taxa = 1;
        // return this._sa car(valor, taxa);
    }

    //Encapsulou o if do sacar para não repetir código, tornando ele privado, assim as classes filhas podem sobreescrever o sacar publico chamando o If que faz a validação do saque com return super._sacar(valor, taxa) ou this._sacar(valor, taxa)
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;

        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}