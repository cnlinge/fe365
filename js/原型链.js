function Person() {
  this.name = '111'
}

var p1 = new Person()

console.log(p1 instanceof Person)

console.log(Object.getPrototypeOf(p1) === Person.prototype) // Object.getPrototypeOf(p1) 用于获取 p1对象的原型

// Person.prototype是否出现在 p1的原型链上
function checkProto(p1, Person) {
  var protoObj = Person.prototype
  while(true) {
    p1 = Object.getPrototypeOf(p1)
    if (p1 === protoObj) {
      return true
    } 
  }
}

console.log(checkProto(p1, Person))