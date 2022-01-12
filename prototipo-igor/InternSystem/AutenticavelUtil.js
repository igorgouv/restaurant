// Define a senha para funcionarios
export class AutenticavelUtil {
    _senha;

    setSenha(senha) {
        this._senha = senha;
    }

    autentica(senha) {
        if(this._senha == senha){
            return true;
        } else {
            return false;
        }
    }

    getSenha() {
        console.log(`A senha é ${this._senha}`)
    }
}