


let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        isbn: '978-0545227704',
        price: 100
    },
    {
        title: 'The Go-Giver',
        pages: 123,
        author: 'Bob Burg',
        genre: ['self help','psychology'],  // No genre provided; initialize with empty array
        isbn: '',
        price: 200    // No ISBN provided; initialize with an empty string
    },
    {
        title: 'Atomic Habits',
        pages: 320,
        author: "James Clear",
        genre: ["Self Help", "Personal Development"],
        isbn: '',
        price: 300 
    }
];
console.log("Title of the first book: " + books[0].title);
console.log("The author of the third book: " + books[2].author);
console.log(`The genre of the book: "${books[2].title}" is ${books[2].genre[1]}`);
console.log(`"${books[2].title}" is a ${books[2].genre[0]} book, which cost $${books[2].price}`);

