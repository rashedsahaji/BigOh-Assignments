/* ii) Write a program (without using inbuilt functions and not using Strings or array) to swap first and last digits of any number*/

function swapLastFirst(number) {

    let firstDigit = number;
    let zero_Counter =0;

    while(firstDigit >= 10)
    {
        firstDigit = firstDigit / 10;
        zero_Counter += 1;
    }
    firstDigit = firstDigit | 0;

    let lastDigit = number % 10;
    let middlePart = number %10**zero_Counter;


    let result = (((lastDigit * 10**zero_Counter)+middlePart)-lastDigit)+firstDigit;
    
    return result;
}


console.log(swapLastFirst(124789));