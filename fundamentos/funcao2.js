//Armazenando função em variável
const imprimirSoma = function (a, b)//Função sem nome
{
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando função arrow em variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
//Utilizado para funções com apenas uma linha de código, ou seja, apenas uma operação
const subtracao = (a,b) => a - b
console.log(subtracao(5,2))