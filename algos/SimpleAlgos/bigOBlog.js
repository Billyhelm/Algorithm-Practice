
// Write a solution that returns true if the 
// first value of the array is 5
function fiveArray(arr){
    if(arr[0] === 5) return true
    else return false
}

// console.log(fiveArray([1,4,3]))


//Add all the even values of an array
function evenSum(arr){
    let sum = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i]%2 === 0){
            sum += arr[i]
        }
    }
    return sum
}

console.log(evenSum([1,4,3,6]))