// 定义发布者

class Publisher {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  publish(type) { // 发布者应该有一个发布的方法，他能发布某种类型的消息。 发布某种类型的消息 能通知本消息的订阅者 去触发更新操作
    this.dispatcher.publish(type, this)
  }
}

class Subscriber {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  subscribe(type) { // 订阅者应该具有订阅某种消息的能力
    this.dispatcher.subscribe(type, this)
  }
  update() { // 当订阅者 订阅的消息 发布时 , 去触发的更新操作
    console.log('.....')
  }
}

// 调度中心 维护 一个对象。 消息 与 消息订阅者

class Dispatcher {
  constructor() {
    this.dispatcher = {}
  }
  subscribe(type, subscribe) {
    if (!this.dispatcher[type]) {
      this.dispatcher[type] = []
    }
    this.dispatcher[type].push(subscribe)
  }
  publish(type) {
    this.dispatcher[type].forEach(subscribe => {
      subscribe.update(type)
    });
  }
}

class WebSet extends Publisher {
  constructor(name, dispatcher) {
    super(dispatcher)
    this.name = name
  }
  pushArticle(type) { // 具有发布文章的方法
    this.publish(type) // 调用父类的 publish方法
  }
}

class Reader extends Subscriber {
  constructor(name, dispatcher) {
    super(dispatcher)
    this.name = name
  }
  update(type) {
    console.log(`${this.name}--阅读了--${type}---文章`)
  }
}

var dispatcher = new Dispatcher()

var pub1 = new WebSet('前端', dispatcher)
var pub2 = new WebSet('后端', dispatcher)


var reader1 = new Reader('小利', dispatcher)
var reader2 = new Reader('小王', dispatcher)
var reader3 = new Reader('小张', dispatcher)

reader1.subscribe('前端')
reader2.subscribe('前端')
reader3.subscribe('后端')

pub1.pushArticle('前端')
pub2.pushArticle('后端')

