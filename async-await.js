/**
 *
 *  con solo poner async te crea la funcion promesa
 * Simula que esta en el mismo hilo de operaciones
 * await espero el resultado de la primer funcion
 */


// let getNombre = async() =>{
//   throw new Error('No existe un nombre para ese usuario');
//   return 'Ramon';
// }// let getNombre = async() =>{
//   throw new Error('No existe un nombre para ese usuario');
//   return 'Ramon';
// }
//

let getNombre = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
          resolve('Ramon')
        }, 3000)
    })
}

let saludo = async () =>{
  let nombre = await getNombre();

  return `Hola ${nombre}`;
}

saludo().then(mensaje =>{
  console.log(mensaje);
})
