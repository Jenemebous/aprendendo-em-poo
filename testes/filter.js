// pares

/*
const numeros = [1, 2, 9, 4, 6];

const pares  = numeros.filter((numero ) => {
    if(numero % 2 === 0){
    return "esses são os números pares " + numero
    }
});

console.log(pares);
*/

// maior que 5

/*

const array = ["macarronada", "bife", "peixe", "poseidon"];

const maior = array.filter((nome) => {
    if(nome.length > 5){
        console.log(nome)
    }
})

*/

// sem duplos

/*
const numeros = [1, 2, 3, 2, 4, 5, 4, 6, 7, 8, 7, 9];

const unico = numeros.filter((valor, index, array) => 
   array.indexOf(valor) === index);

console.log(unico);
*/

// retornar maior que 2

const frutas = ['maçã', 'banana', 'laranja', 'uva', 'maçã'];

const indice = frutas.filter((valor, indice) => {
    if(indice > 2){
        return valor
    }
})
console.log(indice)