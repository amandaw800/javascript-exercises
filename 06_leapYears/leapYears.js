const leapYears = function(years) {

    //if the year is divisible by four and not divisible by 100 then its a leap year
    if(years % 4 == 0 && years % 100 != 0)
    {
        return true;

    }
    //if it is divisble by 100, then if it is divisbile by 400, then it is a leap year
    else if(years % 100 == 0 && years % 400 == 0)
    {
        return true;
    }
    else {
        return false;
    }

    //otherwise its not a leap year

 

};

/**
 * > Leap years are years divisible by four (like 1984 and 2004). 
 * However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, 
 * which were in fact leap years). (Yes, it's all pretty confusing)
 */

// Do not edit below this line
module.exports = leapYears;
