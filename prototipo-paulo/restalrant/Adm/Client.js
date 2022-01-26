import { Usuario } from "../back-end/ValidarSenha/Usuario.js"

// const client = new Usuario;

const openModal = () => document.getElementById('estoqueModal1')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('estoqueModal1').classList.remove('active')
}

const getLocalStorage1 = () => JSON.parse(localStorage.getItem('db_client1')) ?? []
const setLocalStorage1 = (dbClient1) => localStorage.setItem("db_client1", JSON.stringify(dbClient1))

// CRUD - create read update delete
const deleteClient = (index) => {
    const dbClient1 = readClient()
    dbClient1.splice(index, 1)
    setLocalStorage1(dbClient1)
}

const updateClient = (index, client) => {
    const dbClient1 = readClient()
    dbClient1[index] = client
    setLocalStorage1(dbClient1)
}

export const  readClient = () => getLocalStorage1()

const createClient = (client) => {
    const dbClient1 = getLocalStorage1()
    dbClient1.push (client)
    setLocalStorage1(dbClient1)
}

const isValidFields = () => {
    return document.getElementById('form1').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nomeCliente').dataset.index = 'new'
}

const saveClient = () => {
    
    if (isValidFields()) {
        var nomeCliente = document.getElementById('nomeCliente').value;
        var email= document.getElementById('email').value;
        var quantidadeCliente= document.getElementById('quantidadeCliente').value;
        var data= document.getElementById('data').value;
        var aaa= "ggg"
        var client = new Usuario(nomeCliente,email,quantidadeCliente,data,aaa)

        const index = document.getElementById('nomeCliente').dataset.index
        if (index == 'new') {
            console.log(`A senha antes e ${client.senha}`)
            client.cadastrarSenha()
            console.log(`A senha de cliente depois e: ${client.senha}`)
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.quantidadeCliente}</td>
        <td>${client.data}</td>
        <td>
            <button type="button" data-bs-toggle="modal" data-bs-target="#estoqueModal1" class="btn btn-success" id="edit-${index}">Editar</button>
            <button type="button" class="button btn btn-danger" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient1>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient1>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nomeCliente').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('quantidadeCliente').value = client.quantidadeCliente
    document.getElementById('data').value = client.data
    document.getElementById('nomeCliente').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}
document.getElementById("nomeCliente").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      return false;
  };

document.getElementById("quantidadeCliente").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890".indexOf(chr) < 0)
        return false;
    };

updateTable()

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvarCliente')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient1>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelarCliente')
    .addEventListener('click', closeModal)