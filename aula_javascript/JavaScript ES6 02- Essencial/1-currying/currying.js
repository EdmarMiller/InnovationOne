// Podemos ver que o dois se repete em todos, podemos memorizar o 2


function soma(a,b) {
  return a + b;
}
soma(2,2);
soma(2,3);
soma(2,4);
soma(2,5);


// Tecnica do Currying, normalmente recebe 1 parametro, retornamos uma funcao que recebe o segundo paramentro


function soma(a) {
  return function(b) {
    return a + b;
  }
};
const soma2 =soma(2);
console.log(soma(2));
console.log(soma(3));
console.log(soma(4));
console.log(soma(5));

//podemos colocar um console.log pra imprimir
console.log("Edmar");