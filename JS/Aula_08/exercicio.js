const nome = 'Gabriel Pedreiro';
const sobrenome = 'Ramos';
const idade = 25;
const peso = 55; 
const alturaEmM = 1.70;
let imc = (peso / (alturaEmM * alturaEmM)) // peso / (altura * altura)
let anoNascimento = (2023 - idade)

console.log(nome, sobrenome, "tem", idade, "anos e", alturaEmM, "metros de altura. Seu IMC é:", imc, ". Ano de nascimento:", anoNascimento)