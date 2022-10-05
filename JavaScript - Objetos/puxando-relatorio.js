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

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    { continue 
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    
}
console.log(relatorio)