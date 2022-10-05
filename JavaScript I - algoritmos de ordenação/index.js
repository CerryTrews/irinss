const livros = require('./listaLivros');




let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        
        maisBarato = atual;
       
    }
        console.log(`atual: ${atual} mais barato: ${maisBarato}`);
        
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e seu título é ${livros[maisBarato].titulo}`)