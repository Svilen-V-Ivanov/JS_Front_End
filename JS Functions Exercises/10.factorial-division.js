function factorialDivision(numOne, numTwo) {
    let result = factorial(numOne) / factorial(numTwo);

    console.log(result.toFixed(2));

    function factorial(number) {
        if (number === 1) {
            return number;
        }
    
        return number * factorial(number - 1);
    }
}

factorialDivision(
    5,
    2
)

factorialDivision(
    7,
    3
)