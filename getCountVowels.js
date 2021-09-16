function getCount(str){
    var m = str.match(/[aeiou]/gi)
    return m === null ? 0 : m.length
}

console.log(getCount('abracadabra'))
console.log(getCount('pear tree'))
console.log(getCount('o a kak ushakov lil vo kashu kakao'))
console.log(getCount('my pyx'))
console.log(getCount('this is a long input, i cannot believe why Im testing a huge very large string'))