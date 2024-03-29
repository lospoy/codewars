//2022-03-16
function opposite(number) {
	return -number
}

//2022-03-17
function solution(str) {
	//turns str into an array (each array element is 1 character from str)
	let splitStr = str.split('')

	//reverses the array
	let reverseSplitStr = splitStr.reverse()

	//joins all elements into a string
	let joinReversedStr = reverseSplitStr.join('')

	return joinReversedStr

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
	for (i = 0; year / 100 > i; i++) {}
	return i
}

//2022-03-20
//This solution was too slow and gave an Execution Timed Out error
function oddCount(n) {
	let x = 0
	for (let i = 0; i < n; i++) {
		if (i % 2 !== 0) {
			x++
		}
	}
	return x
}

// efficient solution below
// const oddCount = n => Math.floor(n/2) ;

//2022-03-25
let even_or_odd = (number) => (number % 2 === 0 ? 'Even' : 'Odd')

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
let boolToWord = (bool) => (bool ? 'Yes' : 'No')

//2022-03-26
let maps = (x) => x.map((a) => a * 2)

//2022-03-27
function stringToArray(string) {
	return string.split(' ')
}

//2022-03-27
function countSheep(num) {
	let result = ''
	for (let i = 1; i <= num; i++) {
		result += `${i} sheep...`
	}
	return result
}

//2022-03-28
function positiveSum(arr) {
	return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
}

//2022-03-29
let makeNegative = (num) => (num > 0 ? -num : num)

//2022-03-30
function repeatStr(n, s) {
	let result = ''
	for (let i = 0; i < n; i++) {
		result += s
	}
	return result
}

//2022-03-31
function summation(num) {
	let result = 0
	for (i = 1; i <= num; i++) {
		result += i
	}
	return result
}

//2022-04-01
function removeChar(str) {
	return str.slice(1, -1)
}

//2022-04-01
function noSpace(x) {
	return x.replace(/ /g, '')
}

//2022-04-02
function litres(time) {
	return Math.floor(time / 2)
}

//2022-04-02
function basicOp(operation, value1, value2) {
	if (operation === '+') {
		return value1 + value2
	} else if (operation === '-') {
		return value1 - value2
	} else if (operation === '*') {
		return value1 * value2
	} else {
		return value1 / value2
	}
}

//2022-04-02
function greet(name) {
	return `Hello, ${name} how are you doing today?`
}

//2022-04-02
function digitize(n) {
	return n.toString().split('').reverse().map(Number)
}

//2022-04-04
function greet(name) {
	if (name === 'Johnny') return 'Hello, my love!'
	return 'Hello, ' + name + '!'
}

//2022-04-05
function squareSum(numbers) {
	return numbers.reduce((x, i) => i * i + x, 0)
}

//2022-04-06
function countSheeps(arrayOfSheep) {
	let sum = 0
	for (let key in arrayOfSheep) {
		if (typeof arrayOfSheep[key] == 'boolean') {
			if (arrayOfSheep[key] === true) {
				sum++
			}
		}
	}
	return sum
}

// ***********************************************************
// 8-kyu
// Sum without highest and lowest number
// 2022-07-22
// Firefox 102.0.1 (64-bit) and Node v14.x interpret sort() differently
// Firefox's interpretation of  sort((a, b) => a > b) doesn't match Node's
// Node requires sort((a, b) => b - a)
// Took a lot of debugging and a kind soul in the CodeWars Discord to figure this out
function sumArray(array) {
	if (array == null || array.length < 3) {
		return 0
	} else {
		return array
			.sort((a, b) => b - a)
			.slice(1, -1)
			.reduce((a, b) => a + b)
	}
}

// ***********************************************************
// 8-kyu
// Sum of multiples
// 2023-06-26
function sumMul(n, m) {
	if (n >= m) return 'INVALID'

	let sum = 0
	for (let i = n; i < m; i += n) {
		sum += i
	}
	return sum
}

// ***********************************************************
// 8-kyu
// Convert a Boolean to a String
// 2023-06-27
function booleanToString(b) {
	return b ? 'true' : 'false'
}

// other solutions
function booleanToString(b) {
	return b.toString()
}

function booleanToString(b) {
	return `${b}`
}

function booleanToString(b) {
	return b + ''
}
