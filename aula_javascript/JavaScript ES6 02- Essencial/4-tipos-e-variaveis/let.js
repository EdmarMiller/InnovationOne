// so substitui o let onde era var

(()=> {
  let test = 'valor da função';
  cl=console.log;
  cl(`Valor dentro da função "${test}"`);
  if(true) {
    let test = 'valor if';
    cl(`Valor dentro do if "${test}"`);
  }
  cl(`Valor apos a execução do if "${test}"`);
})();