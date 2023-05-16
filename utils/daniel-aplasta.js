export function danielAplasta(palabra) {
  /*(palabra/Es un argumento)arguments es un objeto similar a Array accesible dentro de funciones que contiene los valores de los argumentos pasados a esa función. *fuentes: developer.mozilla*/
  let sentence = "";

  for (let i = 0; i < palabra.length; i++) {
    /* (.length)Esta propiedad devuelve el número de caracteres de una cadena, en este caso tiene la cantidad de caracteres que se agregen cuando se invoca la función.*/
    sentence +=
      palabra[
        i
      ]; /* en esta expreción se le indica a cada caracter del argumento que se sumen a la variable sentence*/

    if (i !== palabra.length - 1) {
      //Esta operación es una condición que verifica si el índice actual de un bucle  no es igual al tamaño de una cadena de caracteres menos uno. Si la condición es verdadera, se agrega un espacio en blanco a una cadena de caracteres llamada "sentence".
      sentence += " "; //
    }
  }

  return sentence;
}

export default danielAplasta;
