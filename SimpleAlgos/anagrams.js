/* Write a function that returns true 
if both words are anagrams return false 
if they are not anagrams have the same 
letters but can be in a different order */
function validAnagram(word1, word2){
    if (word1.length !== word2.length) return false
    let letters = {}
    for (let i of word1){
        letters[i] = (letters[i] || 0) + 1
    }
    for (let j of word2){
        if (!letters[j]) return false
        else {
            letters[j] -= 1
        }
    }
    return true
}




console.log(validAnagram('aaz', 'aaz'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('awesome', 'awesome'))
