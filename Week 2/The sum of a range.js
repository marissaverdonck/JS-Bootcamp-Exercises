// The sum of a range
function range(start, end) {
    let getallenReeks = [];
    //Hier komt de getallenreeks in de staan vanuit de loop

    if (start < end) {
        for (let i = 0; i < end; i++)
            getallenReeks.push(start + i);
        //Zolang start kleiner is dan end, zal er in de loop steeds +1 bij start bijkomen. dit wordt in de getallenrReeks array gepusht.
    }
    return getallenReeks;
}

function sum(getallenReeks) {
    let optelling = 0;
    for (let i = 0; i < 10; i++) {
        //De getallenreeks van functie range wordt doorlopen met i.

        optelling += getallenReeks[i];
        //Elke waarde uit de array (i) wordt bij optelling geteld
    }
    return optelling;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
