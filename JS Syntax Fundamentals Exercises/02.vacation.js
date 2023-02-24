function vacation(number, groupType, day) {
    let totalSum;

    switch (groupType) {
        case 'Students':
            if (day === 'Friday') {
                totalSum = number * 8.45;
            } else if (day === 'Saturday') {
                totalSum = number * 9.80;
            } else {
                totalSum = number * 10.46;
            }

            if (number >= 30) {
                totalSum -= totalSum * 0.15;
            }
            break;
        case 'Business':
            if (number >= 100) {
                number -= 10;
            }

            if (day === 'Friday') {
                totalSum = number * 10.90;
            } else if (day === 'Saturday') {
                totalSum = number * 15.60;
            } else {
                totalSum = number * 16;
            }

            break;
        case 'Regular':
            if (day === 'Friday') {
                totalSum = number * 15;
            } else if (day === 'Saturday') {
                totalSum = number * 20;
            } else {
                totalSum = number * 22.50;
            }

            if (10 <= number && number <= 20) {
                totalSum -= totalSum * 0.05;
            }
            break;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`)
}


vacation(
    30,
    "Students",
    "Sunday"
    );

vacation(
    110,
"Business",
"Saturday"
);