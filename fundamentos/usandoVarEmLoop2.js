const valores = []

for (var i = 0; i < 10; i++)
{
    valores.push(function(){
        console.log(i)
    })
}

//Quando a função é chamada, o loop já foi executado, e a variável sobrescrita.
valores[2]()
valores[5]()
valores[8]()