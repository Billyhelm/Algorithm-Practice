/*
Write a function called maxSubArraySum which accepts an array of intergers and
a number called n. The function should calculate the maximum sum of n consecutive
elements in the array. 
*/

//This uses the sliding window with time complexity O(N)

function maxSubArraySum(arr, num){
    let maxSum = 0
    let tempSum = 0
    if(arr.length < num) return null
    for (let i=0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3))