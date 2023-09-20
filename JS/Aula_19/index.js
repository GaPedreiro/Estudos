/*

Primitivos (imutáveis): string, number, boolean, undefined, 
    null (bigint, symbol). São copiados, uma não vai depender
    da outra.

Referência (mutável): array, object, function. Por referência,
    então meio que cria uma dependência.

exemplo:

let a = [1, 2, 3];
let b = a; // Se colocássemos 'let b = [...a]', b receberia a
           // informação de a, nesse caso ele seria imutável,
           // caso fosse feito o push como ali embaixo,
           // a teria seu valor atualizado mas b não.
console.log(a, b); // O resultado será [1, 2, 3] [1, 2, 3]

a.push(4) // Adicionando o 4 ao final do array 'a'.

console.log(a, b) // O resultado será [1, 2, 3, 4] [1, 2, 3, 4]

//  O valor que 'b' receberá será atualizado. Isso ocorre porque 
    um array não é um tipo de dado primitivo, logo seu valor é mutá-
    vel.
*/

