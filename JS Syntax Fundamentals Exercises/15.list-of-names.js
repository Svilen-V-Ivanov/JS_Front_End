function listSorter(namesList) {
    return [...namesList].sort((aName, bName) => aName.localeCompare(bName)) // sorts the list
    .map((name, index) => `${index + 1}.${name}`) //goes through every element of the array and adds numbering
    .join('\n'); //joins array and prints on new line
}

console.log(
    listSorter(
        ["John", "Bob", "Christina", "Ema"]
    )
)