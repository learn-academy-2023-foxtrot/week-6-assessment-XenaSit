// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sayItLikeYouMeanIt", () => {

  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(sayItLikeYouMeanIt(hitchhikersCharacters[0])).toEqual("Ford Prefect is a hitchhiker.")
    expect(sayItLikeYouMeanIt(hitchhikersCharacters[1])).toEqual("Zaphod Beeblebrox is president of the galaxy.")
    expect(sayItLikeYouMeanIt(hitchhikersCharacters[2])).toEqual("Arthur Dent is a radio employee.")
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
// b) Create the function that makes the test pass.
// Pseudo code:
// INPUT: an array of objects
// FUNCTION: sayItLikeYouMeanIt with a parameter objectOfGivenArray
// OUTPUT: array with a sentence about each person with their name capitalized.
// PROCESS:
// 1) create a function and pass a parameter
// 2) take a value that we want to work on, in this case: NAME, and split it
// 3) map through split value (becuase JS doesn't want to just capitalize the letter, oh no, we gotta loop)
// 4) get first letter capitalized = using map method we pass a parameter "word" and change a character at index [0] to UpperCase
// 5) the rest of the word we get by slicing the 1st letter off of that word and joing all the letters together
// 6) action 4 is + to action 5 and VUALA!!! 
// 7) return the string interpelation with new values inside it! Bada Bing, Bada Boom! 

function sayItLikeYouMeanIt(objectOfGivenArray) {

  const capitalizeFirstLetter = objectOfGivenArray.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  // const capitalizeFirstLetter = objectOfGivenArray.name.replace(/\b\w/g, char => char.toUpperCase()) // do not like regex
  return `${capitalizeFirstLetter} is ${objectOfGivenArray.occupation}.`
}
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("byThree", () => {
  
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  

  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(byThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(byThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// b) Create the function that makes the test pass.

// Pseudo code:

// INPUT: array of wrods, numbers, and boolean values
// FUNCTION: byThree with a passed in parameter array
// OUTPUT: array of only the REMAINDERS of the numbers when divided by 3.
// PROCESS:
// 1) create a function and pass in a parameter
// 2) filter through the parameter by using typeof method to destinguish numbers
// 3) once the numbers are identified map through that and using modulo operator return remainder! Bada Bing, Bada Boom! 
function byThree (array) {
  return array.filter(value => typeof value === 'number').map(number => number % 3)
}
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeItUp", () => {
  
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125

  it("returns the sum of all the numbers cubed", () => {
    expect(cubeItUp(cubeAndSum1)).toEqual(99)
    expect(cubeItUp(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:

// INPUT: array of 3 numbers
// FUNCTION: cubeItUp with a parameter array
// OUTPUT: the sum of all the numbers cubed.
// PROCESS: 
// 1) create a function and pass in a parameter
// 2) create 1st variable that takes in array , maps through it and return an array with each number cubed
// 3) create 2nd variable to sum the numbers up itirating through array and reducing as each element is added up
// 4) return the sum! bada boooooOm!

function cubeItUp (array) {
  // return (array[0]*array[0]*array[0]) + (array[1]*array[1]*array[1]) + (array[2]*array[2]*array[2]) 
  // can i say that i am an evil geniouse MUAHAHAHAH!!!!!!
   let cubeY = array.map(number => Math.pow(number, 3))
   let sum = cubeY.reduce((value, element) => value + element, 0)
   return sum
}