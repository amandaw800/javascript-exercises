const removeFromArray = function(arr, ...remove) {
    
    return arr.filter(item => !remove.includes(item));

};









removeFromArray([1,2,3,4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
