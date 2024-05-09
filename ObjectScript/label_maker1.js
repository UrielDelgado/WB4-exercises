"use strict"

//creating function with parameters that accept supplier Code, product number and size
function parsePartcode(code)
{
    let parts = code.split(":");
    let partCode1 = parts[0];
    let partCode2 = parts[1].split("-")[0];
    let partCode3 = parts[1].split("-")[1];
    
    const product = {
        supplierCode: partCode1, // Extracted "XYZ"
        productNumber: partCode2, // Extracted "1234"
        size: partCode3 // Extracted "L"
    };
    
//return the object so that we able to use the properties of the object outside of the function
    return product
};

//create
let shoes = "abs:92348-xl";

let displayProduct = parsePartcode(shoes);

console.log(`Supplier Code: ${displayProduct.supplierCode}, \nproduct number: ${displayProduct.productNumber}, \nsize: ${displayProduct.size}`)