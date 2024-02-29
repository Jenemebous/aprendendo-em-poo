/* 
Escreva um programa que use o método filter para filtrar apenas os números negativos de um array de números
Escreva um programa que use o método filter para filtrar apenas os números pares de um array de números. Utilize arrow functions
*/

const numeros = [1, 2, 4, 3, 6, 9, 10];
const numerosN = [1, -2, -4, 3, -6, 9, -10];
const pa = [2, 4, 6, 10];
const impa = [1, 3, 7, 9];
const idades = [20, 21, 22, 23, 17]


// negativos
const negativos = numerosN.filter((numero) => {

    if(numero < 0){
        return true
    } else {
        return false
    }
})
console.log("Negativos: " + negativos)


// par 
const pares = numeros.filter(numero => numero % 2 === 0)
console.log("Pares: " + pares)

// soma e multipliçao
const soma = numeros.reduce((accumulator, valor) => accumulator + valor, 0)
const multiplicacao = numeros.reduce((accumulator, valor) => accumulator * valor, 1)
console.log("Array: " + numeros)
console.log("Soma: " + soma);
console.log("Multiplicação: " + multiplicacao);

// par e impar
const sePar = pa.every(numero => numero % 2 === 0)
console.log(sePar)

const seImpar = impa.every(numero => numero % 2 !== 0)
console.log(seImpar)

// <-10 >10

const sedezoito = idades.every(idade => idade > 18)
console.log(sedezoito);

const sedezoitos = idades.some(idade => idade == 20)
console.log(sedezoitos);