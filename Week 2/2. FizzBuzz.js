// FizzBuzz
for (let counter = 1; counter <= 100; counter++) {
//Er wordt een getallenreeks gemaakt, van 1 tot 100.

    let tekst1 = "Fizz";
    let tekst2 = "Buzz";
    let tekst3 = "FizzBuzz";

    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log(tekst3)
        // Als in de getallenreeks een getal in de tafel van 3 of 5 voorkomt, verschijnt er een string.
    } else if (counter % 3 == 0) {
        console.log(tekst1)
    } else if (counter % 5 == 0) {
        console.log(tekst2)
    }
    else{console.log(counter)}
}


