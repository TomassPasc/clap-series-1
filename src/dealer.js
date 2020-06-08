/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function dealer() {
  const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const cardColor = ["d", "c", "h", "s"];
  const decks = [];
  const result = [];

  //création du decks
  cardValue.forEach(function(value){
  	 cardColor.forEach(function(color){
     decks.push(value + color);
    	})
    })

    //shuffle up and deal
    const decksShuffle = shuffle(decks);
    const hand1 = decksShuffle.slice(0,5);
    const hand2 = decksShuffle.slice(5,10);
    result.push(hand1);
    result.push(hand2);
    return result;
}

export { dealer };