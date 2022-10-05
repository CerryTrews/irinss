const nome = "Denis";
const idade = 9;
const cidadeDeNascimento = "Americana";

// const apresentacao = "Meu nome é "+ nome + ", minha idade é " +
idade + " e nasci na cidade de " + cidadeDeNascimento;


// template string

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

// para usar a template string use ` ao inves de ' ou '' e aciona as variaveis com ${variavel}
console.log(apresentacao)

if (nome === "Clara") {

    console.log("Olá Clara!")
} else if (nome === "Denis") {
    console.log("Olá boiola!")
}

