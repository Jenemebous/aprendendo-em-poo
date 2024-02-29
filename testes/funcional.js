const prompt = require('prompt-sync')();

/* 
Crie uma função mapearDobro que recebe uma função e uma lista de números e retorna uma nova lista onde cada elemento é o dobro do elemento correspondente na lista original.


let numeros = [1, 2, 3, 4, 5, 6];
const mapearDobro = numeros.map(item) => item * 2;
})

console.log(mapearDobro);

*/

/* 
Escreva uma função adicionarElemento que adiciona um elemento a uma lista sem modificar a lista original.


let lista = ['pedro', ' marcos', ' comer', ' andar'];

const adicionarElemento = lista.map(item => item)
let pp = prompt("Digite um elemento para adicionar ao novo array:")
adicionarElemento.push(pp)

console.log("Lista antiga:" + lista)
console.log("Lista nova:" + adicionarElemento)
*/

// TESTANDO FILTER

/*
const alunos = [
    { nome: 'Arthur', idade: 17, nota: 9 },
    { nome: 'Ana', idade: 19, nota: 10 },
    { nome: 'Vane', idade: 17, nota: 8 },
    { nome: 'Aje', idade: 15, nota: 5 }
  ];
  
  const pegarAprovado = (aluno) => {
      return aluno.nota >= 6;
  };
    
  const pegarReprovado = (aluno) => {
      return aluno.nota < 6;
  };
  
  const aprovados = alunos.filter(pegarAprovado);
  const reprovados = alunos.filter(pegarReprovado);
  
  console.log("Aprovados:", aprovados);
  console.log("Reprovados:", reprovados);
  */

  // TESTANDO REDUCE

  /*
  const alunos = [
    { nome: 'Arthur', idade: 17, nota: 9 },
    { nome: 'Ana', idade: 19, nota: 10 },
    { nome: 'Vane', idade: 17, nota: 8 },
    { nome: 'Aje', idade: 15, nota: 5 }
  ];
  
  const notas = alunos.map(aluno => aluno.nota)
  const somando = notas.reduce((acumullator, valor) => {
    console.log(acumullator, valor)
    return acumullator + valor
  })

  console.log(somando)
  
*/

  /*
  const alunos = [
    { nome: 'Arthur', idade: 17, nota: 9 },
    { nome: 'Ana', idade: 19, nota: 10 },
    { nome: 'Vane', idade: 17, nota: 8 },
    { nome: 'Aje', idade: 15, nota: 5 }
  ];
  
const nomes = alunos.map(aluno => aluno.nome);
const reduzindo = nomes.reduce((acumulador, valor) => {
    console.log(acumulador, valor);
    return acumulador + valor;
}, ' ')
console.log(reduzindo);
*/

// TESTANDO SOME

const alunos = [
    { nome: 'Arthur', idade: 17, nota: 9 },
    { nome: 'ana', idade: 19, nota: 10 },
    { nome: 'Vane', idade: 17, nota: 8 },
    { nome: 'AJen', idade: 15, nota: 5 }
  ];

  console.log(alunos )
const nomes = (pessoa => pessoa.nome.startsWith('J'));

console.log(alunos.some(nomes));
