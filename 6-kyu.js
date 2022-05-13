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