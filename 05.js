/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function loboEstaONoEsta(array) {
  // La funcion recibe un array 'array' de strings y numeros  como parametro
  // la funcion debe retornar true o false dependiendo de si 'lobo' esta en el array o no
  // Por ej:
  // loboEstaONoEsta(['hola', 1, 3,  'palabra']) debe devolver false
  // ideas(['hola', 'buena', 'lobo', 4, 5, ]) debe devolver true
  // Tu código aca:
  for (i = 0; i < array.length; i++) {
    if (array[i] === 'lobo') {
      return true; // si encuentra, retorna true.
    } else {
      continue; // si no encuentra, sigue evaluando.
    }
  }
  return false; // si nunca encontró, retorna false.
}
// No modifiques nada debajo de esta linea //

module.exports = loboEstaONoEsta