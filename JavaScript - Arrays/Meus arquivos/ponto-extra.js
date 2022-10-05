const notas = [10, 9, 8, 7, 6]


//const notasAtualizadas = notas.map(nota => nota + 1)
let notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)


//----------------------------------------------------------------------


let notasAtualizadas2 = notas.map(somarNota)

function somarNota(nota2) { if ( nota2 == 10 ) {
    return nota2;
 } else { 
    return ++nota2;
 }

}
console.log(notasAtualizadas2)



 

 



// (nota => nota == 10 ? nota : ++nota)
// nota == 10 ( Se nota for = 10)
// ? nota = ( Se a condição acima for verdadeira, ela retorna nota que é = 10 )
// : ++nota = ( Se a condição for falsa, soma +1 e retorna a nota somada. )
// 
// É o mesmo que escrever
// if (nota == 10) { 
//     return nota; 
// } else {
//     return ++ nota;
// }
    //console.log(notasAtualizadas)
    



