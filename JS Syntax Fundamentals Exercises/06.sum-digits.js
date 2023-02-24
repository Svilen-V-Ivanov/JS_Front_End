function sumDigits(value) {
    let sum = 0;
    let numberAsString = value.toString();

    for (const digitAsString of numberAsString) {
        let digit = Number(digitAsString);
        sum += digit;
    }

    console.log(sum)

    // Alternative method
    // while (value > 0) {
    //     let lastDigit = value % 10;
    //     sum += lastDigit
    //     value = Math.floor(value / 10);
    // }

    // console.log(sum)
}

sumDigits(245678);