export class ValidarSenha{
    static login(autenticavel, senha){
        if(ValidarSenha.ConfirmAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ConfirmAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}