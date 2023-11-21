/*
Un espía está enviando mensajes encriptados. Tu misión es crear un programa que nos ayude a buscar patrones... Los mensajes son palabras separadas por espacios como este: gato perro perro coche Gato peRRo sol

Necesitamos que el programa nos devuelva el número de veces que aparece cada palabra en el mensaje, independientemente de si está en mayúsculas o minúsculas. El resultado será una cadena de texto con la palabra y el número de veces que aparece en el mensaje, con este formato:
gato2perro3coche1sol1 ¡Las palabras son ordenadas por su primera aparición en el mensaje!

** Más ejemplos: **
llaveS casa CASA casa llaves -> llaves2casa3
taza ta za taza -> taza2ta1za1
casas casa casasas -> casas1casa1casas1

*/

// Pasos para resolverlo
/**
    Paso 1: Definir una función que reciba el mensaje como parámetro.
    Paso 2: Convertir el mensaje completo a minúsculas para hacer la comparación de palabras insensible a mayúsculas y minúsculas.
    Paso 3: Dividir el mensaje en palabras, se convierte el string en un arreglo de palabras
    Paso 4: Inicializar un objeto vacío para contar las palabras
    Paso 5: Inicializar un objeto vacío para registrar la primera aparición de cada palabra
    Paso 6: Contar las palabras y registrar la primera aparición
    Paso 7: Construir la cadena de resultado ordenando las palabras según su primera aparición y mostrando el recuento
*/

cantidadPalabras = (data) => {
  // 2. Convertir el mensaje a minúsculas.
  const mensaje = data.toLowerCase();

  // 3. Dividir el mensaje en un arreglo de palabras
  const arregloPalabras = mensaje.split(" ")

  let conteoPalabras = {}, primeraAparicion = {}

  // 6. Contar las palabras y registrar la primera aparición
  for (let i = 0; i < arregloPalabras.length; i++) {
    const palabra = arregloPalabras[i];
    
    // condicional para contar las palabras
    if(conteoPalabras[palabra]){
      conteoPalabras[palabra]++
    }else{
      conteoPalabras[palabra] = 1
    }

    // Registrar la aparición de la palabra
    if(!primeraAparicion[palabra]){
      primeraAparicion[palabra] = i+1
    }
  }

  // 7. ordenar el resultado
    // 7.1 arreglo para guardar el resultado
    const arregloOrdenado = [];

    // 7.1 Obtener las palabras únicas del mensaje (para ordenarlas)
    const palabrasUnicas = Object.keys(primeraAparicion);

    // 7.2 Ordenar las palabras según su primera aparición
    palabrasUnicas.sort((a,b) => primeraAparicion[a] - primeraAparicion[b])
    console.log(palabrasUnicas)

    // 7.3 Construir la cadena de resultado
    palabrasUnicas.forEach((palabra) => {
      arregloOrdenado.push(`${palabra}${conteoPalabras[palabra]}`);
    });

      // Unir las palabras en una cadena
    const resultadoFinal = arregloOrdenado.join("");

    // Devolver el resultado si es necesario
    return resultadoFinal;
}

console.log(cantidadPalabras("murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco tigre jaguar leopardo oso lobo zorro mapache ardilla elefante rinoceronte hipopotamo cebra jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago flamenco pinguino tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon"));