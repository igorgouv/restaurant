import {Funcionario} from "./Funcionario.js"
import {Admin} from "./Admin.js"

class Sistemainterno {

    _senha = 2222;
    a = Funcionario;

    
    autentica(a){
      var autenticou =  a.autentica(this._senha);
      if(autenticou){
          console.log("Pode entrar no sistema");
      } else {
          console.log("Não pode entrar no sistema");
      }
    }
}
const lider = new Admin()
lider.setSenha(2222)
console.log(lider.getSenha)
const Si = new Sistemainterno();
Si.autentica(lider)