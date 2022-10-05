const cliente = {
    nome:"André",
    idade:"36",
    cpf: "1283798109843",
    email:"andre@email.com",
    fones: ["12345", "654321"]
}

cliente.dependentes = {
    nome: "Denis",
    parentesco: "primo",
    dataNasc: "20/03/1995"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)