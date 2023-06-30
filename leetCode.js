// 1480. Running Sum of 1d Array
// Runtime Beats 62.54%
// Memory Beats 87.13%
var runningSum = function (nums) {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1]
	}
	return nums
}

// 1672. Richest Customer Wealth
// Runtime Beats 63.97%
// Memory Beats 88.48%
var maximumWealth = function (accounts) {
	const wealths = []

	for (let i = 0; i < accounts.length; i++) {
		wealths.push(accounts[i].reduce((acc, val) => acc + val))
	}

	return wealths.sort((a, b) => b - a)[0]
}

// 1342. Number of Steps to Reduce a Number to Zero
// Runtime Beats 52.80%
// Memory Beats 47.65%
var numberOfSteps = function (num) {
	let steps = 0

	while (num !== 0) {
		if (num % 2 === 0) {
			steps++
			num = num / 2
		}
		if (num % 2 === 1) {
			steps++
			num = num - 1
		}
	}
	return steps
}

// 412. Fizz Buzz
// Runtime Beats 62.54%
// Memory Beats 73.53%
var fizzBuzz = function (n) {
	const solutionArr = []

	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			solutionArr.push('FizzBuzz')
		} else if (i % 3 === 0) {
			solutionArr.push('Fizz')
		} else if (i % 5 === 0) {
			solutionArr.push('Buzz')
		} else {
			solutionArr.push(i.toString())
		}
	}

	return solutionArr
}
