//const array = [1, 2, 3]; //Você não pode acrescentar elementos nesse array utilizando o sinal de atribuição '='.

//array.push(4) // Dessa forma você poderia manipular os elementos dentro do array. Isso acontece por causa do tipo de dado que é considerado o array.

//const pessoal = {} //Com chaves se cria um objeto.
//const pessoal = [] //Com chves se cria um array.

//Objeto pessoa.
/*const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Ramos',
    idade: 25
};
*/

//console.log(pessoa.sobrenome) //Exemplo printando o sobrenome.

/* Exemplo de uma função que cria pessoas

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Gabriel', 'Ramos', 25)
const pessoa2 = criaPessoa('Gabriela', 'Pereira', 27)
const pessoa3 = criaPessoa('Camila', 'Martins', 23)
*/

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Ramos',
    idade: 25,
    //Uma função dentro de um objeto é chamado de MÉTODO.
    dados() { //No caso esse é o método 'dados'.
        console.log(this.nome, this.sobrenome, this.idade)
    },
    incrementaIdade() { //Método incrementaIdade.
        this.idade ++
    }
}

pessoa.dados();           // Gabriel Ramos 25
pessoa.incrementaIdade(); // idade recebe + 1
pessoa.dados();           // Gabriel Ramos 26