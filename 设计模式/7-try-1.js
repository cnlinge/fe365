// 发布者
class Publisher {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  publish(type) { // 发布这的方法
    this.dispatcher.publish(type, this)
  }
}

class Subscriber {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  subscribe(type) {
    this.dispatcher.subscribe(type, this)
  }
  update() {
    console.log('.....')
  }
}

class Dispatcher {
  constructor() {
    this.dispatcher = {}
  }
  subscribe(type, subscriber) {
    if (!this.dispatcher[type]) {
      this.dispatcher[type] = []
    }
    this.dispatcher[type].push(subscriber)
  }
  // 删除

  // 发布
  publish(type, publisher) {
    this.dispatcher[type].forEach(subscriber => {
      subscriber.update(type)
    });
  }
}

class WebSet extends Publisher {
  constructor(name,dispatcher) {
    super(dispatcher)
    this.name = name
  }
  publishArticle(type) {
    this.publish(type)
  }
}

class Reader extends Subscriber {
  constructor(name, dispatcher) {
    super(dispatcher)
    this.name = name
  }
  update(type) {
    console.log(`${this.name}--阅读了${type}--的文章`)
  }
}


var dispatcher = new Dispatcher() // 创建一个调度者

var pub1 = new WebSet('前端', dispatcher) // 创建一个发布者

// var sub1 = new Subscriber(dispatcher) // 创建一个订阅者, 
// var sub2 = new Subscriber(dispatcher) // 创建一个订阅者, 

var sub1 = new Reader('小明', dispatcher) // 创建一个订阅者, 
var sub2 = new Reader('小利', dispatcher) // 创建一个订阅者, 

sub1.subscribe('前端') // 
sub2.subscribe('后端') // 

pub1.publish('前端')
