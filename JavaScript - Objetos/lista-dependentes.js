const cliente = {
    nome:"André",
    idade:"36",
    cpf: "1283798109843",
    email:"andre@email.com",
    fones: ["12345", "654321"],
    dependentes: [{
        nome: "Denis",
        parentesco: "primo",
        dataNasc: "20/03/1992"
    }]
}

cliente.dependentes.push({
    nome: "Lele Campos",
    parentesco: "Momo",
    dataNasc: "21/11/1995"
})

console.log(cliente)

const pessoaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "20/03/1992")

console.log(pessoaMaisNova[0].nome)