/** Ejercicio número 94  Construir cadena a partir de árbol binario
https://leetcode.com/problems/binary-tree-inorder-traversal/?envType=daily-question&envId=2023-12-09

Dada la raíz de un árbol binario, devuelve el recorrido en orden de los valores de sus nodos.

Ejemplo 1
    Input: root = [1,null,2,3]
    Output: [1,3,2]

Example 2:
    Input: root = []
    Output: []

Example 3:
    Input: root = [1]
    Output: [1]

*/


const inorderTraversal = (root) => {
    if (!root) return [];
    let result = [];
    if (root.left) result = result.concat(inorderTraversal(root.left));
    result.push(root.val);
    if (root.right) result = result.concat(inorderTraversal(root.right));
    return result;
}



console.log(tree2str([1,null,2,3]));
