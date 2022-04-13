//2022-04-07
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let letter of str) {
    if (vowels.includes(letter)) {
      vowelsCount++;
    } 
  }
  return vowelsCount;
}

//2022-04-07
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}
//'i' means case-sensitive regex replacement so -> /[aeiou]/gi

//2022-04-08
function squareDigits(num){
  return Number(num.toString().split('').map(Number).map((x) => x * x).join(""));
}

//2022-04-09
function highAndLow(numbers){
  let array = numbers.split(' ').map(Number)
  let max = array.reduce((a, b) => {return Math.max(a, b)})
  let min = array.reduce((a, b) => {return Math.min(a, b)})
  return `${max} ${min}`
}

//2022-04-10
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

//2022-04-11
function getMiddle(s) {
  let sol = ''
  let arr = s.split('')
  let midIndex = Math.floor(s.length/2)
  if (s.length % 2 === 1) {
    sol = arr[midIndex]
  } else {
    let midIndex2 = (s.length/2)-1
    sol = arr[midIndex2]+arr[midIndex]
  }
  return sol
}

//2022-04-12
function descendingOrder(n){
  return Number(n.toString().split('').map(Number).sort((a, b) => b - a).join(''));
}