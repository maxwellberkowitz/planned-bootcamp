// This is how you declare a variable
let word_a: string
let word_b: string
let a_sorted: string
let b_sorted: string
let anagram: boolean
let length_a: number
let length_b: number
let length_a_sorted: number
let length_b_sorted: number


word_a = "listen"
word_b = "silent"

length_a = word_a.length
length_b = word_b.length

if (length_a != length_b)
{
  console.log("Words are not anagrams because not the same length")
}

console.log(word_a.split(""))

// Function to sort the letters in a word
const sortLettersInWord = (word: string) => {

  // Split function
  // word.split("")

  //Sort function
  // array.sort()
var sorted = word.split('').sort().join('')

return sorted
}

a_sorted = sortLettersInWord(word_a)
b_sorted = sortLettersInWord(word_b)

console.log("Word A sorted is: " + a_sorted)
console.log("Word B sorted is: " + b_sorted)

if (a_sorted === b_sorted){
  console.log("The words are anagrams")
}
else {
  console.log("The words are not anagrams")
}


// Creating a function to check primality

const isPrime = (num: number): boolean => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0) {
      return false;
    }
    i += 6;
  }

  return true;
};

const checkPrimeNumbers = (num: number): void =>{
  let count = 0
  let n = 2
  while (count<=num){
    if(isPrime(n)){
      console.log(n)
      count++
    }
    n++
  }
}

// 








