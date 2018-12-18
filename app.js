// //Load express module with `require` directive
// var express = require('express')
// var app = express()

// //Define request response in root URL (/)
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// //Launch listening server on port 8080
// app.listen(8000, function () {
//   console.log('App listening on port 8000!')
// })


let convert = {};

convert.cToF = function(celsius) {
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}

convert.fToC = function(fahrenheit) {
  if(!Number.isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

module.exports = convert;