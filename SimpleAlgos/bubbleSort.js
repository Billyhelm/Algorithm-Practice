/* Bubble Sort
the largest numbers will bubble towards the top
also can be called sync sort
*/

[29,10,14,30,37,14,18]

function swap(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}