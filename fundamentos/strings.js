const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna char da posicção passada
console.log(escola.charAt(5)) //Retorna vazio para char inexistente
console.log(escola.charCodeAt(3)) //retorna código do char na tabela ASC (Unicode);
console.log(escola.indexOf('r')) //Retorna posição do char na string
console.log(escola.substring(1)) //Retorna intervalo de uma string
console.log("Escola ".concat(escola).concat("!"))
console.log("Escola "+escola)
console.log(escola.replace(3, 'e')) //substitui um char por outro
console.log('Ana,Maria,Pedro'.split(',')) //Quebra uma string em um array 