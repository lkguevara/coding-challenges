/* Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
Ejemplos:
- Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
- Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

const primoFibonachiPar = (numero) => {
    let primo = false
    let fibonachi = false
    let par = false

    if(numero % 2 === 0){
        par = true
    }

    let contador = 0
    for (let i = 1; i <= numero; i++) {
        if(numero % i === 0){
            contador++
        }
    }

    if(contador === 2){
        primo = true
    }

    let a = 0
    let b = 1
    let c = 0

    while(c <= numero){
        c = a + b
        a = b
        b = c
        if(c === numero){
            fibonachi = true
        }
    }

    if(primo && fibonachi && par){
        console.log(`${numero} es primo, fibonachi y par`)
    }
    else if(primo && fibonachi && !par){
        console.log(`${numero} es primo y fibonachi`)
    }
    else if(primo && !fibonachi && par){
        console.log(`${numero} es primo y par`)
    }
    else if(primo && !fibonachi && !par){
        console.log(`${numero} es primo`)
    }
    else if(!primo && fibonachi && par){
        console.log(`${numero} es fibonachi y par`)
    }
    else if(!primo && fibonachi && !par){
        console.log(`${numero} es fibonachi`)
    }
    else if(!primo && !fibonachi && par){
        console.log(`${numero} es par`)
    }
    else if(!primo && !fibonachi && !par){
        console.log(`${numero} no es primo, no es fibonachi y es impar`)
    }
    
}

