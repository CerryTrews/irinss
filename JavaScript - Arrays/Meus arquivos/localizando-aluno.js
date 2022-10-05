const alunos = ['Clara', 'Le', 'Ben', 'Moana']
const medias = [10, 7, 9, 6]
const teste = ['teste1', 'teste2', 'teste3','teste4']

let lista = [alunos, medias, teste]

const exibeNomeNota = (nomeDoAluno) => {
    if (lista[0].includes(nomeDoAluno)) {
        indice = lista[0].indexOf(nomeDoAluno)
        return lista[0][indice] + ', sua média é ' + lista[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Clara")) 

// includes retorna um booleano ( true, false )
// indexOf retorna um número do índice ( Moana = 3 )



