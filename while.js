let estudiantes = ['Juan', 'Alba', 'Javier'];
function saludarEstudiantes(estudiante){
    console.log(`HOla .....${estudiante}`);
}

while(estudiantes.length>0){
  console.log(estudiantes);
  let estudiante = estudiantes.shift(); // saca valor
  saludarEstudiantes(estudiante);
}