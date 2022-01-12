import {AutenticavelUtil} from "./AutenticavelUtil.js"
import {Usuario} from "./Usuario.js"

export class UserComum extends Usuario{
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
        return this.autenticador.getSenha()
    }
}