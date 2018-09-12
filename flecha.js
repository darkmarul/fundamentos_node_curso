// function sumar(a,b){
//   return a+b
// }
//
//
// let sumar = (a,b) => a+b
// let saludar = () => 'Hola mundo';
//
// let saludar = (nombre) =>`Hola ${nombre}`
//
// console.log(saludar('Ramon'));


let deadpool ={
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre(){
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
  }
};

console.log(deadpool.getNombre());
