"use strict"

let products = [
    {
        item: "Water Bottle",
        description: "Number 1 bottle in world wide",
        Price: 12  
    },
    {
        item: "Black Shirt",
        description: "100% polyester",
        Price: 8
    },
    {
        item: "Grey Shirt",
        description: "Rated 5 stars around the world",
        Price: 9  
    },
    {
        item: "Puma Pants",
        description: "very flexable",
        Price: 5  
    },
    {
        item: "Blue striped pants",
        description: "very breathable",
        Price: 5  
    },
    {
        item: "Dufflebag",
        description: "Has a lot of space for anything you need",
        Price: 13  
    }
];

function DisplayProduct(_product) {
    console.log(`The discription for ${_product.item} is ${_product.description}.`)
};
DisplayProduct(products[2]);

// //Parameter = Question
// Argument = Answer

// So when I make a function, it has questions on what it needs,
// and when I call it, I pass in the arguments, which are the answers to the questions


