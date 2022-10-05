//  boolean 

// const usuarioLogado = true 
// const contaPaga = false

//  truthy ou falsy

//  0 => false
//  1 => true

// console.log(0 == false)
// console.log("" == false)
// console.log( 1 == true)

// // null ==> vazio ou nada
// // undefined

// let minhaVar;
// let varNull = null;

// console.log(minhaVar)
// console.log(varNull)

// let numero = 3;
// let texto = "alura";

// console.log(typeof minhaVar)
// console.log(typeof varNull)

// const texto1 = "5";
// const numero1 = 5;

// //typeof
// console.log(typeof numero1)
// console.log(typeof texto1)

// console.log(numero1 == texto1)  // == compara o valor
// console.log(numero1 === texto1) // === compara valor e o tipo de dado Ex: String e Number

// Number()
// String()




// a = []
// b = 20
// c = true 
// d = ''

// if (b === 20 && c != false && d == 0) {
//     console.log('Verdade')
// } else {
//     console.log('Falso')
// }

const nome = "Leo";
const idade = 19;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
                                                    //{condição ? valor1 : valor2}
                                                    //{condição ? true : false}
console.log(pedido)