// Parâmetros de Função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(5,5))

// Parâmetros x Argumentos

// Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Denis", 29))

function multiplica(numero1, numero2) {
    return (numero1 * numero2);
}

console.log(multiplica(soma(2,2),soma(2,2)))