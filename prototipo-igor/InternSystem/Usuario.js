export class Usuario {
    _nome;
    _cpf;

    constructor(){}

    getNome() {
        return _nome;
    }

    setNome(nome) {
        this._nome = nome;
    }
    
    getCpf() {
        return this._cpf;
    }

    setCpf(cpf) {
        this._cpf = cpf;
    }
}