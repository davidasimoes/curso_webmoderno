const prod1 = {} //forma literal do Objeto
prod1.nome = 'Celular Ultra Mega' //Declaração dinâmica
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log((prod1))

//Declaração Literal
prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blablabla: 2
        }
    }
}

// '{"nome": "Camisa Polo", "Preço": 79.90 }' Formato Json, é diferente de Objeto.

console.log(prod2)