import {Pedidos} from "./Pedidos.js"

export class LocalStorage extends Pedidos {
    constructor(){
        super();
    }
    
    static clientes = [];

    static getLocalStorage = () => JSON.parse(localStorage.getItem(`db_client`)) ?? []

    static setLocalStorage = () => localStorage.setItem(`db_client`, JSON.stringify(dbClient))

    //Criar
    static createClient = (a) => {
        LocalStorage.clientes.push(cliente)
    }

    static readClientesList = () =>{
        LocalStorage.clientes.map((item) =>{
            console.log(item)
        })
    }

    //Alterar Cliente em lista de clientes
    static updateClient = (cliente) => {

        let key = this.getAttribute(`key`);
    
        LocalStorage.clientes.map((val)=>{
        if(val.id == key){
            LocalStorage.clientes[val.id] = cliente
            console.log(LocalStorage.clientes[val.id])
            }
        })
    }

    //Deletar
    static deleteClient = () => {
        let key = this.getAttribute(`key`);
    
        LocalStorage.clientes.map((val)=>{
        if(val.id == key){
            LocalStorage.clientes.splice(val[val.id], 1) 
            }
        })
    }

    //Salvar LocalStorage
    static saveClientesList = () => {
        LocalStorage.setLocalStorage(LocalStorage.clientes)
    };

    //Update lista de clientes
    static updateClientesList = () => {
       const getter = LocalStorage.getLocalStorage();
       LocalStorage.clientes = getter;
    }


}