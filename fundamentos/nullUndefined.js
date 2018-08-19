let valor //Não inicializada
console.log(valor)

valor = null //Null = ausência de valor ou indicação de objeto na memória
console.log(valor)

// console.log(valor.toString()) //dá erro

const produto = {}
console.log(produto.preco)

produto.preco = 3.5

console.log(produto)

produto.preco = undefined //Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
