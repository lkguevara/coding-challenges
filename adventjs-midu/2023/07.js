/**
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D. Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII. Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/



function drawGift(size, symbol) {
    const edge = '#';
    const space = ' ';
    const cubeSize = size * 2 - 1;
    const halfSize = size - 1;
  
    let result = '';
  
    for (let i = 0; i < cubeSize; i++) {
      const isEdgeRow = [0, cubeSize - 1].includes(i);
      const rowDepth = Math.min(i, cubeSize - i - 1);
      const rowLength = rowDepth + size;
  
      result += i < size ? space.repeat(halfSize - rowDepth) : '';
  
      for (let j = 0; j < rowLength; j++) {
        const isBorderOrCorner = isEdgeRow
          || (i === halfSize && j < size)
          || [0, halfSize, rowLength - 1].includes(j);
        result += isBorderOrCorner ? edge : symbol;
      }
      result += '\n';
    }
  
    return result;
  }

console.log(drawGift(4, '+'))