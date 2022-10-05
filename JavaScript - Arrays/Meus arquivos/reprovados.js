const alunos = ["Denis", "Le", "Clara", "Ben"]
const notas = [ 7, 10, 4, 2 ]

let reprovados = alunos.filter( (aluno, indice) => notas[indice] < 5 )
console.log ( `reprovados : ${reprovados}`)

