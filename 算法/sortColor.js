// n个元素的数组, 其中的取值 只有 0, 1, 2三种情况 对其进行排序
// var arr = [1,2,0,1,0,2,1,0,1,1,1,0,0,2,2,0]

// var obj = { // 用一个数组去存
//   0: 0,
//   1: 0,
//   2: 0
// }
// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]]++
// }
// var result = []
// for(let i = 0; i< obj[0]; i++) {
//   result.push(0)
// }
// for(let i = 0; i< obj[1]; i++) {
//   result.push(1)
// }
// for(let i = 0; i< obj[2]; i++) {
//   result.push(2)
// }



// 优化

var arr = [1,2,0,1,0,2,1,0,1,1,1,0,0,2,2,0]

var zero = 0
var i = 0;
var tow = arr.length - 1
while(zero < tow && i <= tow) {
  debugger
  if (arr[i] === 0) {
    swap(arr, zero, i)
    zero++
  } else if(arr[i] === 2) {
    swap(arr, i, tow)
    tow--
  } else {
    i++
  }
  
}
function swap(arr, a, b) {
  var tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

console.log(arr)