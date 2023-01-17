/*Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:

customerName: string total: number delivered: boolean

Tu reto es filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

Para solucionarlo vas a encontrar una función llamada filterOrders que recibe un parámetro de entrada:

array: Un array de objetos
Dentro del cuerpo de la función filterOrders debes escribir tu solución.

Ejemplo:
Input:
[
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 300,
    delivered: true,
  }
]

Output:
[
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Santiago",
    total: 300,
    delivered: true,
  }
]

*/

const filterOrders = (arrays) => {
    const arrFilter = arrays.filter(e => e.total >= 100 && e.delivered == true)
    return arrFilter
}

console.log(filterOrders([
    {
      customerName: "Nicolas",
      total: 100,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 300,
      delivered: true,
    }
  ]))