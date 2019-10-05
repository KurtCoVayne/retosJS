/*
  Ciclos
*/

let lista = [2, 10, 50];

/*
  Use un ciclo "for" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
  NOTA: check es una funcion que recibe cualquiera dato.
  */
function cicloFor(check) {
  // Define el ciclo for aqui
  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];
    check(elemento)
  }
}
/*
  Usa un ciclo "while" para recorrer la lista de numeros y llamar a la funcion check con cada elemento de la lista
*/
function cicloWhile(check) {
  contador = 0;
  while(contador < lista.length){
    check(lista[contador])
    contador++
  }
  // Define el ciclo while aqui
}
