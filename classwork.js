"use strict"

// let favMovies =["spiderman", "transformers", "shrek 4"];
// console.log(favMovies);

// let favMovies2 =["spiderman", "transformers", "shrek 4"];
// function DisplayMovie(movie){
//     console.log(`My 4 favorite movies are ${movie[2]}, ${movie[1]}, ${movie[0]}`)
// }
// DisplayMovie(favMovies2)


// let favoriteMovies = [
//     "Memoirs of a Geisha",
//     "Training Day",
//     "Princess and the Frog",
//     "Spiderman",
//     "Deadpool",
//     "Avengers",
//     "Forrest Gump",
//     "The Help",
//     "Barefoot",
//     "The Conjuring",
//     "Cars",
//     "Grease",
//     "Wreck-It Ralph",
//     "Back to the Future",
//     "Spirited Away",
//     "The Shawshank Redemption",
//     "The Green Mile",
//     "Forrest Gump", // This duplicate will be removed
//     "Rollerball",
//     "Planet of the Apes",
//     "2001: A Space Odyssey",
//     "How To Train Your Dragon",
//     "Howl's Moving Castle",
//     "Ponyo",
//     "Catch Me If You Can",
//     "The Little Rascals",
//     "Scream",
//     "Shrek 2",
//     "Megamind",
//     "Shrek",
//     "The Interview",
//     "The Proposal",
//     "The Pursuit of Happyness",
//     "The Longest Yard",
//     "17 Again",
//     "Rush Hour",
//     "Athena",
//     "The Pianist",
//     "I feel Joker",
//     "The Godfather",
//     "The Mask",
//     "Pan's Labyrinth",
//     "Transformers",
//     "Shrek 4"
// ];
// favoriteMovies.forEach(favoriteMovies => {
//     console.log(`You should watch the movie ${favoriteMovies}`);
// });

let movieList = [
    { 
        title: "Spiderman", 
        reason: "One of my first hero moive that felt relatable", 
        url: "https://m.media-amazon.com/images/I/61-rozyeQQL._AC_UF894,1000_QL80_.jpg" 
    },
    { 
        title: "Transformers", 
        reason: "I just like watching big robots fight with Big Explosions",
        url: "https://m.media-amazon.com/images/I/51m2UmuaxuL._AC_UF894,1000_QL80_.jpg" 
    },
    { 
        title: "Shrek 4", 
     reason: "it was funny while hitting me in the feels", 
        url: "https://idposter.com/img/Movie/S/Shrek_Forever_After_(2010)/id425494.webp" 
    }
];

function displayRandomMovie() {
    let randomIndex = Math.floor(Math.random() * movieList.length);
    let randomMovie = movieList[randomIndex];
    console.log(`You should watch "${randomMovie.title}" ${randomMovie.reason}, and here's the link: ${randomMovie.url}`);
}

displayRandomMovie();

