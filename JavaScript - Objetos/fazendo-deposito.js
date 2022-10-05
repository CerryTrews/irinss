const cliente = {
    nome: "André",
    idade: "36",
    cpf: "1283798109843",
    email: "andre@email.com",
    fones: ["12345", "654321"],
    saldo: 100,
    dependentes: [
        {
            nome: "Denis",
            parentesco: "primo",
            dataNasc: "20/03/1992"
        },
        {

            nome: "Lele",
            parentesco: "Momo",
            dataNasc: "21/11/1995"
        }
    ],
    
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)



