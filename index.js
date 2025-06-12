//Declares the taxRate
const taxRate = .10;

//Calculates 10% tax on the amount
function calculateTax(amount){
    taxValue = taxRate*amount;
    return taxValue;
}

//converts lowercase text to uppercase
function convertToUpperCase(text){
    return text.toUpperCase();
}

//Finds the larger of the 2 and returns the larger one
function findMaximum(num1, num2){
    if(num1 > num2){
        return(num1);
    } else {
        return(num2);
    }
}

function isPalindrome(string){
    const reveresed = string.split("").reverse().join("");
    return (string === reveresed)
}

console.log(isPalindrome("test")); //false
console.log(isPalindrome("racecar")); //true

//Declares discount % and origianl price 
const discountPercentage = 20
const originalPrice = 100

//calculates the discount price 
function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountPrice = originalPrice - discountAmount;
    return discountPrice;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };