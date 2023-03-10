function towns(townArr) {
    for (const city of townArr) {
        let [town, latitude, longitude] = city.split(' | ');
        let settlement = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        
        console.log(settlement)
    }   
}

towns(
    ['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']
)