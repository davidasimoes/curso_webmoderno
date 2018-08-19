//o VAR tem dois escopos: Global e função
{
    {
        {   
            {
                //Var é visivel dentro e fora de um bloco de código
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
}

teste()
//Local está fora do escopo
console.log(local)