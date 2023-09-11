const numero = parseFloat(prompt('Digite um número: '));
//const numeroInt = parseInt(numero)
console.log(typeof(numeroInt));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ` `
texto.innerHTML += `<p> A raiz quadrada do seu número é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> O número ${numero} é inteiro? ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p> O valor ${numero} é NaN? ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p> O seu número arredondado para baixo é: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p> O seu número arredondado para cima é: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p> O seu número com apenas duas casas decimais: ${numero.toFixed[2]}</p>`

/*
    raiz quadrada
    se é inteiro
    se é NaN
    arredonda pra baixo
    arredonda pra cima
    com duas casas decimais
*/