export class Usuario {
        
    constructor(nome, email, quantidadeCliente, data,senha){
        // if(this.constructor == Usuario){
        //     throw new Error("Você não deveria instânciar um objeto do tipo Usuario diretamente, pois essa é uma classe Abstrata.")
        // }
        this.nome = nome;
        this.email = email;
        this.quantidadeCliente = quantidadeCliente
        this.data = data
        this.senha = senha;
    }
    
    //autenticar boolean
    autenticar(senha){
        return senha == this.senha;
    }
    cadastrarSenha(){
        this.senha = this.nome;
        console.log("Cadastrou")
    }

    // Getters
    // getNome(){return this._nome}

    // getEmail(){return this._email}

    // // Setters 
    // setNome = (nome) => this._nome = nome;


    // setEmail = (email) => this._email = email;
    
}