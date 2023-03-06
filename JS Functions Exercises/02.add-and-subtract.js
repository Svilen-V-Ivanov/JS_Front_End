function addSubtract(first, second, third) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    console.log(subtract(sum(first, second), third));
}

addSubtract(
    23,
    6,
    10
)

addSubtract(
    1,
    17,
    30
)

addSubtract(
    42,
    58,
    100
)