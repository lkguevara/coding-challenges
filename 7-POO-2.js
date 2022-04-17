/*1. 
    Comparador de IMC! Usar objetos para implementar los cálculos! 
    Recuerda: IMC = masa / altura ** 2 = masa / (altura * altura) (masa en kg y altura en metros)
    
    Tareas:
        1. Para cada uno de ellos, cree un objeto con propiedades para su nombre completo, masa y altura (Mark Miller y John Smith)
        2. Cree un método 'calcBMI' en cada objeto para calcular el IMC (el mismo método en ambos objetos). Almacene el valor de IMC en una propiedad y también devuélvalo
        del método
        3. Registre en la consola quién tiene el IMC más alto, junto con el nombre completo y el respectivo IMC. 
        
        Ejemplo: "¡El IMC de John (28,3) es más alto que el de Mark (23,9)!"

        Mark pesa 78 kg y mide 1,69 m de altura. John pesa 92 kg y mide 1,95 m.
*/

    const John = {
        nombre: "John",
        masa: 92,
        altura:1.95,
        
        // método 
        calcBMI: function(){
            this.bmi =  this.masa / (this.altura**2);
            return this.bmi;
        }
    }
    

    const Mark = {
        nombre: "Mark",
        masa: 78,
        altura:1.69,

         // método 
         calcBMI: function(){
            this.bmi =  this.masa / (this.altura**2);
            return this.bmi;
        }
        
    }

    function resultado() {
        John.bmi > Mark.bmi ? console.log(`¡El IMC de John ${John.bmi} es más alto que el de Mark ${Mark.bmi}`) : console.log(`¡El IMC de Mark ${Mark.bmi}  es más alto que el de John ${John.bmi} `)
    }

    John.calcBMI();
    console.log(John.bmi)
    Mark.calcBMI();
    console.log(Mark.bmi)
    console.log(resultado())