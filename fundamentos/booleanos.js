//AULA SOBRE O TIPO BOOLEAN
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//Usar negação para converter valor inteiro em Boolean
isAtivo = 1
console.log(!isAtivo);

//TIPOS DE VERDADEIROS
console.log('os verdadeiros...')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//TIPOS FALSOS
console.log("os falsos...")
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

//Imprimir valor padrão se variável estiver vazia.
let nome = 'David'
console.log(nome || "Desconhecido");