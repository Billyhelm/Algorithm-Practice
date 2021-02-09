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

// console.log(sameFrequency(182,281))
// console.log(sameFrequency(34,14))
// console.log(sameFrequency(3589578,5879385))
// console.log(sameFrequency(22,222))
// console.log(sameFrequency(2222,222))

/* Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks wether there are any duplicates among the arguments passed in. You can solve this using 
the frequency counter OR the multiple pointers pattern
needs to be O(N) bonus for O(N log N)
*/

function areThereDuplicates(...args){
    let answer = {}
    for(let i of args){
        if(answer[i]) return true
        else answer[i] = 1
    }
    return false
}

//This is a one liner solution, Sets cannot have duplicates
function areThereDuplicates2(){
    return new Set(arguments).size !== arguments.length
}

// console.log(areThereDuplicates2(1,2,3))
// console.log(areThereDuplicates2(1,2,2))
// console.log(areThereDuplicates2('a','b','c','a'))


/* Write a function called averagePair. Given a sorted array of integers and a target average, determine
if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
Bonus Constraints O(N)
*/

function averagePair(arr, avg){
    let sum = avg * 2
    let left = 0
    let right = arr.length - 1
    while(right > left){
        let total = arr[left] + arr[right]
        if(total === sum) return true
        else if(arr[left]+arr[right] > sum){
            right--
        } else left++
    }
    return false
}

// console.log(averagePair([1,2,3],2.5))
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
// console.log(averagePair([-1,0,3,4,5,6],4.1))
// console.log(averagePair([],4))

/* Write a function called isSubsequence which take in two strings and checks whether the 
characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string
appear somehwere in the second string, whithout their order changing.
Time complexity O(N+M)
*/

function isSubsequence(word1, word2){
    let letter = 0
    for (let i of word2){
        if(i === word1[letter]){
            letter++
        }
        if (letter === word1.length) return true
    }
    return false
}

// console.log(isSubsequence('hello', 'hello world'))
// console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))

/* Given an aray of integers and a number, write a function called maxSubarraySum, which finds the maximum
sum of a subarray with the length of the number passed into the function.
Note that a subarray must consists of consecutive elements from the original array. In the first example
below [100,200,300] is a subarray of the original array, but [100,300] is not
*/

function maxSubarraySum(arr, n){
    if(n > arr.length) return null
    let sum = 0
    for (let i=0; i<n; i++){
        sum += arr[i]
    }
    let maxSum = sum

    for(let j=n; j<arr.length; j++){
        sum = sum + arr[j] - arr[j-n]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}

// console.log(maxSubarraySum([100,200,300,400], 2))
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
// console.log(maxSubarraySum([3,-2,7,-4,1,4,-2,1], 2))
// console.log(maxSubarraySum([2,3], 3))


/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers
and a positive integer. This function should return the minimal length of a contiguous subarray of
which the sum is greater than or equal to the integer passed to the function. If there
isnt one return 0 instead.
*/

function minSubArrayLen(arr, n){
    let long = Infinity
    let left = 0
    let right = 0
    let sum = arr[0]
    while (right < arr.length){
        if ((right-left) < long && sum >= n)  {
            long = right-left +1
        }
        if (sum <= n){
            right++
            sum = sum + arr[right]
        } else {
            sum = sum - arr[left]
            left++
        }
    }
    return long === Infinity ? 0 : long
}

// console.log(minSubArrayLen([2,3,1,2,4,3],7))
// console.log(minSubArrayLen([2,1,6,5,4],9))
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55))
// console.log(minSubArrayLen([4,3,3,8,1,2,3],11))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))


/* Write a function called findLongestSubstring, which accepts a string and returns the 
length of the longest substring with all distinct characters. 
*/

function findLongestSubstring(str){
    let letters = {}
    let max = 0
    let left = 0
    let right = 0

    while(right < str.length){
        let x = str[right]
        // console.log('l',left, 'r',right, 'm',max)
        if (letters[x]){
            left = Math.max(left, letters[x])
        }
        max = Math.max(max, right-left+1)
        letters[x] = right + 1
        right++
    }
    return max
}

console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('thecatinthehat'))
console.log(findLongestSubstring('bbbbbb'))
console.log(findLongestSubstring('longestsubstring'))
console.log(findLongestSubstring('thisishowwedoit'))


