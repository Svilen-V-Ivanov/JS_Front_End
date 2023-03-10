function movies(commands) {
    let movies = [];

    for (const order of commands) {
        if (order.includes('addMovie')) {
            movieAdd(order);
        } else if (order.includes('directedBy')) {
            directedBy(order);
        } else {
            onDate(order);
        }
    }

    for (let index = 0; index < movies.length; index++) {
        let currentMovie = movies[index];
        if (currentMovie.name && currentMovie.director && currentMovie.date) {
            console.log(JSON.stringify(currentMovie));
        }
    }

    function movieAdd(line) {
        let movieArr = line.split('addMovie');
        let movie = movieArr[1].trim();
        // is check for existing movie needed? Yes but not sure for judge.
        let movieObj = {
            name: undefined,
            director: undefined,
            date: undefined,
    
        };
        movieObj.name = movie
        movies.push(movieObj);
    }

    function directedBy(line) {
        let movieArr = line.split('directedBy');
        let movie = movieArr[0].trim();
        let director = movieArr[1].trim();

        for (let index = 0; index < movies.length; index++) {
            if (movies[index].name === movie) {
                movies[index].director = director;
            }
        }

    }

    function onDate(line) {
        let movieArr = line.split('onDate');
        let movie = movieArr[0].trim();
        let date = movieArr[1].trim();

        for (let index = 0; index < movies.length; index++) {
            if (movies[index].name === movie) {
                movies[index].date = date;
            }
        }
    }
}

movies(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)

console.log('---------------------')
movies(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
)