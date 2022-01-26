import {Usuario} from "../ValidarSenha/Usuario.js";

export class Cliente extends Usuario {
    static id = 0;
    constructor(nome, email){
        super(nome, email);
        this.pedidos = [];
        this.id = Cliente.id;
        this.total = 0;
        Cliente.id += 1;
    }

    readPedidos = () => {
        this.pedidos.sort(function(a, b){
            return a.preco - b.preco
        })
        return this.pedidos
    }

    

}