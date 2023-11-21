/* 
    Ejercicio # 121 letcode  url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 
    
    Dado un array de precios, donde precios[i] es el precio de una acción determinada en el i-ésimo día. Se desea maximizar sus ganancias eligiendo un único día para comprar una acción y eligiendo un día diferente en el futuro para vender esa acción. Se debe retornar la ganancia máxima obtenida, caso contario debe devolver cero.
/*

/* Pasos:

    1. Leer y entender bien el problema, probar casos generados por nosotros.

    2. Proponer una solución en pseudocodigo, validar a través de una prueba de escritorio.

        maximaGanancia = 0
        for (i = 0; i <= precios.lenght -2 ; i++)
            for (j = i + 1; j <= precios.lenght -1 ; j++)
                gananciaActual = precios[j]-precios[i]

                if(maximaGanancia <= gananciaActual)
                    maximaGanancia = gananciaActual
                end
            end 
        end 

    3. Implementar la solución en un lenguaje de programación especifico.
*/

const maximaGanancia = (prices) => {
    
    let maximaGanancia = 0

    for (let i = 0; i <= prices.length -2; i++) {
        for (let j = i + 1; j <= prices.length -1; j++) {
            let gananciaActual = prices[j] - prices[i];
            
            if (maximaGanancia <= gananciaActual) {
                maximaGanancia = gananciaActual
            }
        }
        
    }

    return maximaGanancia
}

console.log(maximaGanancia([7,1,5,3,6,4]))



