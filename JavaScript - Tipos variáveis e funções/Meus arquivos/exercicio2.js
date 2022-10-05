var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
    var respostaDeTudo = 3.14;
    let idade = 42;
    const pi = 29;
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

//Variáveis declaradas com var ou let podem ser reatribuídas.
//Porém, uma variável declarada com let só pode ser usada no mesmo
//escopo em que está definida. No caso da declaração
//const, significa que a variável sempre terá uma referência ao mesmo
//objeto ou valor primitivo, porque essa referência não pode ser alterada.
//A referência em si é imutável, mas o valor mantido pela variável
//não se torna imutável.

