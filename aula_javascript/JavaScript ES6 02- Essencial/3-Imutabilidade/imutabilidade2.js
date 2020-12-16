const students = [
  {
    name:'Edmar',
    grade: 10
  },
  {
    name:'Clau',
    grade: 8
  },
  {
    name:'Nena',
    grade: 7
  },
  {
    name:'Mara',
    grade: 6
  }
];

function getApprovedStudents(studentsList) {
  return studentsList.filter(student => student.grade >=7);
}

const cl=console.log

cl('Alunos aprovados:');
cl(getApprovedStudents(students)); 

cl('\nLista de alunos:')
cl(students);

