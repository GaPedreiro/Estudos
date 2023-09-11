let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

varD = varA
varA = varB
varB = varC
varC = varD

/* Outra forma de resolver essa questão, seria:
    [varA, varB, varC] = [varB, varC, varA]
*/
console.log(varA, varB, varC)