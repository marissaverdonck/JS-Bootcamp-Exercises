// The sum of a range
function range(start, end) {
    let getallenReeks = [];

    if (start < end) {
        for (let i = 0; i < end; i++)
            getallenReeks.push(start + i);
    }
    return getallenReeks;
}

function sum(getallenReeks) {
    let optelling = 0;
    for (let i = 0; i < 10; i++) {

        optelling += getallenReeks[i];
    }
    return optelling;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
