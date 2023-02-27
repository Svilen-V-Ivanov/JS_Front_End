function fruitCalc(fruit, weight, price) {
    let totalPrice;
    totalPrice = weight * price / 1000
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}

fruitCalc('orange', 2500, 1.80)

fruitCalc('apple', 1563, 2.35)