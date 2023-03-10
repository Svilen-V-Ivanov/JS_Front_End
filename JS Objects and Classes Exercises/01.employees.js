function employees(employeeList) {
    let workers = {};

    for (const person of employeeList) {
        workers[person] = person.length;
    }

    for (const key in workers) {
        console.log(`Name: ${key} -- Personal Number: ${workers[key]}`);
    }
}

employees(
    [
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]
)