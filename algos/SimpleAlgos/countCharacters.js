//Write a function which takes in a string and returns counts of each character in the string


charCount("aaaa") // {a:4}
charCount('hello') // {h:1, e:1, l:2, o:1}
charCount('your PIN number is 1234!') 

function charCount(str) {
    //returns an object with keys that are lowercames alphanumeric characters in the string
    //make the object to return at the end
    var result = {};

//     //loop over string, for each character...
//     for(var i = 0; i < str.length; i++){
//         var char = str[i].toLowerCase()

//         //if char is something else, don't do anything
//         if(/[a-z0-9]/.test(char)){
//             //if the char is a number/letter and is a key in object, add one to count
//             if(result[char] > 0){
//                 result[char]++
//             }
//             //if the char is a number/letter and not in the object, add it and set value to 1
//             else{
//                 result[char] = 1 
//             }
//         }
//     }


//     //return object at the end
//     console.log(result)
//     return result
// }

for(let char of str){
    char = char.toLowerCase()
    if(/[a-z0-9]/.test(char)){
        //using boolean to check char.charCodeAt() is 55% faster than regex
        result[char] = ++result[char] || 1
    }
}
console.log(result)
return result
}
