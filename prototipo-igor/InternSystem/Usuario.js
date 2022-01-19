export class Usuario {
        
    constructor(nome, email, cpf){
        if(this.constructor == Usuario){
            throw new Error("Você não deveria instânciar um objeto do tipo Usuario diretamente, pois essa é uma classe Abstrata.")
        }
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
        this._senha;
    }
    
    //autenticar boolean
    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
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