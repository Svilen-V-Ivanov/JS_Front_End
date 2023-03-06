function smallestOfThree(one, two, three) {
    let numbers = [one, two, three];
    let minNum = Math.min(...numbers);
    console.log(minNum)
}

smallestOfThree(
    -600,
    -342,
    123
)