/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var res1= arr1.reduce(reducer);
  var res2= arr2.reduce(reducer);
  return res1 + res2;
  //gérer l'empty 

}

export { plusArray };