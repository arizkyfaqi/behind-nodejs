// console.log(arguments[1]);
// console.log(require("module").wrapper);

//module exports
const C = require("./test-module-1");
const calcl1 = new C();

console.log(calcl1.add(5, 2));

//exports
const { add, multiply, divided } = require("./test-module-2");
console.log(multiply(5, 2));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
