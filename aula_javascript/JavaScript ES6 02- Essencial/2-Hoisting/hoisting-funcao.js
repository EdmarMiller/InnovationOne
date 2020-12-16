
function fn() {
  log('Hosting de função');  

  function log(value){
    console.log(value);
  }
}

// Aqui há o hosting da função, veja que ela retorna o valor antes mesmo da variavel ser declarada.
// aqui iça toda a função como um todo, diferente das variaveis
fn();


function fn2() {
  function log(value){
    console.log(value);
  }
  log('Hosting de função 2')
}

fn2();