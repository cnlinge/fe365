// 209 minimum Size subarray sum
// 给定一个整型数组和一个数字，找到数组中最短的一个连续子数组，是的连续子数组的和sum >=s 返回最短的连续子数组的长度
// var arr = [5,1,3,5,10,7,4,9,2,8]
var arr = [1,2,3,4,5]
var s = 15

function minSize(arr, s) {
  var l = 0;
  var r = 0;
  var sum = 0;
  var res = []
  while(r <= arr.length) {
    if (sum < s) {
      sum += arr[r++]
    } else {
      if (!res.length || res.length > r-l) {
        res = arr.slice(l,r) // [start, end)
      }
      sum = sum - arr[l++]    
    }

  }
  return res
}

console.log(minSize(arr, s))
/**
 * 关键：临界点的处理
 */




// 3 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

var str = "abcabcbb"
function longChildStr(str) {
  if(!str) return 0
  var arr = str.split('')
  if(!arr || !arr.length) return 0
  let max = 0; 
  let i = 0;
  let res = []
  while(i < arr.length) {
    var index = res.indexOf(arr[i])
    if (-1 === index) { 
      res.push(arr[i])
      if(res.length >= max) {
        max = res.length
      }
      i++
    } else {// 在res中存在
      res = res.slice(index + 1)
    }
  }
  return max
}

console.log(longChildStr(str))


// 438 s: "cbaebabacd" p: "abc"  [0, 6]
// 双指针 + 滑动窗口
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  if (s === p) {
   return [0]
  }
  var arr = s.split('')
  var pArr = p.split('')
  var len = pArr.length
  var obj = {}
  pArr.map(item => {
    if(obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  var res = []
  var obj2 = {}
  for(let i = 0; i <= (arr.length - len); i++) {
    if(i==0) {
      arr.slice(0,len).map(item => {
        if(obj2[item]) {
          obj2[item]++
        } else {
          obj2[item] = 1
        }
      })
    } else {
      if(obj2[arr[i-1]]) {
        obj2[arr[i-1]]--
      }
      if(obj2[arr[i+len-1]]) {
        obj2[arr[i+len-1]]++
      } else {
        obj2[arr[i+len-1]] = 1
      }
    }
    if (isAnagrams(obj2, obj)) {
      res.push(i)
    }
  }
  return res
};
function isAnagrams(obj2,obj) {
  console.log(obj2,obj)
  var isFlag = true

  for(key in obj) {
    if(obj2[key] !== obj[key]) {
      isFlag  = false
    }
  }
  return isFlag
}
console.log(findAnagrams("cbaebabacd", "abc"))

// console.log(findAnagrams("abab", "ab"))


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function(s, p) {
//   if (s === p) {
//    return [0]
//   }
//   var arr = s.split('')
//   var pArr = p.split('')
//   var len = pArr.length
//   var obj = {}
//   pArr.map(item => {
//     if(obj[item]) {
//       obj[item]++
//     } else {
//       obj[item] = 1
//     }
//   })
//   var res = []

//   for(let i = 0; i <= (arr.length - len); i++) {
//     if (isAnagrams(arr.slice(i, i + len), obj)) {
//       res.push(i)
//     }
//   }
//   return res
// };
// function isAnagrams(a,obj) {
// var obj2 = JSON.parse(JSON.stringify(obj))
// var isFlag = true
// for (let i = 0; i< a.length; i++) { // 'abb这种的就会有问题'
// obj2[a[i]]--
// }
// for(key in obj2) {
//   if(obj2[key] !== 0) {
//     isFlag  = false
//   }
// }
// return isFlag
// }

// 15 三数之和

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var nums = [-1, 0, 1, 2, -1, -4]
var threeSum = function(nums) {
  var i = 0;
  var res = []
  while(i < nums.length - 3) {
    let sum = nums[i] + nums[i+1] + nums[i+2]
    if(sum === 0) {
      res.push([nums[i] ,nums[i+1] ,nums[i+2]])
    }
    i++
  }
  return res
};
console.log(threeSum(nums))
