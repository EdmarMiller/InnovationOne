var test = 'example';


(()=> {
  var test;
  cl=console.log;
  cl(`Valor dentro da função "${test}"`);
  if(true) {
    var test = 'valor if';
    cl(`Valor dentro do if "${test}"`);
  }
  cl(`Valor apos a execução do if "${test}"`);
})();