
if (true) {

} else {

}
if (true) {

} else if (condition) {

} else {

}
// operacion ternaria
let numero = 2;
let resultado = numero == 2 ? 'Soy un 2' : 'No soy un dos';

// opcion 2
let numero = 2;
let resultado = numero == 1 ? 'Soy un 1' :
    numero == 2 ? 'Soy un 2' :
        numero == 3 ? 'Soy un 3' :
            'No soy ni 1 ni 2 ni 3 si no... soy ' + numero
console.log(resultado);
