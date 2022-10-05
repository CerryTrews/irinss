function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const denis = new Cliente("Denis", "12345678","denis.carreto@hotmail.com", 900)

console.table(denis)