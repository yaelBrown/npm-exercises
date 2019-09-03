// import jQuery from '../node_modules/jquery/src/jquery.js';
import niceMsg from 'say-hello.js';

const $ = require(jQuery); // this does not work

niceMsg();
let sayHello = () => { 
  console.log("hello")
};

sayHello();

$(document).ready(() => {
  $(body).css("background", "red");
})
