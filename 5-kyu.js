// ***********************************************************
// 5-kyu
// Simple Pig Latin
// 2022-05-26
function pigIt(str){
  return str
          .split(" ")
          .map((word) => {
            return word
                    .match(/[A-z]/i) ?
                    `${word.substr(1)}${word.substr(0,1)}ay` : word
          })
          .join(' ');
}

// ***********************************************************
// 5-kyu
// Moving Zeros To The End
// 2022-05-28
function moveZeros(arr) {
  let count = 0;
  let n = arr.length
  for (let i =0 ; i < n ; i++){
    if(arr[i]!== 0){
      arr[count++] = arr[i];
    }
  }
    while(count<n) {
      arr[count++] =0;
    }
  return arr
}
// this one is easier to read
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}

// ***********************************************************
// 5-kyu
// Human Readable Time
// 2022-05-29
function humanReadable(sec) {
  let hh = Math.floor(sec/3600);
  sec %= 3600;
  let mm = Math.floor(sec/60);
  let ss = sec%60;

  if(hh < 10) {hh = '0'+hh}
  if(mm < 10) {mm = '0'+mm}
  if(ss < 10) {ss = '0'+ss}

  return `${hh}:${mm}:${ss}`
}
// using Date constructor (only up to 24h)
function humanReadable(sec) {
  const time = new Date(null);
  time.setSeconds(sec)
  return time.toISOString().substr(11, 8);
}


// ***********************************************************
// 5-kyu
// RGB To Hex Conversion
// 2022-06-27
const rgb = (r, g, b) => {
    return [r, g, b]
            // tests for values under 0 (out of spec)
            .map(x => {
              return x < 0 ? 0 : x
            })
            // tests for values over 255 (out of spec)
            .map(x => {
              return x > 255 ? 'ff' : x
            })
            .map (x => {
              const hex = x.toString(16)
              return hex.length === 1 ? '0' + hex : hex
            })
            .join('').toUpperCase()
  }
// voted as best pracice
function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
}
  
function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}


// ***********************************************************
// 5-kyu
// Calculating with Functions
// 2022-06-28
const expression = (n, op) => !op ? n : op(n)

function zero(op) {return expression(0, op)}
function one(op) {return expression(1, op)}
function two(op) {return expression(2, op)}
function three(op) {return expression(3, op)}
function four(op) {return expression(4, op)}
function five(op) {return expression(5, op)}
function six(op) {return expression(6, op)}
function seven(op) {return expression(7, op)}
function eight(op) {return expression(8, op)}
function nine(op) {return expression(9, op)}

function plus(x) {return function(y) {return y + x} }
function minus(x) {return function(y) {return y - x} }
function times(x) {return function(y) {return y * x} }
function dividedBy(x) {return function(y) {return Math.floor(y / x)} }


// ***********************************************************
// 5-kyu
// Calculating with Functions
// 2022-06-29
function rot13(message){
    const array = message.split('')
    const toBase36 = inputArray => inputArray.map(x => parseInt(x, 36) > -1 ? parseInt(x, 36) : x)
    const checkForLetter = base36Letter => base36Letter >= 10 && base36Letter <= 35
    const cipher = char => (char + 13) > 35 ? (char - 26 + 13) : char + 13
    const base36toLetter = x => x.toString(36)
    
    const sol = toBase36(array)
              .map(x => checkForLetter(x) ? cipher(x) : x)
              .map(x => base36toLetter(x))
    
    if (array[0] === array[0].toUpperCase()) {
      sol.unshift(sol[0].toUpperCase())
      delete sol[1]
    }
  
    return sol.join('')
  }
  // regex cipher
  function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }


// ***********************************************************
// 5-kyu
// Pete, the baker
// 2022-07-03
// Write a function cakes()
// which takes the recipe (object) and the available ingredients (also an object)
// and returns the maximum number of cakes Pete can bake (integer)
  function cakes(recipe, available) {
    return Object.keys(recipe).reduce((amount, ingredient) => {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), amount)
    }, Infinity) 
  }
  // even simpler
  const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )









// ***********************************************************
// 5-kyu
// Extract the domain name from a URL
// 2022-07-04
// the following code goes in the right direction but is overcomplicated
  const domainName = url => {
    let arrayUrl = url.replace('http://', '').replace('https://', '').replace('www.', '').split('')
    
    while(arrayUrl.lastIndexOf('.') !== -1) {
      arrayUrl.splice(arrayUrl.lastIndexOf('.'), arrayUrl.length)
    }
    
    return arrayUrl.join('')
  }
// way simpler solution
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };


// ***********************************************************
// 5-kyu
// Valid Parentheses
// 2022-07-17
  function validParentheses(parens){
    const hashMap = { '(': ')', '[': ']', '{': '}' }
    const stack = []
  
    for (let ch of parens) {
      if (hashMap[ch]) {
        // ch is an opening parenthesis
        stack.push(hashMap[ch])
      } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
        // ch is a closing parenthesis & matches top of stack
        stack.pop()
      } else {
        // ch is a closing parenthesis & does NOT match top of stack
        return false
      }
    }
    
    return stack.length === 0
  }


// ***********************************************************
// 5-kyu
// The Hashtag Generator
// 2022-07-18
function generateHashtag(str) {
  if (str.trim() === '') return false

  const stringWithCamelCase = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}
// simpler
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


// ***********************************************************
// 5-kyu
// First non-repeating character
// 2022-07-19
  function firstNonRepeatingLetter(s) {
    let array = [...s.toLowerCase()]
    
    // find first character which index and lastindex are equal
    // if not found returns "undefined" (falsy)
    let result = array.find((char) => array.indexOf(char) === array.lastIndexOf(char));
    
    // if true, return character
    // if false, return ''
    return result ? s[array.indexOf(result)] : ""
  }


// ***********************************************************
// 5-kyu
// Greed is Good
// 2022-07-20
  function score( dice ) {
    // Business rules of the game:
    //  v: the dice value
    //  c: the number of dice required to trigger the rule
    //  p: the points added each time the rule is triggered
    const scoringRules = [
      {v: 1, c: 3, p: 1000},
      {v: 6, c: 3, p: 600},
      {v: 5, c: 3, p: 500},
      {v: 4, c: 3, p: 400},
      {v: 3, c: 3, p: 300},
      {v: 2, c: 3, p: 200},
      {v: 1, c: 1, p: 100},
      {v: 5, c: 1, p: 50}
    ]
  
    // returns the score given a histogram mapping a dice value to the number of dice with that value
    const scoreForHistogram = counts => {
      let score = 0
      for (const {v, c, p} of scoringRules) {
          // either reaches the minimum count to trigger the rule, or sets 0 count
        const ruleCount = Math.floor((counts[v] || 0) / c);
        counts[v] -= ruleCount * c;
        score += ruleCount * p;
      }
      return score;
    };
  
    // Generate the histogram required by scoreForHistogram
    const counts = [...Array(7)].map(v => 0);
    // note that the rest of the logic uses 1-indexed arrays, so we need 7 entries to get a valid counts[6] entry
    for (const v of dice) counts[v]++;
  
    return scoreForHistogram(counts)
  }


// ***********************************************************
// 5-kyu
// Number of trailing zeros of N!
// 2022-08-01
// Using an "infinite" n>0 while loop, but reducing n to 0 in each loop
// You don't know what you don't know 
function zeros (n) {
  let z = 0;

  while(n>0){
    n = Math.floor(n/5);
    z += n;
  }
  
  return z;
}



// 5-kyu
// PaginationHelper
// 2022-08-12
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  // returns collection length
  return Paginationhelper.collection.length()
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  // itemCount() divided by itemsPerPage input variable
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  // object with pageNumber property
  pageObject_1 {
    pageIndex: 0
    itemsInPage: [1, 2, 3]
  }

  collectionObject {
    itemsPerPage: 4 // input
    collection: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // input
    pageCount: pageCount() // 4
    pages {
    pageIndex   itemsInPage
            0: [1, 2, 3]
            1: [4, 5, 6]
            2: [7, 8, 9]
            3: [10]
    }
  }
  
  // desired outcome
  // 10 items
  // 4 pages
  // Page 0     1, 2, 3    returns 3
  // Page 1     4, 5, 6    returns 3
  // Page 2     7, 8, 9    returns 3
  // Page 3     10         returns 1
  // Page 4                returns -1
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  
}
