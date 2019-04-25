// Chessboard
let i = 7;

for (let counter = 0; counter < i; counter++) {
// de waarde van i bepaald hoeveel rijen van het chessboard worden gemaakt

    let hekjes = "# # # #";
    let spatie = " ";

    if (counter % 2) {
        console.log(hekjes)
        // Wanneer de counter een even getal is zal de rij hekjes worden getoond
    } else {
        console.log(spatie + hekjes)
         // Wanneer de counter een oneven getal is zal de rij hekjes worden getoond met een spatie ervoor
    }
}

