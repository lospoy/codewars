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