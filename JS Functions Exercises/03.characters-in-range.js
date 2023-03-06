function characterRange(first, second) {
    let range = getMinMax(first, second);
    let sequence = [];
    
    for (let index = range[0] + 1; index < range[1]; index++) {
        sequence.push(String.fromCharCode(index));       
    }

    console.log(sequence.join(' '));

    function getMinMax(one, two) {
        let numOne = one.charCodeAt(0);
        let numTwo = two.charCodeAt(0);
        let array = [numOne, numTwo];
        let minNum = Math.min(...array);
        let maxNum = Math.max(...array);

        return [minNum, maxNum];
    }
}

characterRange(
    'C',
    '#'
)