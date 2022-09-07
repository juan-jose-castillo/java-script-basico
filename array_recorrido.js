// MAP
let articulos = [
    { nombre: 'bici', costo: 2000 },
    { nombre: 'tv', costo: 2500 },
    { nombre: 'libro', costo: 320 },
    { nombre: 'celular', costo: 1000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
];
let nombreArticulo = articulos.map(function(parametro){
    return parametro.nombre;
});
/*
ombreArticulo
(7) ['bici', 'tv', 'libro', 'celular', 'laptop', 'teclado', 'audifonos']
*/



// FILTER filter() : Devuelve todos los elementos del array que cumplan con la condición dada
let articulos = [
    { nombre: 'bici', costo: 2000 },
    { nombre: 'tv', costo: 2500 },
    { nombre: 'libro', costo: 320 },
    { nombre: 'celular', costo: 1000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
];
let articulosFiltrados = articulos.filter(function (parametro) {
    return parametro.costo <= 500
});
/*
0: {nombre: 'libro', costo: 320}
1: {nombre: 'teclado', costo: 500}
*/

const aleatorio2 = ()=> Math.random();
console.log(aleatorio2());

