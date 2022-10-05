const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
// Ana e Caio mudaram de escola
// Rodrigo entrou na sala


// - listaDeChamada.splice(1, 2, 'Rodrigo') -> retira Ana e Caio e adiciona Rodrigo no lugar

//.splice() aceita 3 parâmetros, mas funciona apenas com o primeiro e segundo
//1 = onde começa, 2 = quantos elementos serão removidos, terceiro parâmetro é o que vai colocar no lugar.

listaDeChamada.splice(2, 0, 'Rodrigo') // -> não apaga ninguém e adiciona Rodrigo após Ana.

// A array original foi alterada, não foi preciso criar uma variável nova para armazenar o novo valor.

console.log(`Lista de chamada nova é: ${listaDeChamada}`)


const animaisMarinhos = ['Baleia', 'Polvo', 'Golfinho', 'Tubarão']

animaisMarinhos.splice(1, 0, 'Peixe')  //-> imprime Baleia, Peixe, Polvo, Golfinho, Tubarão
//splice armazena o novo valor no lugar do valor original

animaisMarinhos.splice(3,2,'Lambari')  // -> imprime Baleira, Peixe, Polvo, Lambari

console.log(animaisMarinhos)
