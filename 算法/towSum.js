var arr = [2,3,4,5,6,7,8,9]
var target = 9
var l =0, r = arr.length - 1

while(l <= r) {
  if (arr[l] + arr[r] === target) {
    console.log(l,r)
    break
  }
  if (arr[l] + arr[r] < target) {
    l++
  }
  if (arr[l] + arr[r] > target) {
    r--
  }
}