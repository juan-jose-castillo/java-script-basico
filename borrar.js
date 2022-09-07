const tsus = ['Free', 'Basic', 'Expert', 'ExpertPlus'];
const detail = ['Solo puedes tomar los cursos gratis',
    'Puedes tomar casi todos los cursos de Platzi durante un mes',
    'Puedes tomar casi todos los cursos de Platzi durante un año',
    'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
    'Suscribete y nunca pares de aprender!!'];
const ml = (log) => {
    console.log(log);
}
const consultaSuscripcion = (sus) => {
    let res = tsus.indexOf(sus) == -1 ? 4 : tsus.indexOf(sus);
    ml(detail[res]);
}
consultaSuscripcion('Basic');
