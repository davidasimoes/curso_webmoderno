//Teste de commit
let isAtivo = false //Literal Falso
console.log(isAtivo)

isAtivo = true //Literal Verdadeiro
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Técnica da negativa da negação para converter tipos em Boolean

console.log('Se comportam como verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
//Ele pega o valor e não o sucesso da atribuição
console.log(!!(isAtivo = true))

console.log('Se comportam como falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))

console.log('pra finalizar...')

console.log(!!('' || null || 0 || ' '))

//Usado para imprimir um valor default
let nome = 'David'
console.log(nome || 'Nome desconhecido')

