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

//refactored (also less ridiculous)
function solution(number){
  let sum = 0;
  
  for(let i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}