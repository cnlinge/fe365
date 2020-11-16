
function Person() {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log(11111)
}

function Son() {}

// 1. 原型链继承
  // 问题：1.引用类型数据共享 2.无法向父类传参
Son.prototype = new Person()
Son.prototype.constructor = Son


// 2. 构造函数继承
  // 问题：共享的方法都在构造函数中定义，无法达到复用的目的

function Son(name) {
  Person.call(this, name)
}

// 3.组合继承
  // 共享的属性与方法通过原型继承，实例特有的方法通过构造函数继承；问题：两次调用构造函数
function Son() {
  Person.call(this)
}
Son.prototype = new Person()
Son.prototype.constructor = Son

// 4. 寄生式继承
var personObj = {
  name: 'zs',
  likes: ['1', '2']
}

function createAnther(o) {
  var anther = new Object(o)
  anther.sayHello = function() {
    console.log(1111)
  }
  return anther
}


// 5. 寄生组合式继承

function inheritPrototype(Person, Child) { // 用于继承Person的原型属性
  var proto = new Object(Person.prototype)
  proto.constructor = Child
  Child.prototype = proto
}

function Child() { //  继承构造函数中的
  Person.call(this)
}

inheritPrototype(Person, Child)

// 6.原型式继承

function createAnther(o) {
  function F() {}
  F.prototype = o
  return new F()
}