const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//A templateString considera quebras e tabs
const template = `
Olá
${nome}!`

console.log(nome, template)

//TS considera expressões...
console.log(`1 + 1 = ${1 + 1}`)

//Função arrow dentro da TS
const up = texto => texto.toUpperCase()
console.log(`Ei....${up("cuidado")}!`)
