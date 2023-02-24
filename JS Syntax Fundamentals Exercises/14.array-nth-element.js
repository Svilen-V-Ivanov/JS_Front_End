function arrayTransform(array, step) {
    let newArray = [];

    for (let index = 0; index < array.length; index += step) {
        newArray.push(array[index])
    }

    // console.log(newArray)
    return newArray;
}


arrayTransform(['5', 
'20', 
'31', 
'4', 
'20'], 
2);
arrayTransform(['dsa',
'asd', 
'test', 
'tset'], 
2
);
arrayTransform(['1', 
'2',
'3', 
'4', 
'5'], 
6);