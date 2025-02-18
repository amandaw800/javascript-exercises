const sumAll = function(num, num2) {

    var ans = 0;
    if(num < 0 || num2 < 0)
    {
        return "ERROR";
    }

    if(Number.isInteger(num) == false || Number.isInteger(num2) == false)
    {
        return "ERROR";

    }

    if(num < num2)
    {

        for(var i = num; i <= num2; i++)
        {
            ans += i;
        }
    }
    else if(num2 < num)
        {
    
            for(var i = num2; i <= num; i++)
            {
                ans += i;
            }
        }
        else {
            return num;
        }
    return ans;

}


// Do not edit below this line
module.exports = sumAll;
