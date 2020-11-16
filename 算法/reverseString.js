// 给定一个字符串将其反转后输出 "hello" --> "olleh"

var str = "hellor"
var strArr = str.split('')
var len = strArr.length
for (let i = 0; i < len / 2; i++) {
  swap(strArr, i, len - i)
}

function swap(strArr, l,r) {
  var tmp = strArr[l]
  strArr[l] = strArr[r]
  strArr[r] = tmp
}

console.log(strArr.join(''))