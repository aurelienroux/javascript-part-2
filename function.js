// //Read about the Array.prototype.sort method. 
// Create a function that can be used with sort. 
// This function should take two strings, and return 
// a value that sort can use to determine which is the 
// longest string. Finally, create an array of strings and 
// try to get it sorted using your new function.

// var arr = ["Aurelien", "Montreal", "Canada", "js", "html"];

// console.log(arr.sort(function(a, b){
//     return b.length - a.length;
// }));



// Create an array of objects (don’t need to use new here, 
// just regular object literals). These objects will contain 
// a name and email property. Then, run some code that will 
// sort your array by the longest name. Then, run some code 
// that will sort your array by e-mail address in 
// alphabetical order.

// var arrObj = [
//     {name: "aurelien", email: "aure@me.com"},
//     {name: "david", email: "david@me.com"},
//     {name: "adrien", email:"adrien@me.com"},
//     {name: "nathan", email: "nathan@me.com"}
// ]

// console.log(arrObj.sort(function(a, b){
//     return a.name.length < b.name.length;
// }))

// console.log(arrObj.sort(function(a, b){
//     return b.email < a.email;
// }))


// Create a function that can be used with Array.prototype.map. 
// This function should take a number and return its square. 
// Then, use this function with map on an array of numbers to 
// check the result.

// var numb = [12, 23, 34, 45];

// console.log(numb.map(function(x){
//     return x * x;
// }))



// Create a function that can be used with Array.prototype.map. 
// This function should be able to take an object and square its 
// “num” property. Then, use this function with map on an array 
// of objects each containming a “num” property.

// var myObj = [
//     {name:"aurelien", num:"1"},
//     {name:"david", num:"2"},
//     {name:"nathan", num:"3"},
//     {name:"adrien", num:"4"}
// ]

// console.log(
// myObj.map(function(obj){
//     var newObj = {};
//     newObj.name = obj.name;
//     newObj.num = obj.num * obj.num;
//     return newObj;
// }));

// In a previous workshop, you had to create a function 
// that took two numbers and an operation (add, sub, mult, …) 
// and returned the result of the operation on the two numbers. 
// Here we are going to do the same but at a higher order. 
// Create a function called operationMaker that takes only 
// a string called operation as argument. This string 
// could be “add”, “subtract”, “mult” or “div”.

function operationMaker(operation){
    if(operation === "add"){
        return function(a, b){
            return a + b;
        }
    }
    else if(operation === "subtract"){
        return function(a, b){
            return a - b;
        }
    }
    else if(operation === "mult"){
        return function(a, b){
            return a * b;
        }
    }
    else if(operation === "div"){
        return function(a, b){
            return a / b;
        }
    }
}

var adder = operationMaker("add");
var sum = adder(5,6);
console.log(sum);

var subtracter = operationMaker("subtract");
var minus = subtracter(15,6);
console.log(minus);

var multi = operationMaker("mult");
var mtl = multi(5,6);
console.log(mtl);

var divider = operationMaker("div");
var div = divider(5,6);
console.log(div);