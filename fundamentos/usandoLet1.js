let numero = 1
{
    //Let possue escopo de global, função e bloco
    let numero = 2
    console.log("Dentro = ", numero)    
}

console.log("Fora = ", numero)
