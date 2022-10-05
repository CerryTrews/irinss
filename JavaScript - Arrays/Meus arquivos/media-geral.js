const salaJS = [ 7, 8, 8, 7, 10, 6.5, 4, 10, 7 ]
const salaJava = [ 6, 5, 8, 9, 5, 6 ]
const salaPython = [ 7, 3.5, 8, 9.5 ]

function mediaSala( notasDaSala ) {
    let somaDasNotas = notasDaSala.reduce((acumulado, atual) => atual + acumulado, 0)
    return somaDasNotas/notasDaSala.length 
}

console.log(`Média da Sala de JavaScript ${mediaSala(salaJS)}`)

console.log(`Média da Sala de Java ${mediaSala(salaJava)}`)

console.log(`Média da Sala de Python ${mediaSala(salaPython)}`)

let notaSalas = [ 7.5, 6.5, 7]
let notaGeral = notaSalas.reduce((acumulado, atual) => atual + acumulado, 0) / notaSalas.length

console.log(`A nota geral das 3 salas é de: ${notaGeral}`)