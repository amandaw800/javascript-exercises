const removeFromArray = function(arr, ...remove) {
    const ans = []

    for(var i  = 0; i < arr.length; i++)
    {
        if(arr[i] != remove)
        {
            ans.push(arr[i]);
        }
    }
    console.log(ans);
    return ans;
};









removeFromArray([1,2,3,4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
