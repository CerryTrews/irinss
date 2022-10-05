const notas = [10,7,8,5,10]
notas.pop() // não aceita nenhum parametro, o js retira sempre o ultimo elemento
            // da array

console.log(notas)


// Quando não delcara como const, let e etc o java declara como uma var
let media = (notas[0]+notas[1]+notas[2]+notas[3]) / notas.length

console.log(`A média é ${media}`)