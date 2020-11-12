/**
 * 观察者模式 - 1对多
 * 观察者 observer
 * 被观察者 Subject
 */

// class Subject {
//   constructor() {
//     this.observers = []
//   }
//   add (ob) {
//     this.observers.push(ob)
//   }
//   publish() {
//     this.observers.forEach(ob => {
//       ob.update()
//     });
//   }
// }

// class Observer {
//   constructor(name) {
//     this.name = name
//   }
//   update() {
//     console.log(`${this.name}-执行了.....`)
//   }
// }

// var subject = new Subject()
// subject.add(new Observer('luck'))
// subject.add(new Observer('summer'))

// subject.publish()

/**
 * 发布&订阅模式
 */

//发布者
class Pub {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  publish(type) { // 发布方法， type是通知类型
    this.dispatcher.publish(type, this)
  }
}
//订阅者
class Subscriber {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  subscribe(type) { // 订阅方法，type是订阅的通知类型
    this.dispatcher.subscribe(type, this) // this是当前低调用 subscribe 的订阅者
  }
  doUpdate(arg) {
    console.log('接受到消息' + arg)
  }
}
//调度中心
class Dispatcher {
  constructor() {
    this.dispatcher = {}
  }
  //订阅
  subscribe(type, subscriber) {
    if (!this.dispatcher[type]) {
      this.dispatcher[type] = []
    }
    this.dispatcher[type].push(subscriber) // 将与本消息相关的订阅者存起来
  }
  //退订
  unsubscribe(type, subscriber) {
    let subscribers = this.dispatcher[type]
    if (!subscribers || !subscribers.length) return
    this.dispatcher[type] = subscribers.filter((item) => {
      return item.id !== subscriber.id
    })
  }
  //发布
  publish(type, args) {
    let subscribers = this.dispatcher[type]
    if (!subscribers || !subscribers.length) return
    subscribers.forEach((subscriber) => {
      subscriber.doUpdate(type, args)
    })
  }
}
class Reader extends Subscriber {
  constructor(name, dispatcher) {
    super(dispatcher)
    this.name = name
  }
  doUpdate(type, st) {
    console.log(this.name + `阅读了--${type}--公众号的文章`)
  }
}
class WeiX extends Pub {
  constructor(name, dispatcher) {
    super(dispatcher)
    this.name = name
  }
  publishArticle(type) {
    this.publish(type)
  }
}

let dispatcher = new Dispatcher()
//公众号
let wei1 = new WeiX('前端', dispatcher)
let wei2 = new WeiX('数据库', dispatcher)
//读者们
let reader1 = new Reader('小玲', dispatcher)
let reader2 = new Reader('小明', dispatcher)
let reader3 = new Reader('小李', dispatcher)
//读者订阅公众号
reader1.subscribe('前端')
reader2.subscribe('数据库')
reader3.subscribe('数据库')

//公众号发布文章
wei1.publishArticle('前端')
wei1.publishArticle('数据库')



// // 场景
// // 网页事件绑定
// <button id="btn">按钮</button>
// // Promise
// // jQuery callbacks
// var callbacks = $.Callbacks()
// callbacks.add(function(info) {
//   console.log('fn1' + info)
// })
// callbacks.add(function(info) {
//   console.log('fn2' + info)
// })
// callbacks.fire('go...')
// // nodejs自定义事件
// // nodejs处理http请求，多进程通信
// // vue watch
// // vue React生命周期触发

// const EventEmitter = require('events').EventEmitter
// const emitter1 = new EventEmitter()
// emitter1.on('some', () => {
//   console.log('some event ')
// })
// emitter1.emit('some')

// class Dog extends EventEmitter {

// }

// const simon = new Dog('simon')
// simon.on('xxx', () => {

// })

// // stream 用到了自定义事件

// var readStream = fs.createReadStream('')
// readStream.on('data', function(chunk){

// })
