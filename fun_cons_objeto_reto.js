function fruta(nombre,color){
 this.nom = nombre;
 this.col = color;
}
let menuFruta = [];
for (i=0;i<=1;i++){
let n = prompt('Ingresa el nombre de la fruta');
let c = prompt('Ingresa el color de la fruta');
menuFruta.push(new fruta(n,c));
}


// function auto(marca, modelo, annio){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.annio = annio;
// }
// let autoArray=[];
// for(i=0; i<=0 ; i++){
// let marca = prompt('Ingresa marca...');
// let modelo = prompt('Ingresa modelo...');
// let annio = prompt('Ingresa annio...');
// autoArray.push(new auto(marca, modelo, annio));
// }


