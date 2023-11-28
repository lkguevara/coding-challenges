/*
En el mundo del espionaje, se utiliza un lenguaje de codificación con símbolos que realizan operaciones matemáticas simples. Tu tarea es crear un mini compilador que interprete y ejecute programas escritos en este lenguaje de símbolos. Las operaciones del lenguaje son las siguientes:

  "#" Incrementa el valor numérico en 1.
  "@" Decrementa el valor numérico en 1.
  "*" Multiplica el valor numérico por sí mismo.
  "&" Imprime el valor numérico actual.
El valor numérico inicial es 0 y las operaciones deben aplicarse en el orden en que aparecen en la cadena de símbolos.

** Ejemplos de entrada: **
    Entrada: "##*&"
    Salida esperada: "4"
    Explicación: Incrementa (1), incrementa (2), multiplica (4), imprime (4).

    Entrada: "&##&*&@&"
    Salida esperada: "0243"
    Explicación: Imprime (0), incrementa (1), incrementa (2), imprime (2), multiplica (4), imprime (4), decrementa (3), imprime (3).

*/

// Pasos para resolverlo
/**
    Paso 1: Inicializar el valor numérico
    Paso 2: Iterar sobre la cadena de símbolos.
    Paso 3: Dentro del bucle, implementar la lógica para cada operación:
      - Si el símbolo es "#", incrementar el valor numérico en 1.
      - Si el símbolo es "@", decrementar el valor numérico en 1.
      - Si el símbolo es "*", multiplicar el valor numérico por sí mismo.
      - Si el símbolo es "&", imprimir el valor numérico actual.
    Paso 4: Retornar o imprimir el resultado:
*/

decifrarMensaje = (data) => {
  let numeroInicial = 0;
  let salida = "";

  for (let index = 0; index < data.length; index++) {
    const simbolo = data[index];
    if(simbolo == "#"){
      numeroInicial++
    }else if(simbolo == "@"){
      numeroInicial--
    }else if(simbolo == "*"){
      numeroInicial *= numeroInicial;
    }else if(simbolo == "&"){
      salida += numeroInicial.toString();
    }
  }
  return salida;
}

// Otra forma más sencilla
/*decifrarMensaje = (data) => {
  let numeroInicial = 0;

  for (let index = 0; index < data.length; index++) {
    const simbolo = data[index];
    if(simbolo == "#"){
      numeroInicial++
    }else if(simbolo == "@"){
      numeroInicial--
    }else if(simbolo == "*"){
      numeroInicial *= numeroInicial;
    }else if(simbolo == "&"){
      console.log(numeroInicial)
    }
  }
}*/

console.log(decifrarMensaje("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"));

// 