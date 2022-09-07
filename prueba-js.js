// Variables y operaciones

/*¿Qué es una variable y para qué sirve?

    Una variable es un espacio en memoria, el cual nos sirve para guardar  información.

* ¿Cuál es la diferencia entre declarar e inicializar una variable?
 	
    Al momento de declarar únicamente resulta ser una variable sin ningún dato. A diferencia de inicializarlo, resulta ser conocedor el tipo de variable a partir de su dato inicializado. Ya sea este Integer, storing, etc.

* ¿Cuál es la diferencia entre sumar números y concatenar strings?

    Sumar, es la acción aritmética simple de aumentar la cantidad del numero inicial y concatenar es juntar lado a lado los números que se tienen, sin realizar ninguna operación aritmética

* ¿Cuál operador me permite sumar o concatenar?

Si la variable es declara e inicializada como integer estos podrán ser sumadas, pero si se tiene declarada un string o en su caso se tiene una dato con comilla doble o simple con el operador mas, pasa a realizar una concatenación
*/

//Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

/*
 Nombre     let nombre string
 Apellido   let apellido string
 Nombre de usuario en Platzi let usuario  string
 Edad       let edad integer
 Correo electrónico let email string
 Mayor de edad      let mayorEdad boolean
 Dinero ahorrado    let ahorro integer
 Deudas             let deuda integer
*/
//Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = 'juan jose';
let apellido = 'castillo';
let usuario = 'jjandroid2015';
let edad = 35;
let email = 'jjandroid2015@gmail.com';
let mayorEdad = true;
let ahorro = 0;
let deuda = 60000;

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

//Nombre completo (nombre y apellido)

console.log(nombre + ' ' + apellido);

//Dinero real (dinero ahorrado menos deudas)

console.log(ahorro - deuda);

/*FUNCIONES

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?

    Es un procedimiento de acciones de código, el cual puede ser con variables de entrada, como parámetros.

¿Cuándo me sirve usar una función en mi código?
 
    Nos sirve usar una funcion, cuando necesitamos la realización de un procedimiento repetitivo a partir de unos valores, convirtiendose a si en un nuevo dato.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
 
    Los parámetros son las variables que se declararon al momento de crear la función y los argumentos son los valores que se pasan en medio de los paréntesis al momento de llamar la función.

*/

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes 
//por parámetros y argumentos en una función:

function saludo(name, lastname, nickname) {
    return console.log('Mi nombre es ' + name + ' ' +
        lastname + ', pero prefiero que me digas ' + nickname + ' ');
}
saludo('Juan', 'Castillo', 'JJmix');

//Responde las siguientes preguntas en la sección de comentarios:

/*¿Qué es una condicional?
// Es cuando tras una evaluacion se determina si cumple o no la condicion.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

// Existen 4 tipos de condicionales el IF, ELSE, ELSE IF, SWITCH

¿Puedo combinar funciones y condicionales?

Efectivamente se puede realizar la combinacion.

Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
*/
// Free/Basic/Expert/ExpertPlus

let suscription = 'Basic';
if (suscription == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (suscription == 'Basic') {
    console.log("Puedes tomar casi todos los ursos de Platzi durante un mes");
} else if (suscription == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (suscription == 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Replica el comportamiento de tu condicional anterior con if, else y else if, 
//pero ahora solo con if (sin else ni else if).

let suscription = 'Basic';
let res = suscription == 'Free' ?
    console.log('Solo puedes tomar los cursos gratis') :
    suscription == 'Basic' ?
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes") :
        suscription == 'Expert' ?
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año") :
            suscription == 'ExpertPlus' ?
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año") :
                console.log("Suscribete y nunca pares de aprender")
console.log(res);

// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays 
// y un solo condicional.

// Me puse a indagar y me gusto la funcion flecha que me parece mas resumida, ademas que implemente una nueva
// funcion de console.log asi solo lo llamo con ml y no escribo todo ggg.

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

/*
Ciclos

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?

Es la repeticion del bloque de codigo hasta que a partir de una condicion se detenga el mismo

¿Qué tipos de ciclos existen en JavaScript?

El while , do while , For, For in, For of

¿Qué es un ciclo infinito y por qué es un problema?

Generalmente es cuando no hay condicion que se cumpla para que se detenga el mismo.

¿Puedo mezclar ciclos y condicionales?

Si se puede tener condicionales al momento de llevarse los ciclos

*/

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
// Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let input;
while (input != 4) {
    input = window.prompt('Cuanto es 2 + 2');
    if (input == 4) {
        console.log('Felicidades lo lograste');
    }
}

/*Listas
Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?

Es una estructura de datos de guarda varios valores siendo numeros, cadenas como tambien objetos
 
¿Qué es un objeto?

Es un paradigma el cual realiza la interpretacion del mundo real como ser, persona(nombre, edad, sexo), auto (marca, color, peso, motor ) y demas.

¿Cuándo es mejor usar objetos o arrays?

Dependidiendo del problema a solucionar

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si se puede hacer la mezcla

Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
*/

let frutas = ['pera', 'manzana', 'uva', 'chirimoya', 'frutilla'];
function imprimeFrutas(frut) {
    return console.log(frut[0]);
}
imprimeFrutas(frutas);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno 
//(no se vale imprimir el array completo).

let frutas = ['pera', 'manzana', 'uva', 'chirimoya', 'frutilla'];
function imprimeFrutas(fruta) {
    for (const value of fruta) {
        console.log(value);
    }
}
imprimeFrutas(frutas);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let frutas = {
    nombre: 'Platano',
    color: 'Amarillo',
    temporada: 'Todo el año',
    peso: '150g'
}
function mostrarFruta(fruta) {
    for (const propiedad in fruta) {
        console.log(`Su . ${propiedad} es . ${fruta[propiedad]}`);
    }
}
mostrarFruta(frutas);