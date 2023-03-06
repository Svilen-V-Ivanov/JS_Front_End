function palindromeChecker(numbers) {
    for (const number of numbers) {
        if (numChecker(number)) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

    function numChecker(number) {
        let numStr = [...number.toString()];
        const reversedNum = Number([...numStr].reverse().join(''));

        return number === reversedNum;
    }
}

palindromeChecker(
    [32,2,232,1010]
)