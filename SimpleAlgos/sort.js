/* the default sort method works well turning arrays of string into alphabetical order
does not work putting numbers in order

However you can give the .sort() an optional comparator funciton
this allows javascript to sort the way you want
*/

function numberCompare(num1, num2){
    return num1-num2
}

console.log([6,4,15,10].sort(numberCompare))

function compareByLen(str1, str2){
    return str1.length - str2.length
}