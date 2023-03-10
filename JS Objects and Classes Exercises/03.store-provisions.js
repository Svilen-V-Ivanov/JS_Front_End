function storeProvisions(first, second) {
    let itemsArr = [...first, ...second];
    let products = {};

    for (let index = 0; index < itemsArr.length; index += 2) {
        let product = itemsArr[index];
        let ammount = Number(itemsArr[index + 1]);

        if (!(product in products)) {
            products[product] = ammount;
        } else {
            products[product] += ammount;
        }      
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }
    
}

storeProvisions(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
        ]
)