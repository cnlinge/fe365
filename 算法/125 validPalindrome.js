// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 输入: "A man, a plan, a canal: Panama"
// 输出: true
var str = "A man, a plan, a canal: Panama"
function isPalindrome(str) {
  var strArr = str.split('')
  var reg = /^[0-9]|[a-zA-Z]$/
  var l = 0, r = strArr.length - 1
  while(l < r) {
    if (!reg.test(strArr[l])) {
      l++
      continue
    }
    if (!reg.test(strArr[r])) {
      r--
      continue
    }
    if(strArr[l].toUpperCase() !== strArr[r].toUpperCase()) {
      return false
    } else {
      l++
      r--
    }
  }
  return true
}
console.log(isPalindrome(str))