function piccolo(commands) {
    let parkingLot = {};

    for (const command of commands) {
        let [value, key] = command.split(', ');

        if (!(key in parkingLot) && value === 'IN') {
            parkingLot[key] = value;
        }

        if (key in parkingLot && value === 'OUT') {
            delete parkingLot[key];
        }
    }

    if (Object.keys(parkingLot).length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sorted = Object.entries(parkingLot).sort((a, b) => a[0].localeCompare(b[0]));

        for (const vehicle of sorted) {
            console.log(vehicle[0]);
        }
    }
}

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
)

console.log('--------------')

piccolo(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)