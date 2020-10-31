"use strict";
var message = "Hello World";
console.log(message);
// tuples - arrays of fixed length
var a = [1, 1];
var pixel = {
    x: 1,
    y: 2,
};
var p = {
    x: 1, y: 1,
};
var z = {
    x: 1,
    y: 1
};
var e1; // just bypass the type checks
var e2; // much safe than any, can assign to any variable type but still can gave boundary checks like data type etc
e1 = true;
e1 = "Hello World";
e1.to.write.any.method.chain(); // any, just works!
e2 = true;
e2 = "Hello World";
// e2.to; // this will throw error as e2 is not of type object
if (typeof e2 === "boolean") { // for unknown we have to add typechecks before we can use them
    var bool = e2;
}
// Type Assertions
var hello = function () {
    return "Hello";
};
hello().trim(); // as <T> is used to assert the type of any or unknown
hello().trim(); // <T>signature is also a valid syntax
