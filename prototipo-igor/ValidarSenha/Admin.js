import {Usuario} from "./Usuario.js"

export class Admin extends Usuario{
    constructor(){
        const _nome = "admin";
        const _email = "admin@email.com";
        const _cpf = "0000";
        super(_nome, _email, _cpf);
    }
}

