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

// 876. Middle of the Linked List
// 2023-07-01
// Runtime Beats 64.51%
// Memory Beats 6.92%
var middleNode = function (head) {
	let twice = head
	let once = head
	while (twice && twice.next) {
		twice = twice.next.next
		once = once.next
	}

	return once
}

// 383. Ransom Note
// 2023-07-02
// Runtime Beats 65.48%
// Memory Beats 63.53%
var canConstruct = function (ransomNote, magazine) {
	for (const char of magazine) {
		ransomNote = ransomNote.replace(char, '')
	}

	return !ransomNote ? true : false
}

// 35. Search Insert Position
// 2023-07-03
// Runtime Beats 88.9%
// Memory Beats 12.27%
var searchInsert = function (nums, target) {
	if (nums.indexOf(target) !== -1) {
		return nums.indexOf(target)
	}
	if (nums.indexOf(target) == -1) {
		nums.push(target)
		nums.sort((a, b) => a - b)
		return nums.indexOf(target)
	}
}

// 1417. Reformat The String
// 2023-07-05
var reformat = function (s) {
	let a = [],
		b = []
	for (x of s) {
		isNaN(x) ? a.push(x) : b.push(x)
	}
	if (a.length < b.length) {
		;[a, b] = [b, a]
	}
	return a.length - b.length <= 1
		? a.map((x, i) => x + (b[i] ? b[i] : '')).join('')
		: ''
}

// 88. Merge Sorted Array
// 2023-07-06
var merge = function (nums1, m, nums2, n) {
	for (let i = m, j = 0; j < n; i++, j++) {
		nums1[i] = nums2[j]
	}
	nums1.sort((a, b) => a - b)
}

// 70. Climbing Stairs
// 2023-07-07
var climbStairs = function (n) {
	let step2Before = 1
	let step1Before = 1
	for (let i = 2; i <= n; i++) {
		let tmp = step1Before
		step1Before = step2Before + step1Before
		step2Before = tmp
	}
	return n > 0 ? step1Before : 0
}
