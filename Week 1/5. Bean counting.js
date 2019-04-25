// Bean counting
function countBs(string){
    let telling = 0;
  for (let i = 0; i < string.length; i++) {
      //Het aantal letters van de string is het aantal keer dat er wordt geloopt.
    if (string[i] == "B") {
      telling += 1;
        //Wanneer de letter "B" in de string gevonden is wordt er bij telling 1 opgeteld.
    }
  }
  return telling;
    // als de loop alle letters doorgelopen heeft, komt er een waarde uit telling
}

function countChar(string, letter) {
  let telling = 0;
  for (let i = 0; i < string.length; i++) {
      //Het aantal letters van de string is het aantal keer dat er wordt geloopt.
    if (string[i] == letter) {
      telling += 1;
        //Wanneer de letter in de string gevonden is wordt er bij telling 1 opgeteld.
    }
  }
  return telling;
     // als de loop alle letters doorgelopen heeft, komt er een waarde uit telling
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
