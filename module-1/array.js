var friendAge = [11, 21, 45, 10, 14, 105, 6];
var picnicFee = [5000, 2000, 4000, 150];
var naikas = ['mahi', 'opu', 'sabnoor', 'sabana']
var vowels = ['a', 'e', 'i', 'o', 'u']

// console.log(naikas [3])


// index change/replace/and modifiy position

//1. get element value by index
var numbers = [11, 21, 45, 10, 14, 105, 6];
var element = numbers[1];
// console.log(element);
//2.set element value by index
numbers[1] = 77;
// console.log(numbers)


//3. find index of an element
var positionIndex = numbers.indexOf(105);
// console.log(positionIndex);


// push and pop use for add an elemenet or remove as the last element array

// use push to add element to an array as the last element array 

// numaric push
var numbersForPush = [11, 21, 45, 10, 14, 105, 6];
numbersForPush.push(108);
// console.log(numbersForPush)

// string push
var friends = ['ashik', 'mahdi', 'abdullah']
friends.push('ebrahim');
friends.push('mahi');
console.log(friends)

// pop 
console.log(numbers);
numbers.pop();

// To get pop element
var elemenet = numbers.pop();
console.log(elemenet);