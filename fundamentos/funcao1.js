//Exemplo de função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(3, 5)
imprimirSoma('A', 'B')
imprimirSoma('Banana', 7)
imprimirSoma(2) //JS trata como NaN
imprimirSoma(2, 10, 5, 6, 7, 8, 9) //Funciona, Js ignora os demais parâmetros
imprimirSoma() //NaN

//Função com retorno
function soma(a, b = 1) //Valor padrão
{
    return a + b
}

console.log(soma(2))