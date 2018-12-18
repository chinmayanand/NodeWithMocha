var expect = require('chai').expect;

let convert = require('../app.js')
let assert = require('assert');

describe('Temperature Conversion', () => {
    after(function () {
        console.log('see.. this function is run ONCE only'+9 / 5 + 32);
    })
    describe('cToF', () => {

        it('should convert -40 celsius to -40 fahrenheit', () => {
            expect(convert.cToF(-40)).to.equal(-40);
            //expect(expected,actual)
            // assert.equal(-40, convert.cToF(-40));
        });
        it('should convert 0 celsius to 32 fahrenheit', () => {
            //assert.equal(actual,expected)
            assert.equal(32, convert.cToF(0));
        });
        it('should return undefined if no temperature is input', () => {
            assert.equal(undefined, convert.cToF(''));
        });
    });
    describe('fToC', () => {
        it('should convert -40 fahrenheit to -40 celsius', () => {
            assert.equal(-40, convert.fToC(-40));
        });
        it('should convert 32 fahrenheit to 0 celsius', () => {
            assert.equal(0, convert.fToC(32));
        });
        it('should return undefined if no temperature is input', () => {
            assert.equal(undefined, convert.fToC('a'));
        });
    });
});

// var request = require('request');

// describe('Status and content', function() {
//     describe ('Main page', function() {
//         it('status', function(done){
//             request('http://localhost:8080/', function(error, response, body) {
//                 expect(response.statusCode).to.equal(200);
//                 done();
//             });
//         });

//         it('content', function(done) {
//             request('http://localhost:8080/' , function(error, response, body) {
//                 expect(body).to.equal('Hello World');
//                 done();
//             });
//         });
//     });

//     describe ('About page', function() {
//         it('status', function(done){
//             request('http://localhost:8080/about', function(error, response, body) {
//                 expect(response.statusCode).to.equal(404);
//                 done();
//             });
//         });

//     });
// });