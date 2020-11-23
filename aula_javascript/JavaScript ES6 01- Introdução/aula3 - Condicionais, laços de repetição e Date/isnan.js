//função para aceitar somente numero no pronpt


function promptInt(mensagem, tenteNovamente) {
  var msg = mensagem;
  while (true) {
      var ret = parseInt(prompt(msg));
      if (!isNaN(ret)) return ret;        //isNaA é pra verificar se o usuario digitou um numero
      msg = tenteNovamente;
  }
}

var count = promptInt("Teste", "Por favor, digite um número.\nTente novamente.");
alert("Você digitou o número " + count + ".");