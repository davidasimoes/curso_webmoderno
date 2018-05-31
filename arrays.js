const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[2], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

//Adiciona um valor no array
valores.push({id: 3}, false, null, 'teste');

//Remove o último valor do array e retorna o valor retirado
console.log(valores.pop());

//Deletar valores pelo índice
delete valores[0];

console.log(valores);

console.log(typeof valores);