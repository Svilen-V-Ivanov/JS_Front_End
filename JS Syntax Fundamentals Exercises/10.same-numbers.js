function check(number) {
    let numArr = number.toString().split('');
    let firstEl = numArr.shift();

    let isTrue = true;
    let sum = Number(firstEl);

    for (const num in numArr) {
        if (numArr[num] === firstEl) {
            sum += Number(numArr[num]);
        } else {
            isTrue = false
            sum += Number(numArr[num])
        }
    }

    console.log(isTrue);
    console.log(sum);
}

// check(2222222)

check(1234)