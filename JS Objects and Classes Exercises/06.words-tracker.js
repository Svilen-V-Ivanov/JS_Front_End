function wordsTracker(arrOne) {
    let wordsObj = {};
    let filters = arrOne.shift().split(' ');

    for (const filter of filters) {
        wordsObj[filter] = 0;
    }

    for (const word in wordsObj) {
        // alternative: let count = arrOne.filter((i) => (i === word)).length;
        let count = 0;
        arrOne.forEach(element => {
            element === word && count++
        });
        wordsObj[word] = count;
    }

    let sortedWords = Object.entries(wordsObj).sort(
        ((a, b) => { return b[1] - a[1] })
    );

    for (const iterator of sortedWords) {
        console.log(`${iterator[0]} - ${iterator[1]}`);
    }
}

wordsTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)

console.log('---------------');

wordsTracker(
    [
        'is the',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)