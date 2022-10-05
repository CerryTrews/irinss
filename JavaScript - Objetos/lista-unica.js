const clientes = [
    {
        nome:"Denis",
        idade:"29",
        cpf: "1283798109843",
        email:"denis@email.com",
        dependentes: [{
        nome: "Ben",
        parentesco: "filho",
        dataNasc: "04/11/2020"
    },
    {
        nome: "Emma",
        parentesco: "filha",
        dataNasc: "05/04/2025"
    }],
},
{
    nome: "Leticia",
    cpf: "12345533",
    dependentes: [{
        nome: "Emma",
        parentesco: "Filha",
        dataNasc: "05/04/2025"
    }],
}
]

const listaDependentes = [ ...clientes[0].dependentes, ...clientes[1].dependentes]

// console.log(listaDependentes)
console.table(listaDependentes)