// //Read about the Array.prototype.sort method. 
// Create a function that can be used with sort. 
// This function should take two strings, and return 
// a value that sort can use to determine which is the 
// longest string. Finally, create an array of strings and 
// try to get it sorted using your new function.

var arr = ["Aurelien", "Montreal", "Canada", "js", "html"];

console.log(arr.sort(function(a, b){
    return b.length - a.length;
}));

// Create an array of objects (don’t need to use new here, 
// just regular object literals). These objects will contain 
// a name and email property. Then, run some code that will 
// sort your array by the longest name. Then, run some code 
// that will sort your array by e-mail address in 
// alphabetical order.










