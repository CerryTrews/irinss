const texto1 = "Olá mundo!";
const senha = "C4t4clysm4lic4l!";

const stringdeNumeros = "2983740982";

const citacao = "Minha idade é: ";
const citacao2 = 'Eu tinha uma galinha que se chamava "Marilu"';

console.log(citacao)
console.log(citacao2)


//Template string ou Template literal

//Contatenação

const idade = 29;

console.log(citacao + idade)



const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

// O método toLowerCase() retorna o valor da string original convertido para minúsculo.
// .toLowerCase() não altera o valor da string original.

console.log('ALFABETO'.toLowerCase()); // 'alfabeto'
const testeMaiusculo = "TESTE";
const inputTeste = testeMaiusculo.toLowerCase();

//console.log(testeMinusculo.toLowerCase());
if (inputTeste === "teste") { console.log("Deu certo, o resultado é teste");
} else { console.log("Não deu certo, reescreva o código");}


// ().length)Retorna a quantidade de carácteres
// atribuir valor ao .length não funciona
const senhaGrande = "123deoliveira4"
console.log(senhaGrande.length) // 13 caracteres




