// Problem 1: Let’s play a mind game
/** 
*Here mindGame function has been defined that takes in an input number as its argument. If the input number is less than or equal to 0, the function returns the message "Please provide a positive number." If the input number is greater than 0, the function calculates (inputNumber * 3 + 10) / 2 - 5 and returns that value.
*
**/

// function mindGame(inputNumber) {
   
//     if (inputNumber <= 0) {
//         return "Please provide a positive number.";
//       }
    
//    if(inputNumber > 0) {
//         const output = (inputNumber * 3 + 10) / 2 - 5;
//         return output ;
//     }

//   }

// console.log(mindGame(0))
/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */


// Problem 2: Finding even or odd
/* *
*
*This function takes in a parameter "strings" and checks if it is a string or not. If it is not a string, it returns an error message. If it is a string, it checks its length and returns "even" if it is even, and "odd" if it is odd.
 *
 * **/

// function evenOdd(strings) {

//     if (typeof strings !== 'string') {
//         return "Error: Provide a string";
//       }
//     let length = strings.length;
//     if (length % 2 === 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   }
 


/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */


// Problem 3: Is Less or Greater than seven

/* *
*
*This function takes in a parameter "inputNumber" and checks if it is a number or not. If it is not a number, it returns an error message. If it is a number, it checks if it is less than 7 and returns its difference with 7, or if it is greater than 7, it returns the result of inputNumber multiplied by 2.
*
* */
  // function isLGSeven(inputNumber) {

  //   if (typeof inputNumber !== 'number') {
  //       return "Error: Provide a number";
  //     }
    
  //   if (inputNumber - 7 < 7) {
  //       const lessThan = inputNumber - 7;
  //     return lessThan;
  //   } 
  //   else {
  //       const greaterThan = inputNumber * 2;
  //     return greaterThan;
  //   }
  // }




/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */



// Problem 4: Finding Bad data

/* *
*
*This function takes in an array as a parameter and loops through its elements. If an element is a negative number, the count increments. The function returns the count of negative numbers in the array or a message asking for valid data if the array is empty or doesn't contain negative numbers.
*
 **/

function findingBadData(array) {


    let count = 0;

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (typeof element === 'array' && element < 0) {
          count = count +1
      }
    }
    return count || 'provide valid data' ;
}




/* ---------------------------------------------------------- */
/* ---------------------------------------------------------- */

// Problem 5: Convert your gems into diamond

/* *
*
*This function takes in three parameters, representing the number of gems collected by three friends. It calculates the total number of diamonds obtained by multiplying each friend's gems with a different number and adding the results. If the total number of diamonds is greater than 2000, it subtracts 2000 from the total. The function returns the final number of diamonds obtained or a message asking for valid data if the input is not a number. In the code snippet, the values of gems collected by each friend are assigned to separate variables and can be used as inputs for the function.
*
 * */

// function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    
//     let totalDiamonds = (firstFriendGems * 21) + (secondFriendGems * 32) + (thirdFriendGems * 43); 
//     if (typeof totalDiamonds === 'number' && totalDiamonds > 2000) {
//         totalDiamonds = totalDiamonds - 2000;
//     }

//     return totalDiamonds || 'provide valid data';
// }


// console.log(gemsToDiamond())