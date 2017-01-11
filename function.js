// //Read about the Array.prototype.sort method. 
// Create a function that can be used with sort. 
// This function should take two strings, and return 
// a value that sort can use to determine which is the 
// longest string. Finally, create an array of strings and 
// try to get it sorted using your new function.


function sorting(a, b){
    return b.length - a.length
};

var arr = ["Aurelien", "Montreal", "Canada", "js", "html"];

console.log(arr.sort(function(a, b){
    return b.length - a.length;
}));

