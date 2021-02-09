/* Write a function called power which accepts a base and an exponent. The function 
should return the power of the base to the exponent. This function should mimic the
functionality of Math.pow() - do not worry about negative bases and exponents
*/

function power(num, exp){
    if (exp === 0) return 1
    return num * power(num, exp-1)
}

// console.log(power(2,0)) 
// console.log(power(2,2))
// console.log(power(2,4))

/* Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it; factorial 0! is always 1
*/

function factorial(num){
    if (num === 0) return 1
    return num * factorial(num-1)
}

// console.log(factorial(1))
// console.log(factorial(0))
// console.log(factorial(2))
// console.log(factorial(4))
// console.log(factorial(7))

/* Write a function called productOfArray which takes in an array of nubmers and returns the product of them all
*/

function productOfArray(arr){
    if (arr.length === 0) return 1
    return arr.pop() * productOfArray(arr)
}

// console.log(productOfArray([1,2,3]))
// console.log(productOfArray([1,2,3,10]))

/* Write a function called recursiveRange which accepts a number and add up all the numbers
from 0 to the number passed to the funciton */

function recursiveRange(num){
    if(num === 0) return 0
    return num + recursiveRange(num-1)
}

// console.log(recursiveRange(6))
// console.log(recursiveRange(10))

/* Write a recursive function called fib which accepts a number and returns the nth number in the 
Fibonacci sequence. */

function fib(num, start = 0, second = 1){
    if (num === 1) return second
    return fib(num-1, second, start+second)
}

function fib2(num){
    if (num<=2) return 1
    return fib(num-1) + fib(num-2)
}

// console.log(fib2(4))
// console.log(fib2(10))
// console.log(fib2(28))
// console.log(fib2(35))

/* Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/

function reverse(str){
    if(str.length === 1) return str
    str = str.split('')
    let letter = str.pop()
    str = str.join('')
    return letter + reverse(str)
}

// console.log(reverse('awesome'))
// console.log(reverse('rithmschool'))

/* Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
*/

function isPalindrome(str){
    if (str.length <= 1) return true 
    if (str[0] !== str[str.length-1]) return false
    str = str.slice(1,str.length-1)
    return isPalindrome(str)
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))


