// 1. algoritmo que lea un número e indique si este es positivo o negativo

    function numbers(numero) {
        if (numero>= 0) {
            console.log(`El número ${numero} es positivo`)
        }else if(numero< 0){
            console.log(`El número ${numero} es negativo`)
        }else{
            console.log("Debes ingresar un número")
        }
    }
    numbers(8)

    

// 2. algoritmo que lea un número e indique si este es par o impar

    function numbers(numero) {
        if (numero %2 ==0) {
            console.log(`El número ${numero} es par`)
        }else if(numero %2 != 0){
            console.log(`El número ${numero} es impar`)
        }else{
            console.log("Debes ingresar un número")
        }
    }
    numbers(8)


// 3. algoritmo que lea un número e indique si este es par-positivo, par-negativo, imparpositivo
    
    function numbers(numero) {
        if (numero %2 ==0 && numero>= 0) {
            console.log(`El número ${numero} es par-positivo`)
        }else if(numero %2== 0 && numero< 0){
            console.log(`El número ${numero} es par-negativo`)
        }else if(numero %2 != 0 && numero>= 0){
            console.log(`El número ${numero} es impar-positivo`)
        }else{
            console.log("Debes ingresar un número")
        }
    }
    numbers(8)


// 4. algoritmo que lea un numero y si este es mayor o igual a 10 devuelva el triple de este de lo contrario la cuarta parte de este.

    function numbers(numero) {
        if (numero >= 10) {
            console.log(`${numero*3}`)
        }else if(numero < 10) {
            console.log(`${numero/4}`)
        }else{
            console.log("Debes ingresar un número")
        }
    }
    numbers(8)
    

// 5.Obtener el iva de una venta, si esta es superior a $ 150 aplicar un descuento del 25 %

    function numbers(sale) {
        if (sale > 150) {
            console.log(`Tu descuento es: ${sale*0.25} `)
        }else if(sale < 150) {
            console.log(`Tu venta no alcanza a tener un descuento ya que fue: ${sale}`)
        }else{
            console.log("Debes ingresar un número")
        }
    }
    numbers(200)
    

// 6. Leer tres numeros e imprimir el mayor de ellos
    
    function numbers(number1,number2,number3) {
        if (number1 > number2 && number1 > number3) {
            console.log(`El numero mayor es: ${number1}`)
        }else if(number2 > number1 && number2 > number3) {
            console.log(`El numero mayor es: ${number2}`)
        }else if(number3 > number2 && number3 > number1) {
            console.log(`El numero mayor es: ${number3}`)
        }else{
            console.log("Debes ingresar un número")
        }
    }
    numbers(5,10,3);

    // Utilizando math
    function numeroMayor (num1,num2,num3){
        console.log(Math.max(num1,num2,num3))
    }

    numeroMayor(5,16,8)

// 7. Determine el valor de un pasaje en avion , conociendo la distancia a recorrer, el numero de dias de estancia, y sabiendo que si la distancia a recorrer es superior a 1000 Km y el numero de dias de estancia es superior a 7, la linea aerea le hace un descuento del 30%.
    
    function numbers(distancia,estancia) {
        if (distancia > 1000 && estancia > 7){
            console.log("Se le brindará un descuento del 30% sobre su pasaje")
        }
        else{
            console.log("Lamentamos no poderte brindar ningún descuento")
        }
    }
    numbers(100,7);

// 8. algoritmo que permita determinar el precio de un pasaje en avion sabiendo que : valor por kilometro recorrido es de ($47) sobre los 1000 km de vuelo el valor del kilometro es de $25.
    
    function numbers(distancia) {
        if (distancia < 1000){
            var pasaje = distancia *47;
            console.log("El valor de su pasaje es ", +pasaje)
        }
        else {
            var pasaje = distancia * 25;
            console.log("El valor de su pasaje es ", +pasaje)
        }
    }
    numbers(100);



// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const random = (max,min) => { return Math.ceil(Math.random()*(max-min)+min); }
console.log(random(600,501));


