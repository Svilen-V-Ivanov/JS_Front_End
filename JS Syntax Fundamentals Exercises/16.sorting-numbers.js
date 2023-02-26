function sortingNumbers(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b);
    let step = 0;
    let result = [];
    while (sorted.length > 0) {
        if (step % 2 == 0) {
            let firstElement = sorted.shift();
            result.push(firstElement)
        } else {
            let lastElement = sorted.pop();
            result.push(lastElement);
        }
        step++;
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))