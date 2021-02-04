/*
Write a function called sameFrequency. Given two psitive integers, find out
if the two numbers have the same frequency of digits. Your solution MUST have O(N) complexity
*/

function sameFrequency(num1, num2){
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')
    if(num1.length != num2.length) return false
    let answer = {}
    for(let i of num1){
        answer[i] = (answer[i] || 0) + 1
    }
    for(let j of num2){
        if(!answer[j]) return false
        else answer[j]--
    }
    return true
}

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5879385))
console.log(sameFrequency(22,222))
console.log(sameFrequency(2222,222))

/* Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks wether there are any duplicates amon the arguments passed in. You can solve this using 
the frequency counter OR the multiple pointers pattern
needs to be O(N) bonus for O(N log N)
*/

function areThereDuplicates(arr){
    
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a','b','c','a'))
