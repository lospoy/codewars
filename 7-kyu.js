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

//2022-04-13
function filter_list(l) {
  let filteredList = []
  for (let key in l) {
    if (typeof l[key] == 'number') {
      filteredList.push(l[key])}
    }
  return filteredList
}

//2022-04-14
function accum(s) {
  return s
    .split('')
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join('-');
}

// 2022-04-15
function findShort(s){
  let arr = s.split(" ").map(x => x.length).sort((a, b) => b-a).reverse()
  return arr[0]
}

// 2022-04-15
String.prototype.toJadenCase = function () {
  return this.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");
};

//2022-04-26
function XO(str) {
  let xCounter = null
  let oCounter = null
  let arr = str.split('')
  let sol = true

  for (let char in arr) {
  if(arr[char].toLowerCase() === 'x'){xCounter++}
  else if(arr[char].toLowerCase() === 'o'){oCounter++}
  sol = xCounter == oCounter ? true : false
  }
  return sol
}
//2022-04-26 regex to the rescue
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}