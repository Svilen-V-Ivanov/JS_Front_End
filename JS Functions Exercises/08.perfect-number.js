function perfectNumber(num) {
    let numArr = [];
    cycle(num);
    const numSum = numArr.reduce((sum, a) => sum + a, 0);

    if (numSum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }

    function cycle(value) {
        for (let index = 1; index <= Math.ceil(value / 2); index++) {
            if (value % index === 0) {
                numArr.push(index);
            }
        }
    }
}

perfectNumber(
    6
)

perfectNumber(
    28
)

perfectNumber(
    56
)