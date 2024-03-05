/*Questão 1: Operações em um Array

Dada uma array de números, crie uma função utilizando forEach para calcular a soma de todos os elementos.



let array = [10, 15, 12, 45, 22, 100];
let soma = 0
const somando = array.forEach((numero) => {
    soma+=numero
})
console.log(soma)
*/
/*
Questão 2: Filtragem de Dados

Dada uma array de objetos representando pessoas, cada objeto contendo propriedades como "nome" e "idade", use forEach para filtrar e imprimir apenas as pessoas que são maiores de 18 anos.

let pessoas = [
    { nome: "Roberta", idade: 12 },
    { nome: "Ester", idade: 18 },
    { nome: "Vinicius", idade: 22 },
    { nome: "Cleyvid", idade: 17 }
  ];

let filtrar = pessoas.filter((pessoa) => {
    if(pessoa.idade >= 18){
        return pessoas
    } else {
        
    }});

console.log(filtrar)
*/


//Imagine que você tem um array de números e gostaria de imprimir no console cada elemento elevado ao quadrado.

/*
let array = [10, 15, 12, 45, 22, 100];
const quadrado = array.map(numero => numero * numero)
console.log(quadrado);
*/

//Dado um array de nomes de usuários, crie uma função que verifique se pelo menos um dos usuários tem mais de 18 anos.

/*
let pessoas = [
    { nome: "Roberta", idade: 12 },
    { nome: "Ester", idade: 18 },
    { nome: "Vinicius", idade: 22 },
    { nome: "Cleyvid", idade: 17 }
  ];

  const verificar_dez_menor = pessoas.some(pessoa => pessoa.idade < 10)

  console.log(verificar)

  */

  //Suponha que você tenha um array de números e deseja calcular a soma de todos eles.
/*
  let array = [10, 15, 12, 45, 22, 100];

  const somando = array.reduce((accumulator, valor) => accumulator + valor) 
  
  console.log(somando)
  */

  // Você tem um array de objetos representando livros. Crie uma função que filtre apenas os livros publicados após o ano de 2000.

  /*
  let  livros = [
    { titulo: "Dom Casmurro", anoPublicacao: 1899 },
    { titulo: "1984", anoPublicacao: 1949 },
    { titulo: "O Senhor dos Anéis", anoPublicacao: 1954 },
    { titulo: "Harry Potter e a Pedra Filosofal", anoPublicacao: 1997 },
    { titulo: "A Culpa é das Estrelas", anoPublicacao: 2012 }
  ];
  

const filtro = livros.filter(livro => livro.anoPublicacao > 2000) 

console.log(filtro);
*/

// Dada uma lista de compras, representada por um array de objetos, onde cada objeto tem uma propriedade "quantidade" e "preço", crie uma função que retorne verdadeiro se todos os itens na lista custarem menos de R$ 50,00 após aplicar um desconto de 10%.

const listaDeCompras = [
    { produto: "Maçãs", quantidade: 3, preco: 20 },
    { produto: "Leite", quantidade: 1, preco: 51 },
    { produto: "Pão", quantidade: 2, preco: 32 },
    { produto: "Ovos", quantidade: 12, preco: 52 },
    { produto: "Sabonete", quantidade: 1, preco: 25 }
  ];

  const verificando = listaDeCompras.map(valor => valor.preco * 0.9 )
  console.log(verificando)

  const verifico = verificando.every(valor => valor < 50)
  console.log(verifico)
  
  let array = [10, 15, 12, 45, 22, 100];
  const temNumPar = array.some(numero => numero % 2 ===0)
  console.log(temNumPar)