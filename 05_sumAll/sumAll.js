/*
Takes two positive integers and returns the sum of every integer between
and including them

Create a sum variable
Create a loop where it goes from the first number to the last number
    Add the current value to sum
return sum

*/
const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0)
    {
        return 'ERROR';
    }

    if(!Number.isInteger(num1) || !Number.isInteger(num2))
    {
        return 'ERROR';
    }

    if(!typeof(num1) === 'number' || !typeof(num2) === 'number')
    {
        return 'ERROR';
    }

    let sum = 0

    if(num1 > num2) // 5 > 3
    {

        temp = 0;
        temp = num1;
        num1 = num2;
        num2 = temp;
        
    }

    for(let i = num1; i < num2+1; i++)
    {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
