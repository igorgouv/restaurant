import {Cliente} from "../Fluxo/Cliente.js";
import {Admin} from "./Admin.js";
import {Cardapio} from "../Fluxo/Cardapio.js"

const validacaoFront = (user, password) => {
    if(user == "admin" && password == "0000"){
        const admin = new Admin()
        admin.cadastrarSenha("0000")
        const validouA = admin.autenticar("0000");
        if(validouA){
            console.log("entrou no front do admin")
        }
    } else {
        var cliente = new Cliente(user,"email", "cpf");
        cliente.cadastrarSenha(password);
        if(cliente.autenticar()){
            console.log("cliente entrou no front do cliente")
        }
    }

}

validacaoFront("admin", "0000");
validacaoFront("igor","123")

Cardapio.getPizzaValue();
