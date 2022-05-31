// ***********************************************************
// 6-kyu
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

// ***********************************************************
// 6-kyu
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

// ***********************************************************
// 6-kyu
//2022-04-18
function likes(names) {
  if(names.length === 0) {return 'no one likes this'}
  else if(names.length === 1) {return names.reduce((p, c) => p.replace('$a',c), '$a likes this')}
  else if(names.length === 2) {return names.reduce((p, c) => p.replace('$a',c), '$a and $a like this')}
  else if(names.length === 3) {return names.reduce((p, c) => p.replace('$a',c), '$a, $a and $a like this')}
  else {return names.reduce((p, c) => p.replace('$a',c), `$a, $a and ${names.length-2} others like this`)}
}
//2022-04-18 best practice
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

// ***********************************************************
// 6-kyu
//2022-04-19
function findOdd(A) {
  let countNumObj = A.reduce((key, value) => {
    if(!key[value]) {
      key[value] = 0
    }
      key[value]++
    return key
  }, {})

  for (let value in countNumObj) {
    if (countNumObj[value] % 2 === 1) { // ===1 not necessary
      return Number(value)
    }
  }
}
//2022-04-19 cleaner way of -> !key[value] then create it
function findOdd(A) {
  let obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1; //is there a obj[el]? then ++, otherwise =1
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop); //one line implicit return
  }
}
//2022-04-19
function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

// ***********************************************************
// 6-kyu
//2022-04-20
function digital_root(n) {
  let acc = 0
  while(n.toString().split('').length !== 1) {
      acc = n.toString().split('').map(x => Number(x)).reduce((a, b) => a+b)
      n = acc
  }
  return n
}
//2022-04-20 quick maths
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

// ***********************************************************
// 6-kyu
//2022-04-21
function spinWords(string){
  return string
                .split(' ')
                .map(x => {
                  if (x.length > 4) {
                    return x.split('').reverse().join('')
                  } else {
                    return x
                  }
                })
                .join(' ')
}

// ***********************************************************
// 6-kyu
//2022-04-22
function arrayDiff(a, b) {
  return a.filter(val => !b.includes(val)); //best practice: use 'e' as value variable name
}

// ***********************************************************
// 6-kyu
//2022-04-23
function findOutlier(integers) {
  let even = integers.filter(x => x % 2 === 0)
  let odd = integers.filter(x => x % 2 !== 0)
  return even.length === 1 ? even.shift() : odd.shift() // people used even[0] instead of even.shift()
}

// ***********************************************************
// 6-kyu
// Counting Duplicates
// 2022-05-12
function duplicateCount(text){
  if(text == '') {return 0}
  else {
    let obj = text
                .toLowerCase()
                .split('')
                .reduce((char, n) => {
                    if(!char[n]) {
                      char[n] = 0
                    }
                    char[n]++
                    return char
                    }, {})
    return Object.values(obj).filter((x) => x > 1).length
  }
} 

// ***********************************************************
// 6-kyu
// Duplicate Encoder
// 2022-05-13
function duplicateEncode(word){
  const characters = word
                .toLowerCase()
                .split('')
                
  const counts = characters.reduce((ct, ltr) => {
                            if(!ct[ltr]) {ct[ltr] = 0}
                            ct[ltr]++
                            return ct
                            }, {})

  return characters
            .map(letter => counts[letter] === 1 ? '(' : ')')
            .join('');
}
// .map(element, index, array)
// passing the array directly into the map function instead of passing a separate array
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (el, i, arr) {
      return arr.indexOf(el) == arr.lastIndexOf(el) ? '(' : ')'
    })
    .join('');
}

// ***********************************************************
// 6-kyu
// Persistent Bugger.
// 2022-05-18
function persistence(num) {
  let times = 0
  while (num > 9) {
    num = `${num}`.split('').map(Number).reduce((a, b) => a*b)
    times++
  }
  return times
}

// ***********************************************************
// 6-kyu
// Replace With Alphabet Position
// 2022-05-19
function alphabetPosition(text) {
  return text.split('').map(x => (parseInt(x, 36) - 9)).filter(x => x > 0).join(' ')
}

// ***********************************************************
// 6-kyu
// Unique In Order
// 2022-05-20
function uniqueInOrder(iterable){
  typeof iterable == 'string' ? iterable = iterable.split('') : iterable
  return iterable.filter((x, i, arr) => arr[i] !== arr[i+1])
}

// ***********************************************************
// 6-kyu
// Convert string to camel case
// 2022-05-21
function toCamelCase(str){
  // solving without regular expressions:

  // checks type of separator and splits accordingly, then assigns the first word, unchanged, to the variable
  let firstWord =  str.includes('-') ? str.split('-')[0] : str.split('_')[0]
  // checks type of separator and splits accordingly, then changes the rest of the words to camelCase, joins then, and assigns them to the variable
  let otherWords = str.includes('-') ? str.split('-').slice(1, str.length, 0).map(a => a[0].toUpperCase() + a.substring(1)).join('') : str.split('_').slice(1, str.length, 0).map(a => a[0].toUpperCase() + a.substring(1)).join('')
  
  return firstWord + otherWords
}

// ***********************************************************
// 6-kyu
// Your order, please
// 2022-05-23
function order(words){
  // with RegExp
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}
  //without regular expressions
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}

// ***********************************************************
// 6-kyu
// Detect Pangram
// 2022-05-24
function isPangram(string){
  // maps characters to integers, then filters for letters only
  let filteredStr = string
                      .split('')
                      .map(x => (parseInt(x, 36) - 9))
                      .filter(x => x > 0)

  // creates a set, checks for the size of the alphabet
  return new Set(filteredStr).size === 26
} 

// ***********************************************************
// 6-kyu
// Take a Ten Minutes Walk
// 2022-05-25
function isValidWalk(walk) {
  //coordinate pairs for movement
  const n = [1, 0]
  const s = [-1, 0]
  const e = [0, 1]
  const w = [0, -1]
  const initial = [0, 0]
  let current = [0, 0]
  //update (sum) coordinates
  const sum = (array1, array2) => array1.map((num, idx) => (num + array2[idx]))
  
  if(walk.length !== 10) {
    return false
  } else {
  walk.forEach(x => {
    if(x === 'n') {current = sum(current, n)}
    else if (x === 's') {current = sum(current, s)}
    else if (x === 'e') {current = sum(current, e)}
    else {current = sum(current, w)}
  })
  return JSON.stringify(current) === JSON.stringify(initial)
  }
}

// ***********************************************************
// 6-kyu
// Does my number look big in this?
// 2022-05-31
function narcissistic(value) {
  let arr = value.toString().split('')
  let sol = arr.map(x => x ** arr.length).reduce((a, b) => a+b)
  return sol === value ? true : false
}
// refactored
function narcissistic(value) {
  return value.toString()
              .split('')
              .map( (x,i,arr) => x ** arr.length)
              .reduce( (a,b)=> +a + +b) 
               === value
}