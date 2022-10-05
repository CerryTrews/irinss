const notas = [10, 6.5, 8, 7.5]

let somaNota = 0; // variavel criada fora do bloco for para o for acessar a variavel, somar e modificar o valor.

for (let i=0; i < notas.length; i++) {
    somaNota += notas[i] // [i] = indice ( 0,  1,  2,  3)
                                       //(10, 6.5, 8, 7.5)
}

let media = somaNota/notas.length;

console.log(media)