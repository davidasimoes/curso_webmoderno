//CONHECENDO STRING EM JS

const escola = "Cod3r";

//Mostra o char relacionada ao índice indicado
console.log(escola.charAt(4));
console.log(escola.charAt(5));

//Retorna o valor do char na tabela ASCI/UNICODE
console.log(escola.charCodeAt(3));

//Retorna a posicção do dígito procurado, na palavra.
console.log(escola.indexOf('d'));

//Imprime a partir do índice.
console.log(escola.substring(2));

//Retorna o intervalo entre os índices passados, sem incuir o último indice.
console.log(escola.substring(0, 2));

//Função de concatenação
console.log("Escola ".concat(escola).concat("!"));

//Replace de um valor por outro na string
console.log(escola.replace(3,"e"));
//pode ser utilizada com expressões regulares
// console.log(escola.replace(/\d/, 'e'));

/*
*Split faz um explode na variável, identificando o separador indicando e
*armazenando em um array
*/
console.log('Ana,Maria,Pedro'.split(/./));