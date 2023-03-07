function passwordValidator(input) {
    let count = 0;

    if (correctLength(input)) {
        count += 1;
    } else {
        console.log("Password must be between 6 and 10 characters");
    }

    if (correctSymbols(input)) {
        count += 1;
    } else {
        console.log("Password must consist only of letters and digits");
    }

    if (enoughDigits(input)) {
        count += 1;
    } else {
        console.log("Password must have at least 2 digits");
    }

    if (count === 3) {
        console.log("Password is valid");
    }

    // can be substituted with 'const nameFunc = (text) => [...text.matchAll(/\d/g)].lenght >= 2;' -- anonymous function
    function enoughDigits(text) {
        let digitCount = 0;
        for (let index = 0; index < text.length; index++) {
            let ascii = text[index].charCodeAt(0);
            if (48 <= ascii && ascii <= 57) {
                digitCount += 1;
            }
        }

        return digitCount >= 2;
    }

    // can be substituted with 'const nameFunc = (text) => text.length >= 6 && text.length <= 10;' -- anonymous function
    function correctLength(text) {
        if (text.length >= 6 && text.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    // can be substituted with 'const nameFunc = (text) => /^[A-Za-z0-9]+$/.test(text); -- anonymous function
    function correctSymbols(text) {
        return /^[A-Za-z0-9]*$/.test(text);
    }
}


passwordValidator(
    'logIn'
)

passwordValidator(
    'MyPass123'
)

passwordValidator(
    'Pa$s$s'
)