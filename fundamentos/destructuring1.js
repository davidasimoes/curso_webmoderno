// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade}  = pessoa //Chaves representam operador de desestruturação
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log('Renomando ',n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep = '00000-000'}} = pessoa
console.log(logradouro, numero, cep)