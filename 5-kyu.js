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