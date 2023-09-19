function soma(x, y) {
    const resultado = (x + y);
    return resultado
}

console.log(soma(2, 2))

/* Nesse exemplo abaixo, na criação da função já está sendo feita uma
    atribuição de valores para 'x' e 'y', caso não seja passado um valor
    para essas variáveis posteriormente, como foi passado '4' e '2', elas
    assumirão o valor 'padrão' que havia sido atribuído a elas anterior-
    mente. Caso seja passado somente um valor, o segundo também seria
    utilizado o padrão.


    function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado
}

const resultado = soma (4, 2)
console.log(resultado)

-> Outro exemplo: Nesse em específico, é posto poto ';' após a última
    chave porque não foi dado um nome para a função, ela está sendo
    passada diretamente para uma constante.

const raiz = function (n) {
    return n ** 0.5; //retorna a raiz quadrada.
};

console.log(raiz(9))

-> Exemplo mais moderno com arrow function: Ele descarta a necessidade de
    por '{}', simplificando mais ainda a construção da função.

const raiz = (n) => n ** 0.5;

console.log(raiz(9));

*/