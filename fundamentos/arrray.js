const valores = [7.7, 8.9, 6.3, 9.2] //Declara array de forma literal
console.log(valores[1], valores[3]) //Acessa chave do array

console.log(valores[4]) //JS não acusa erro ao acessar índice indefinido

valores[4] = 10

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Insere um valor na última posição do array
console.log(valores)

console.log(valores.pop()) //Saca o último índice do array
console.log(valores) 
delete valores[0] //Retira um valor do array sem retirar o índice

console.log(valores)

console.log(typeof valores) //No JS array é um objeto.