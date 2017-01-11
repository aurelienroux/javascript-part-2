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

var numb = [12, 23, 34, 45];

console.log(numb.map(function(x){
    return x * x;
}))





