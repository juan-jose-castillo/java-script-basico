// SOME() some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
let articulos = [
    { nombre: 'bici', costo: 2000 },
    { nombre: 'tv', costo: 2500 },
    { nombre: 'libro', costo: 320 },
    { nombre: 'celular', costo: 1000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
];
let articulosBaratos = articulos.some(function (parametro) {
    return parametro.costo <= 700;
});
// articulosBaratos    RETORNA TRUE O FALSE
//true


// FOREACH() foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
let articulos = [
    { nombre: 'bici', costo: 2000 },
    { nombre: 'tv', costo: 2500 },
    { nombre: 'libro', costo: 320 },
    { nombre: 'celular', costo: 1000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
];
articulos.forEach(function (parametro) {
    console.log(parametro.nombre);
});
/*
 bici  tv libro celular laptop teclado audifonos
*/
// FIND() find() : Devuelve el primer elemento del array que cumpla con la condición dada
let articulos = [
    { nombre: 'bici', costo: 2000 },
    { nombre: 'tv', costo: 2500 },
    { nombre: 'libro', costo: 320 },
    { nombre: 'celular', costo: 1000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
];
let encuentraArticulo = articulos.find(function (parametro) {
    return parametro.nombre === 'laptop'
});
// {nombre: 'laptop', costo: 20000}

let emojis = [
    {nombre: 'juanito', emoji: '⏰'},
    {nombre: 'perla', emoji: '🔥'},
    {nombre: 'carlos', emoji: '🔥'}
]
let filtro = emojis.map(function(parametro){
 return parametro.emoji === '🔥'
});