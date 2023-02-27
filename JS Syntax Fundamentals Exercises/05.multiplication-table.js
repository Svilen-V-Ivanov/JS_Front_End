function multiplicationTable(number) {
    for (let count = 1; count <= 10; count++) {
        let result;
        result = number * count;
        console.log(`${number} X ${count} = ${result}`);
    }
}

multiplicationTable(2)