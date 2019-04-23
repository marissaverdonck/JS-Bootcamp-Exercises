// FizzBuzz
for (let counter = 1; counter <= 100; counter++) {

    let tekst1 = "Fizz";
    let tekst2 = "Buzz";
    let tekst3 = "FizzBuzz";

    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log(tekst3)
    } else if (counter % 3 == 0) {
        console.log(tekst1)
    } else if (counter % 5 == 0) {
        console.log(tekst2)
    }

    console.log(counter)
}
