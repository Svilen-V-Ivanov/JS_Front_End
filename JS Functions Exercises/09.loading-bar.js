function loadingBar(number) {
    let decimal = number / 10;

    function barCreator(num) {
        return '%'.repeat(num) + '.'.repeat(10 - num);
    }

    let bar = barCreator(decimal);

    if (decimal !== 10) {
        console.log(`${number}% [${bar}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`[${bar}]`);
    }
}

loadingBar(
    30
)

loadingBar(
    50
)

loadingBar(
    100
)