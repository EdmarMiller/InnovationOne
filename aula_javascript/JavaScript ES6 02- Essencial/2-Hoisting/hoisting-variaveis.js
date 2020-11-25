// hoisting significa levantar ou suspender algo...
// por conta disso o Let e const foi criado

function fn() {
  console.log(text); // retorna Undefined, normalmente tomamos refente errors 

  var text = 'Exemplo';
  console.log(text); // retorna Exemplo
}

fn();