/*
Implement a function that takes an array and some other arguments, then
removes the other arugments from that array

[1,2,3,4] -> remove 3,2 

Create a a new array ans
Go through the original list
    Go through the arguments list 
        if the value at the original list is not in the argument list
            Add that value into the answer list
return answer

*/
const removeFromArray = function(array, ...args) {
    const ans = []
    for(let i =0; i < array.length; i++)
    {
        let inList = false;

        for(let j = 0; j < args.length; j++)
        {
            if(array[i] === args[j])
            {
                inList = true;
               
            }
        }
        if(!inList)
        {
            ans.push(array[i]);
        }

    }
    return ans;

};

// Do not edit below this line
module.exports = removeFromArray;
