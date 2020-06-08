/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors occurences(cards) 
 * retournera { as: 2, seven: 1, height: 1, queen: 1 }
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */

const CARDS = {
  as: "A",
  king: "K",
  queen: "Q",
  jack: "J",
  ten: "10",
  nine: "9",
  height: "8",
  seven: "7",
  six: "6",
  five: "5",
  four: "4",
  three: "3",
  two: "2"
}

function occurences(cards) {

  const cardsValue = [];
  for (var i = 0; i <cards.length; i++){
    cardsValue.push(cards[i].slice(0, -1));
  }
  for (const val in CARDS) {
    for (var i = 0; i<cardsValue.length; i++){
      if(CARDS[val] === cardsValue[i]){
      
      //result.val = CARDS[val];
      Object.assign(result, {val: CARDS[val]});
      console.log(result)
      	//console.log(`${val}: ${CARDS[val]}`);
       // result.CARDS = CARDS[val];
      }
    }
  }

}

export { occurences };