class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}



class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}
const deniscc = new Cliente("Denis", "denis.com.br", "12323432412", 100)
const denis = new ClientePoupanca("Denis", "denis.com.br", "12323432412", 100, 200)

console.log(deniscc)

denis.depositar(500)
denis.depositarPoupanca(500)

console.log(denis)