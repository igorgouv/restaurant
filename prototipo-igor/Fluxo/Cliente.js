export class Cliente {
    _nome;
    _cpf;
    _email;
    pedidos;
    id;


    constructor(){
        this.pedidos = []
        this.id++
    }

    // Getters
    getNome(){return this._nome}

    getCpf(){return this._cpf}

    getEmail(){return this._email}

    // Setters 
    setNome = (nome) => this._nome = nome;

    setCpf = (cpf) => this._cpf = cpf;

    setEmail = (email) => this._email = email;
    
}