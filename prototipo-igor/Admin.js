import {AutenticavelUtil} from "./AutenticavelUtil.js"
import {Funcionario} from "./Funcionario.js"

export class Admin extends Funcionario{

    autenticador; 

    constructor(){
        super();
        this.autenticador = new AutenticavelUtil();
    }

    //@Override
    setSenha(senha) {
        this.autenticador.setSenha(senha);
    }

    //@Override
    autentica(senha) {
        return this.autenticador.autentica(senha);
    }

    getSenha(){
        return this.autenticador.getSenha
    }
}