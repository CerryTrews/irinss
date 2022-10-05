// boolean
// true -> verdadeiro
// false -> falso


const primeiroNumero = 5;
const segundoNumero = 10;
let cadastroAtivado = true;

console.log(primeiroNumero === segundoNumero);

const texto1 = "Alura";
const texto2 = "alura";
const converte = ( texto1.toLowerCase());

console.log(converte === texto2);

// Nesta aula falamos sobre três tipos primitivos: 
// number, string e boolean. Mas existem ainda mais dois tipos 
// que não abordamos com profundidade: null e undefined.

// O null é um tipo especial, pois pode ser traduzido como
// “ausência de valor” e pode ser atribuído como valor de uma variável:

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}