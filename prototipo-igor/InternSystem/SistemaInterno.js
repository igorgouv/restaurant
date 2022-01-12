import {UserComum} from "./UserComum.js"
import {Admin} from "./Admin.js"

class Sistemainterno {

    _senha = 2222;

    autentica(a){
      var autenticou =  a.autentica(this._senha);
      if(autenticou){
          console.log("Pode entrar no sistema");
      } else {
          console.log("Não pode entrar no sistema");
      }
    }
}

// Testando o Sistemainterno
const lider = new Admin()
lider.setSenha(2222)
lider.getSenha();
const aa = new UserComum();
aa.setSenha(1111)
aa.getSenha()
const Si = new Sistemainterno();
Si.autentica(lider)
Si.autentica(aa)