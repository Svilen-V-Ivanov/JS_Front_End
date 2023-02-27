function roadRadar(speed, area) {
    switch (area) {
        case 'motorway':
            console.log(drivingCalc(speed, 130))
            break;
        case 'interstate':
            console.log(drivingCalc(speed, 90))
            break;
        case 'city':
            console.log(drivingCalc(speed, 50))
            break;
        case 'residential':
            console.log(drivingCalc(speed, 20))
            break;
    }

    function drivingCalc(speed, velocity) {
        if (speed <= velocity) {
            return `Driving ${speed} km/h in a ${velocity} zone`;
        } else if (velocity < speed && speed <= velocity + 20) {
            return `The speed is ${speed - velocity} km/h faster than the allowed speed of ${velocity} - speeding`;
        } else if (velocity + 20 < speed && speed <= velocity + 40) {
            return `The speed is ${speed - velocity} km/h faster than the allowed speed of ${velocity} - excessive speeding`;
        } else {
            return `The speed is ${speed - velocity} km/h faster than the allowed speed of ${velocity} - reckless driving`;
        }
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')