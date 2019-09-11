// import { anotherHello } from './anotherHello.js';
const msg = require('./say-hello.js');

const $ = require('jquery');

console.log($);


msg();
// anotherHello();
let sayHello = () => { 
  console.log("hello")
};

sayHello();