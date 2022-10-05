// const notas = [10, 6.5, 8, 7.5]

// let somaNota = 0;

// notas.forEach( nota => { 
//     somaNota += nota
// })

// //ou
// // notas.forEach(function(nota){
// //    somaNota += nota
// //})


// let media = somaNota/notas.length;

// console.log(media)

//-----------------------------------------------------------------------------------


const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [10, 10, 9.5]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let mediaGeral = 0;
let mediaNota1 = 0;
let mediaNota2 = 0;
let mediaNota3 = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    mediaGeral += notasGerais[i][j]/notasGerais[i].length;
      console.log([i,j])
      
  }

  console.log(notasGerais[i])

  console.log("_____________________|");
  
  
}

 for (let k = 0; k < notas1.length; k++) {
     mediaNota1 += notas1[k];
 }

 for (let l = 0; l < notas2.length; l++) {
     mediaNota2 += notas2[l];
 }

 for (let m = 0; m < notas3.length; m++) {
     mediaNota3 += notas3[m];
 }

 mediaGeral = mediaGeral/notasGerais.length
 mediaNota1 = mediaNota1/notas1.length
 mediaNota2 = mediaNota2/notas2.length
 mediaNota3 = mediaNota3/notas3.length


console.log(`A média geral da sala é ${mediaGeral}`);
console.log("__________________________________________|");
console.log(`A média das notas do aluno 1 é : ${mediaNota1} - Notas: ${notas1}`);
console.log("_________________________________________________________|");
console.log(`A média das notas da Clara é  : ${mediaNota2} - Notas: ${notas2}`);
console.log("____________________________________________________________________|");
console.log(`A média das notas do aluno 3 é : ${mediaNota3} - Notas: ${notas3}`);
console.log("____________________________________________________|");
