/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors orderCards(cards) retournera ["As", "Ad", "Qs", "8d", "7h"]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * On considère que la valeur de la carte prime sur le type de la carte
 */
function orderCards(cards) {
  const cardValue = ["A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const cardColor = ["s", "h", "c", "d"];
  const decks = [];
  const result = [];

    //création du decks du plus fort au moins fort
    cardValue.forEach(function(value){
      cardColor.forEach(function(color){
      decks.push(value + color);
       })
     })

     //ajout des cartes par ordre croissant
     for (var i = 0; i<decks.length; i++){
       for (var j = 0; j<cards.length; j++){
         if (decks[i] === cards[j]){
           result.push(decks[i]);
         }
       }
     }
     return result;
}

export { orderCards };