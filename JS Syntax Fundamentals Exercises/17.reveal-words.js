function wordReveal(keyWords, string) {
    let keys = keyWords.split(', ');
    let wordArr = string.split(' ');

    for (const key of keys) {
        let filter = '*'.repeat(key.length);
        
        for (const word in wordArr) {
            if (wordArr[word] === filter) {
                wordArr[word] = key;
            }
        }
     
    }
    console.log(wordArr.join(' '));
}

wordReveal(
    'great',
    'softuni is ***** place for learning new programming languages'
)

wordReveal(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)