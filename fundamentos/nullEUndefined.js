//Null e Undefined

//ATRIBUIÇÃO POR REFERÊNCIA
const a = {name: 'Teste'};
//console.log(a);

//A e B apontam para o mesmo endereço de memória, portanto
//quando um é alterado, o outro também.

const b = a;
b.name = 'Opa';
//console.log(a, b);

//Aqui a lógica é diferente
let c = 3;
let d = c;
d++;

//Com um valor/tipo primitivo, é feita uma cópia por valor.
//Em objetos, a atribuição é feita por referência. 
//console.log(c,d);


// NULL E UNDEFINED
let valor; //não inicializada
console.log(valor);
//console.log(valor2);

valor = null;   //Não aponta para nenhum endereço e não tem nenhum valor.
console.log(valor);
// console.log(valor.toString()); //Erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null //produto sem preço;
console.log(!!produto.preco);
console.log(produto);










