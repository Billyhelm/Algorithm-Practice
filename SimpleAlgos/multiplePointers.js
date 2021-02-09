/* Write a funciton called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sums to zero or undefined
if a pair does not exist.
*/

//This is the naive solution with N^2
function sumZero(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i+ 1; j<arr.length; j++ ){
            if (arr[i]+arr[j] === 0 ){
                return [arr[i], arr[j]]
            }
        }
    }
}

//this is the refactored version with time complexity O(N) and space complexity O(1)
function sumZero2(arr){
    let left = 0
    let right = arr.length -1
    while (left < right){
        let sum = arr[left]+arr[right]
        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum < 0){
            left++
        } else right--
    }
}

// console.log(sumZero2([-3,-2,1,2,3]))
// console.log(sumZero2([-2,1,4,5]))
// console.log(sumZero2([-4,-3,-2,1,2,3,5,10]))

/*
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values int he array. There can be negative
number in the array, but it will always be sorted.
*/

//Billy's solution, more of a sliding window approach, has complexity O(N)
function countUniqueValues(arr){
    let count = arr.length > 0 ? 1 : 0
    let left = 0
    let right = 1
    while (right < arr.length){
        if (arr[left] !== arr[right]){
            count++
            left = right
        } 
        right++
    }    
    return count
}

//instructors solution
function countUniqueValues2(arr){
    let i = 0
    for(let j = 1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return arr.length == 0 ? 0 : i+1
}

console.log(countUniqueValues2([1,1,1,1,1,2]))
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues2([]))
console.log(countUniqueValues2([-2,-1,-1,0,1]))