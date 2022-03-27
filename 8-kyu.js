//2022-03-16
function opposite(number) {
  return -number;
}

//2022-03-17
function solution(str){
  //turns str into an array (each array element is 1 character from str)
  let splitStr = str.split('');
  
  //reverses the array
  let reverseSplitStr = splitStr.reverse();

  //joins all elements into a string
  let joinReversedStr = reverseSplitStr.join('')

  return joinReversedStr;

  //TIP: methods can be stacked
  //  return str.split('').reverse().join('');
}

//2022-03-18
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//2022-03-19
function century(year) {
  for (i = 0; year/100 > i; i++) {};
  return i;
}

//2022-03-20
//This solution was too slow and gave an Execution Timed Out error
function oddCount(n) {
  let x = 0;
  for (let i = 0; i < n; i++) {
  if (i % 2 !== 0) {
    x++;
  }
}
return x;
}

// efficient solution below
// const oddCount = n => Math.floor(n/2) ;

//2022-03-25
let even_or_odd = number => number % 2 === 0 ? "Even" : "Odd"

// best practice below
// function even_or_odd(number) {
// return number % 2 ? "Odd" : "Even"
// }

//2022-03-25
function numberToString(num) {
  return String(num)
}

//2022-03-25
function reverseWords(str) {
  return str.split(' ').reverse().join(' ')
}

//2022-03-26
let boolToWord = bool => bool ? 'Yes' : 'No';

//2022-03-26
let maps = x => x.map( a => a*2);

//2022-03-27
function stringToArray(string){
  return string.split(' ');
}