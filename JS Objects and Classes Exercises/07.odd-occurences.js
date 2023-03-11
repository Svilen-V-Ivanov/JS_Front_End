function oddOccur(string) {
    let words = string.toLowerCase().split(' ');
    let wordObj = {};

    for (const word of words) {
        if (word in wordObj) {
            wordObj[word] += 1;
        } else {
            wordObj[word] = 1;
        }
    };

    let wordCount = Object.entries(wordObj);
    let oddWord = [];
    for (const [key, value] of wordCount) {
        if (value % 2 != 0) {
            oddWord.push(key);
        }
    }

    console.log(oddWord.join(' '));
}

oddOccur(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)

console.log('-------------')

oddOccur(
    'Cake IS SWEET is Soft CAKE sweet Food'
)