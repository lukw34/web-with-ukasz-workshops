
Array.prototype.ownReduce = function(callbackFun, initialValue) {
    let reduceInitialValue;
    let startIndex;

    if(!initialValue) {
        reduceInitialValue = this[0];
        startIndex = 1;
    } else {
        reduceInitialValue = initialValue;
        startIndex = 0;
    }

    let result = reduceInitialValue;

    for(index = startIndex; index < this.length; index++) {
        result = callbackFun(result, this[index]);
    }

    return result;
};


const sumMethod = (prev, current) => prev + current;

const testArray = [1,4,5,6,7,8,9];

console.log('original-reduce', testArray.reduce(sumMethod));

console.log('own-reduce', testArray.ownReduce(sumMethod));

console.log('original-reduce-10', testArray.reduce(sumMethod, 10));

console.log('own-reduce-10', testArray.ownReduce(sumMethod, 10));