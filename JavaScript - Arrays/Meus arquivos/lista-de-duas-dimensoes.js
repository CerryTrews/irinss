const alunos = ['Denis', 'Le', 'Ben', 'Moana']
const medias = [10, 7, 9, 6]


// 0 = [alunos] 1 = [medias]
// ['Denis', 'Le', 'Ben', 'Moana']
//const medias = [10, 7, 9, 6] 

let lista = [alunos, medias]


// [0][0] = [const alunos][qual aluno]
//    0       1      2      3
//['Denis', 'Le', 'Ben', 'Moana']

// [1][0] = [const medias][qual média]
//            0  1  2  3
//          [10, 7, 9, 6]


//console.log(`${lista[0][0]}, a sua média é: ${lista[1][0]}`)
console.log(`${lista[0][0]}, a sua média é: ${lista[1][3]}`)
