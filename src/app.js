const _ = require('lodash');

let arr = [1,3,6,7,8,9,12];
let temp = _.chunk(arr, 2);

console.log(temp);