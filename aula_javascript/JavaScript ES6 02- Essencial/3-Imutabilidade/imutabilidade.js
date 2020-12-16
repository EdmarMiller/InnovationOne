// Conceito de imutabilidade 
// tmb é um conceito de liguagem funcional
// linguagem funcional os dados criados nao mudam

// se precisamos alterar ela, criamos uma outra


const user = {
  name : 'Edmar Miller',
  lastName : 'Gabriel'
};

function getUserWithFullName(user) {
  return{
    ...user,
    fullName : `${user.name} ${user.lastName}` 
  }
};

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);
