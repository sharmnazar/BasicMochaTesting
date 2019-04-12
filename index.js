module.exports = {
    sayHello: function(){
        return 'hello'
    },
    addNum: function(num1, num2){
        return num1 + num2
    },
    findSum: function(newArr){
            return newArr.reduce(function(a,b){
              return a + b
        }, 0);
    }
}
