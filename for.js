let estudiantes = ['Juan','Paola','Lucho'];
function saludarEstudiantes (estudiante){
    console.log(`HOLA.. ${estudiante}`); // comilla ALTGR + } = ``   
}
//// opcion 1

for(let i=0 ; i < estudiantes.length; i++  ){ // <> ALTGR + , O . 
    saludarEstudiantes (estudiantes[i]);
    //console.log (`buenos dias.. ${estudiantes[i]}`);
}

//// opcion 2

let estudiantes = ['Juan','Paola','Lucho'];
for(let estudiante of estudiantes){
    //saludarEstudiantes(estudiante);
    console.log(estudiante);
} 