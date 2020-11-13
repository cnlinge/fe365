/**
 *  new 操作符做了什么
 *  1.创建一个空对象， 2.把当前作用域的this指向这个对象  3.给对象赋值   4.返回这个对象
 */
function Person(name) {
  this.name = name
}

var p = new Person('zhangsan')

/**
 * 自己实现一个new操作符
 * 如何传参?
 * 
 */
function myNew(Person) {
  var obj = Object.create(Person.prototype)
  Person.call(obj)
  return obj
}
var p2 = myNew(Person)
console.log(p2)


function newOperator(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new TypeError('Type Error');
  }
  debugger
  console.log(ctor.prototype)
  const obj = Object.create(ctor.prototype);
  const res = ctor.apply(obj, args);
  debugger
  console.log(res)
  const isObject = typeof res === 'object' && res !== null;
  const isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;  // 这是在做什么？构造函数中有 return的情况吗？
}
const obj = newOperator(Person)
console.log(obj)

/**
 * ES6 class原理 以及继承原理 ?
 * 
 */

