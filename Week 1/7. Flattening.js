// Flattening
    /* .reduce gaat elke waarde langs uit een array. acc onthoudt de waarde voor elke iteratie, cur is het huidige element uit de array.
    acc.concat(cur) plakt elke waarde(cur) uit de array aan de vorige waarde(acc) vast.*/   

var arrays = [[1, 2, 3], [4, 5], [6]];

var reducer= arrays.reduce(function(acc, cur) { 
    
    return acc.concat(cur);});

console.log(reducer);

// → [1, 2, 3, 4, 5, 6]