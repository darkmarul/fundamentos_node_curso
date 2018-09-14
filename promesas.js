let empleados = [{
  id: 1,
  nombre:'Ramon'
},{
  id:2,
  nombre: 'juan'
},{
  id:3,
  nombre:'Pedro'
}];

let salarios=[{
  id:1,
  salario: 1000
},{
  id:2,
  salario: 2000
}];

let getEmpleado =(id)=>{
  return new Promise((resolve, reject) =>{
    let empleadoBD = empleados.find( empleado => empleado.id === id)
    if (!empleadoBD){
      reject(`No existe un empleado con el ID ${id}`)
    }else{
      resolve(empleadoBD);
    }
  });
}

let getSalario = (empleado) => {
  return new Promise((resolve,reject) =>{
    let salarioBD = salarios.find( salario => salario.id === empleado.id)
    if(!salarioBD){
      reject(`No se encontro el salario para el usuario ${empleado.nombre}`)
    }else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioBD.salario,
        id: empleado .id
      })
    }
  })
}

getEmpleado(10).then(empleado =>{
  return getSalario(empleado);
})
.then (resp =>{
  console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
})
.catch( err =>{
  console.log(err);
})
