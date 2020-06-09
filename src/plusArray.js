/*
 * /!\ À faire seul !
 * L'objectif est d'additionner les valeurs des deux tableaux :
 * si arr1 = [5, 6, 7]
 * et arr2 = [5, 4, 3]
 * alors plusArray(arr1, arr2) retournera 30 
 */
function plusArray(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (arr1.length === 0){
  	return arr2.reduce(reducer);
  } 
  else if(arr2.length === 0){
  	return arr1.reduce(reducer);
  } else {
  var res1= arr1.reduce(reducer);
  var res2= arr2.reduce(reducer);
  return res1 + res2;
  }

}

export { plusArray };