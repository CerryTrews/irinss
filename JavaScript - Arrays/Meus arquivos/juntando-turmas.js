const salaDePython = ['Melissa', 'Helena', 'Rodrigo']
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel']

const salaUnificada = salaDePython.concat(salaDeJavaScript)
// o .concat() não altera o valor original
// por isso foi necessário criar uma variável nova para armazenar o valor
// const salaUnificada

console.log(salaUnificada)