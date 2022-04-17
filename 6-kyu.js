//2022-04-16
function solution(number){
  let sum = 0

for (let i = 0; i < number; i++) {
  if (i < 0) {
    sum = 0
  } else if (i % 3 === 0 && i % 5 === 0) {
    sum += i
  } else if (i % 5 === 0) {
    sum += i
  } else if (i % 3 === 0) {
    sum += i
  }
}
  return sum
}
//2022-04-16 refactored (also less ridiculous)
function solution(number){
  let sum = 0;
  
  for(let i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

//2022-04-17
function createPhoneNumber(arr){
  let p1 = String(arr[0]) + String(arr[1]) + String(arr[2])
  let p2 = String(arr[3]) + String(arr[4]) + String(arr[5])
  let p3 = String(arr[6]) + String(arr[7]) + String(arr[8]) + String(arr[9])
  return `(${p1}) ${p2}-${p3}`
}
//2022-04-17 loop
function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  for(let i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  return format;
}
//2022-04-17 array methods
function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}