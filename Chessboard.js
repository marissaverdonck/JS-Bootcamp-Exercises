// Chessboard
for (let counter = 0; counter <= 7; counter++) {

    let hekjes = "# # # #";
    let spatie = " ";

    if (counter % 2 == 0) {
        console.log(hekjes)
    } else {
        console.log(spatie + hekjes)
    }
}