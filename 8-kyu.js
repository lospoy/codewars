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