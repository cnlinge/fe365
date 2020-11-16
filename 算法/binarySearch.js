// var  arr = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13, 14, 15]

function binarySearch(arr, target) { // target 要寻找的目标元素
  var l = 0, r = arr.length - 1; // [l, r] 中寻找
  while(l <= r) {
    var mid = Math.floor((l + r) / 2)
    if (arr[mid] === target) return mid
    if (arr[mid] > target) { // [l, mid - 1]
      r = mid - 1
    } else { // arr[mid] < target
      l = mid + 1
    }
  }
}


var arr = []
for(let i = 0 ; i < 10000000; i++) {
  arr.push(i)
}

let startTime = process.hrtime()
let sTime = new Date()
console.log(binarySearch(arr, 9))
let diff = process.hrtime(startTime) // [ 0, 3863173 ]
console.log(new Date() - sTime)
console.log(diff)
console.log(diff[0] * 1e3 + diff[1] * 1e-6) // 毫秒


// 

// var len = arr.length
// function findByBinary(left, right, x) {
//   var mid = Math.floor((right + left) / 2) // 注意此处在计算mid 索引 并不是 right - left
//   debugger
//   if (arr[mid] === x) {
//     console.log(arr[mid])
//   }
//   if (arr[mid] > x) {
//      findByBinary(left, mid, x)
//   }
//   if (arr[mid] < x) {
//      findByBinary(mid, right, x)
//   }
// }

// console.log(findByBinary(0, arr.length, 4))