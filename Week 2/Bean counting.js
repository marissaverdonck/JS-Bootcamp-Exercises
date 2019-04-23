// Bean counting
function countBs(string){
    let telling = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      telling += 1;
    }
  }
  return telling;
}
    


function countChar(string, letter) {
  let telling = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      telling += 1;
    }
  }
  return telling;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

