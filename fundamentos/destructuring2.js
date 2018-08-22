const [a] = [10]
console.log(a)

const [n1, ,n3,n4,n5,n6 = 0] = [10, 7, 9, 8] //Não usual
console.log(n1, n3, n4, n5, n6)

const[,[, nota]] = [[, 8, 8], [9, 6, 7]] //Não usual
console.log(nota)