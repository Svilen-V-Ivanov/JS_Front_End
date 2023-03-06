function sumNumbers (number) {
    let numStr = [...number.toString()];
    let oddStr = [];
    let evenStr = [];

    numDivider(number);

    console.log(`Odd sum = ${oddStr.reduce((a, b) => a + b, 0)}, Even sum = ${evenStr.reduce((a, b) => a + b, 0)}`)

    function numDivider(numbers) {
        for (const value of numStr) {
            const valueNum = Number(value);
            if (valueNum % 2 === 0) {
                evenStr.push(valueNum);
            } else {
                oddStr.push(valueNum);
            }
        }
    }
}

sumNumbers(3495892137259234)