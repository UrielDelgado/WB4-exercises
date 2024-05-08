"use strict"
// function createPayStub(id, name, payRate, hoursWorked) {
//     let grossPay = 0;
//     if (hoursWorked <= 40) {
//     grossPay = payRate * hoursWorked;
//     }
//     else {
//     grossPay = (40 * payRate) +
//     ((hoursWorked - 40) * 1.5 * payRate);
//     }
//     let payStub = {
//     employeeId: id, 
//     name: name, 
//     grossPay: grossPay
//     };
//     return payStub;
//    }
//    let emp1PayStub = 
//     createPayStub("1", "Ezra", 38.46, 49);
//    console.log(emp1PayStub.name + " earned $" + 
//     emp1PayStub.grossPay.toFixed(2));
//    let emp2PayStub = 
//     createPayStub("2", "Elisha", 43.27, 42);
//    console.log(emp2PayStub.name + " earned $" + 
//     emp2PayStub.grossPay.toFixed(2));

//     let kids = ["Natalie", "Brittany", "Zachary"];
// let numKids = kids.length;
// for(let i = 0; i < numKids; i++) {
//  console.log(kids[i]);
// }


// function getMealCost(orders) {
//     let sum = 0;
//     let numOrders = orders.length;
//     for(let i = 0; i < numOrders; i++) {
//     sum += orders[i].price;
//     }
//     return sum;
//    }
//    let myOrder = [ 
//     {item: "Chicken Tacos", price: 8.95},
//     {item: "Guacamole", price: 2.85},
//     {item: "Sweet Tea", price: 2.75}
//    ];
//    let yourOrder = [ 
//     {item: "Hamburger", price: 6.95},
//     {item: "Fries", price: 2.25},
//     {item: "Sweet Tea", price: 2.75},
//     {item: "Fried Apple Pie", price: 4.95}
//    ];
//    let mealCost = getMealCost(myOrder);
//    let totalWithTip = mealCost * 1.2;
//    console.log("My meal costs " + totalWithTip.toFixed(2)); 
//    mealCost = getMealCost(yourOrder);
//    totalWithTip = mealCost * 1.2;
//    console.log("Your meal costs " + totalWithTip.toFixed(2)); 
   
// //    let num = 1;
// // let i = 1;
// // while (i < 5) {
// //  num = num * 2;
// //  console.log(num);
// //  i++;
// // }
   
// let num = 1;
// let i = 1;
// do {
//  num = num * 2;
//  console.log(num);
//  i++;
// } while (i < 8)

for(let i = 10; i > 0; i--) {
    console.log('hello world', i);
}
console.log("Happy new year")