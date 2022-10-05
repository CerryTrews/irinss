const cliente = {
    nome:"André",
    idade:"36",
    cpf: "1283798109843",
    email:"andre@email.com"
}

// console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
// substring acessou só o 3 primeiros indices do cpf
// console.log(cliente.cpf.substring(0,3))

const chaves = ["nome","idade","cpf","email"]


// console.log(cliente[chaves[0]])
// console.log(cliente[chaves[1]])
// console.log(cliente[chaves[2]])
// console.log(cliente[chaves[3]])

chaves.forEach(info => console.log(cliente[info]))

cliente.fone = "99238492384"

console.log(cliente)

cliente.fone = "123456"

console.log(cliente)
