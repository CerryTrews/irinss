function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}


function ClientePoupanca (nome, cpf, email, saldo,saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const denis = new ClientePoupanca("Denis","1234567","denis.carreto@hotmail.com",12345, 8000)

console.log(denis)

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

denis.depositarPoup(123)

console.log(denis.saldoPoup)