/** Ejercicio número 606  Construir cadena a partir de árbol binario
https://leetcode.com/problems/construct-string-from-binary-tree/description/?envType=daily-question&envId=2023-12-08

Dada un root de un árbol binario, construye una cadena formada por paréntesis y enteros a partir de un árbol binario con el modo preorder traversal, y la devuelve. Omita todos los pares de paréntesis vacíos que no afecten a la relación de correspondencia uno a uno entre la cadena y el árbol binario original.

Ejemplo 1:
    Input: root = [1,2,3,4]
    Output: "1(2(4))(3)"
    Explanation: Originalmente, tiene que ser "1(2(4)())(3()())", pero hay que omitir todos los pares de paréntesis vacíos innecesarios. Y será "1(2(4))(3)".

Ejemplo 2:
    Input: root = [1,2,3,null,4]
    Output: "1(2()(4))(3)"
    Explanation: Casi lo mismo que en el primer ejemplo, salvo que no podemos omitir el primer par de paréntesis para romper la relación de correspondencia uno a uno entre la entrada y la salida.

*/


const tree2str = (root) => {
    if (!root) return '';
    if (!root.left && !root.right) return `${root.val}`;
    if (!root.right) return `${root.val}(${tree2str(root.left)})`;
    return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;

}



console.log(tree2str([1,2,3,4]));
