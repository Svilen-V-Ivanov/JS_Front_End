function matrixCreate(number) {
    new Array(number).fill(new Array(number).fill(number)).forEach(row => console.log(row.join(' ')));
}

matrixCreate(
    4
)