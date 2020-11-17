let frutas = ["Maça","Pera", "Uva"];
console.log(frutas);
console.log(frutas[0]); // maça
// Incruindo itens
frutas.push("manga"); // incrui manga no primeiro index livre, 3
console.log(frutas);
console.log(frutas[3]); // manga
// retirando o ultimo item da lista
frutas.pop(); // - Manga
frutas.pop(); // - Uva
console.log(frutas);
// Ver tamanho da lista
console.log(frutas.length);
// incruindo Uva e maçã
frutas.push("Uva","Manga","Caju");
console.log(frutas);
// Revertendo a lista
console.log(frutas.reverse());
// Transformadno em string
console.log("Imprimindo com String e naum array");
console.log(frutas.toString());
// Muda o item que separa de , pra -- por exemplo
console.log("Mudando separador de, pra --");
console.log(frutas.join("--"));



// exclarecer depois

let nome= ("Edmar");
console.log(nome);

console.log(nome[0]);
console.log(nome[1]);
console.log(nome[2]);
console.log(nome[3]);
console.log(nome[4]);
console.log(nome[5]);
