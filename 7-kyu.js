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