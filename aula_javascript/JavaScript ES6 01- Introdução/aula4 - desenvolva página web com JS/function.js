// função soma básica

/*
 function soma(n1, n2){
   return n1+n2;
 }
 alert(soma(10, 3));

 */
// Aqui e o replace de textos


//  function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//  }

//  alert(setReplace("Vai japão", "japão", "Brasil"));



function validaIdade(idade){
  if (idade >= 18){
    validar = true
  }else{
    validar
     = false
  }
  return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));