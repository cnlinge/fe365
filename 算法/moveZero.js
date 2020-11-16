var arr = [ 3, 0,1, 0,4,2,0,12,0, 19]
var index = 0; // 用于记录非零的最后一位数字
for(let i = 0; i < arr.length; i++) { // [ 3,1,0, 0,4,2,0,12]
  if (arr[i] !== 0) {
    arr[index] = arr[i]
    if (i > index) {
      arr[i] = 0
    }
    index = index + 1
  } 
}
console.log(arr)