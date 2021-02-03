/* Write a function called same, which accepts two arrays. The function should return
true if every value in the array has it's corresponding value square in the 
second array. The frequency of values must be the same. */
// This has a time complexity of N^2 because the index of loops through the array
// basically has a loop nested inside of a loop
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //indexOf will return -1 if the array does not have the value
        if(correctIndex === -1 ){
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

//Billy's frist attempt to refactor without N^2
//this has complexity of N because the for loops are seperate
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let answer = {}
    for (let i=0; i<arr1.length; i++){
        let num = arr1[i] ** 2
        if(answer[num]){
            answer[num]++
        } else {
            answer[num] = 1
        }
    }
    for (let j=0; j<arr2.length; j++){
        let square = arr2[j]
        if(answer[square]>0){
            answer[square]--
        } else{
            return false
        }
    }
    return true
}

//refactoring the above to be cleaner
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let answer = {}
    for (let i of arr1){
        let num = arr1[i] ** 2
        answer[num] = (answer[num] || 0) + 1
    }
    for (let j of arr2){
        let square = arr2[j]
        return answer[square] > 0 ? answer[square]-- : false 
    }
    return true
}

console.log(same2([1,2,3,2,7], [4,1,9,4,49]))
