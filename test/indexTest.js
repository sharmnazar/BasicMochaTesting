const assert = require('chai').assert;
const index = require('../index');

//Results
sayHelloResult = index.sayHello();
addNumberResult1 = index.addNum(2,5);
addNumberResult2 = index.addNum(2,-5);
findSumResult = index.findSum([1,2,3])

describe('index', function(){
    describe('sayHello()', function(){
        it('sayHello should return Hello', function(){
            assert.strictEqual(sayHelloResult, 'hello')
        })
        it('sayHello should return type string', function(){
            assert.typeOf(sayHelloResult, 'string')
        })
    })
    describe('addNum() positives', function(){
        it('addNum should return 7', function(){
            assert.strictEqual(addNumberResult1, 7)
        })
        it('addNum should return type number', function(){
            assert.typeOf(addNumberResult1, 'number')
        })
    })
    describe('addNum() negatives', function(){
        it('addNum should return -3', function(){
            assert.strictEqual(addNumberResult2, -3)
        })
        it('sayHello should return type number', function(){
            assert.typeOf(addNumberResult2, 'number')
        })
    })
    describe('findSum', function(){
        it('findSum should return a value greater than 3', function(){
            assert.isAbove(findSumResult, 3)
        })
        it('findSum should return 6', function(){
            assert.strictEqual(findSumResult, 6)
        })
        it('findSum should return type number', function(){
            assert.typeOf(findSumResult, 'number')
        })
    })
})