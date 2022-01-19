import {Usuario} from "../InternSystem/Usuario.js";

export class Cliente extends Usuario {
    static id = 0;
    constructor(nome, email, cpf){
        super(nome, email, cpf);
        this.pedidos = [];
        Cliente.id += 1;
    }

    autenticar(){
        return true;
    }

}