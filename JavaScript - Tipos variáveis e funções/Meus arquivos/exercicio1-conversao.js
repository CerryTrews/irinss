let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// teremos a conversão do número 12341234 para uma string “12341234”
// e assim poderemos fazer a concatenação entre as strings

let telefone1 = 12341234;
console.log("O telefone é " + telefone1.toString());
// o .toString() é uma outra forma para  fazer essa conversão,
// que é mais parecida com outras linguagens de programação.
//podemos usar String(variavel) ou variavel.toString()
//__________________________________________________________________________

let usuarioConectado = false;
console.log(String(usuarioConectado));
console.log(usuarioConectado.toString()); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado));
console.log(usuarioConectado.toString()); // agora teremos uma string “true”.
//__________________________________________________________________________

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); 
// teremos a conversão de String para números,
// possibilitando a realização da da multiplicação
// a conversão pode ser feita usando Number(variavel) ou + variavel
//__________________________________________________________________________

let largura1 = "10";
let altura1 = "5";
console.log( + largura1 * + altura1); // teremos a conversão de String para números realizado usando o + antes das variáveis
//__________________________________________________________________________

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN
//__________________________________________________________________________

let usuarioConectado1 = false;
console.log(Number(usuarioConectado1)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado1 = true;
console.log(Number(usuarioConectado1)); // agora teremos a conversão de true (verdadeiro) para o número 1.
//__________________________________________________________________________


