


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


let book = {
    title:'My book',
    price: 10.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log(combinedvalue);
    }
}

let book2 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log("The output is " + combinedvalue);
    }
}

let book3 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}

let book4 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}
book2.totalValue();
book.totalValue();

let book1total = book3.totalValue();
let book1tota2 = book4.totalValue();
console.log(book1total+ book1tota2);

