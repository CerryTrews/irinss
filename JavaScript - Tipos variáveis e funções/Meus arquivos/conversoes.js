// tipo de dado
// booleanos


const numero = 5;
const numeroString = "5";

//conversão implícita

console.log( numero == numeroString ) // retorna true

console.log( numero + numeroString )  // concatena, retorna 55

//conversão explícita

console.log( numero === numeroString ) // retorna false

//Number() converta em numero
//String() converte em string

console.log( numero + Number(numeroString)) // converta a string em numero
                                            // retorna 10

                                            
