// ***********************************************************
// 7-kyu
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

// ***********************************************************
// 7-kyu
//2022-04-07
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}
//'i' means case-sensitive regex replacement so -> /[aeiou]/gi

// ***********************************************************
// 7-kyu
//2022-04-08
function squareDigits(num){
  return Number(num.toString().split('').map(Number).map((x) => x * x).join(""));
}

// ***********************************************************
// 7-kyu
//2022-04-09
function highAndLow(numbers){
  let array = numbers.split(' ').map(Number)
  let max = array.reduce((a, b) => {return Math.max(a, b)})
  let min = array.reduce((a, b) => {return Math.min(a, b)})
  return `${max} ${min}`
}

// ***********************************************************
// 7-kyu
//2022-04-10
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// ***********************************************************
// 7-kyu
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

// ***********************************************************
// 7-kyu
//2022-04-12
function descendingOrder(n){
  return Number(n.toString().split('').map(Number).sort((a, b) => b - a).join(''));
}

// ***********************************************************
// 7-kyu
//2022-04-13
function filter_list(l) {
  let filteredList = []
  for (let key in l) {
    if (typeof l[key] == 'number') {
      filteredList.push(l[key])}
    }
  return filteredList
}

// ***********************************************************
// 7-kyu
//2022-04-14
function accum(s) {
  return s
    .split('')
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join('-');
}

// ***********************************************************
// 7-kyu
// 2022-04-15
function findShort(s){
  let arr = s.split(" ").map(x => x.length).sort((a, b) => b-a).reverse()
  return arr[0]
}

// ***********************************************************
// 7-kyu
// 2022-04-15
String.prototype.toJadenCase = function () {
  return this.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");
};

// ***********************************************************
// 7-kyu
// 2022-04-26
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
// 2022-04-26 regex to the rescue <== DO NOT USE FOR NOW, AVOID REGEX
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// ***********************************************************
// 7-kyu
// 2022-05-02
function maskify(cc) {
  let sol = ''
  let arrChar = cc.split('')
  let lastFourChar = []
  for (i = 4; i >= 0; i--) {
    lastFourChar.push(arrChar[arrChar.length - i])
  }
  for (i = 0; i < cc.length - 4; i++) {
    sol += '#'
  }
    return sol + lastFourChar.join('')
}

// ***********************************************************
// 7-kyu
// 2022-05-04
function DNAStrand(dna){
  let str = "";
  for(var i = 0 ; i < dna.length ; i++){
    if(dna.charAt(i) == "A"){
      str += "T"
    }  if(dna.charAt(i) == "T"){
      str += "A"
    }  if(dna.charAt(i) == "C"){
      str += "G"
    }  if(dna.charAt(i) == "G"){
      str += "C"
    } 
  }
  return str
}

// ***********************************************************
// 7-kyu
// 2022-05-05
function isIsogram(str){
  if (typeof str === undefined){
    return true
  }
  let str2 = str.toLowerCase()
  let passing = true;
  let counts = {}
  for (i = 0; i <= str2.length; i++) {
    let letter = str2.charAt(i)
    if(counts[letter]) {
      counts[letter] = 1 + counts[letter]
    } else {
      counts[letter] = 1
    }
    if(counts[letter] > 1) {
      return passing = false
    }
  }
  return passing
}

// ***********************************************************
// 7-kyu
// Growth of a Population
// 2022-05-12
function nbYear(p0, percent, aug, p) {
    
  for (let years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

// ***********************************************************
// 7-kyu
// Friend or Foe?
// 2022-05-14
function friend(friends){
  return friends.filter(x => x.length == 4);
}

// ***********************************************************
// 7-kyu
// Two to One
// 2022-05-16
function longest(s1, s2) {
  return (s1+s2)
    .toLowerCase()
    .split('')
    .filter((el, i, arr) => {
      return arr.indexOf(el) == i
    })
    .sort((a, b) => a.localeCompare(b))
    .join('');
}
// best practice
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// ***********************************************************
// 7-kyu
// Categorize New Member
// 2022-06-11
function openOrSenior(data){
  let seniorOpen = x => x.map((x, i, arr) => arr[0] > 54 && arr[1] > 7 ? 'Senior' : 'Open')[0]
  return data.map(x => seniorOpen(x))
}
// Destructuring: [age, handicap]
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// ***********************************************************
// 7-kyu
// Sum of two lowest positive integers
// 2022-06-15
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a-b)[0] + numbers.sort((a,b)=>a-b)[1]
};
// best practice
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
};

// ***********************************************************
// 7-kyu
// String ends with?
// 2022-06-16
function solution(str, ending){
  const a = str.split('').length - ending.split('').length
  const b = str.split('').length
  
  return str.split('').slice(a, b).join('') == ending
}
// method to check end of string!
function solution(str, ending){
  return str.endsWith(ending);
}

// ***********************************************************
// 7-kyu
// Tribonacci Sequence
// 2022-07-29
function tribonacci(signature,n){
    let sol = signature

    for (i = 0; i <= n-4; i++) {
        let nextInArray = sol[i] + sol[i+1] + sol[i+2]
        sol.push(nextInArray)
    }

    return sol.slice(0, n)
}

// ***********************************************************
// 7-kyu
// Is It Negative Zero (-0)?
// 2022-08-03
function isNegativeZero(n) {
  return n === 0 && (1 / n < 0);
}
// ES6
const isNegativeZero = n => Object.is(n, -0)