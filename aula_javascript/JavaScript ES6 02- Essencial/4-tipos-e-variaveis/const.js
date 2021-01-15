const name = 'Edmar';

// nao podemos alterar o valor do tipo primitivo

const user =  {
  name :'Edmar'
};

// mas se for um objeto, podemos trocar suas propiedades
user.name ='Outro nome';

// nao podemos fazer o objeto 'apontar' pra outro lugar
user = {
  name: 'Edmar'
};

const persons =['Edmar', 'Miller', 'Gabriel'];

// podemos add novos itens
persons.push('joão');

// podemos remover alguns itens
persons.shift();

// podemos alterar diretamente 
persons[1] = 'james';


console.log('\nArray após as alterações:', persons);

