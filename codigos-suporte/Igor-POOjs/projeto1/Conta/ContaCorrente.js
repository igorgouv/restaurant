import { Conta } from './Conta.js';
export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
        // dentro dos construtores tambem podemos utilizar os acessores que estao dentro da classe.
    }
    //@Override o comportamento de sacar.
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}


    // agencia;
    // _cliente; Explicando durante o progresso das aulas, que uma boa prática é declarar e inciar as variaveis de uma classe no constructor.


    // _saldo = 0;
//a # deixa o valor privado, assim como o _ antes da palavra
    