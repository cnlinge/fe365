// add(1)(2)(3)

function add() {
  var args = [].slice.call(arguments) // [...arguments]
  fn = function() { // 内层函数 实现参数的收集
    args.push([].slice.call(arguments))
    return fn
  }
  fn.toString = function () {
    return args.reduce((sum, item) => sum += item * 1)
  }
  return fn
}

// 在调用console.log进行输出的时候 会调用toString方法
console.log(add(1)(2)(3))



/**
 * 内层函数
 */

let fn1=function() {
  debugger
  let fn2=function (){
    debugger
    console.log("fn2执行")
  }
  fn2.toString=function(){
    debugger
    console.log("toString执行")
    return 1;
  }
  return fn2;
}

console.log(fn1());



function fn(a,b,c) {
  return a + b + c
}

function curry(fn, args) {
  let length = fn.length
  console.log('length', length)
  let innerArgs = args || []
   return function() {
    var newArgs = innerArgs.concat([...arguments])
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
   }
}
const add = curry(fn)
console.log(add(3)(3)(4)) // 6