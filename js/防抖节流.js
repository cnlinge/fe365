
  /*
    防抖函数: 操作停止后 延长 一定时间后再执行，如果 在一定时间内又执行了 ，那重新计时。不会立即执行
  */
  function deb(fn, time) {
    let timer = null
    return function() {
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(()=> {
        fn.apply(this, arguments)
      }, time)
    }
  }
  function fn() {
    console.log('------>')
  }

  const resFn = deb(fn, 3000)

  resFn()

  // 节流函数(有节奏的): 立即执行 一定时间内 一个方法只能被执行一次，本次时间 上次执行的时间

  function th(fn, time) {
    let preTime = null
    return function() {
      if (preTime && (Date.now() - preTime > time)) {
        fn.apply(this,arguments)
        preTime = Date.now()
      }
    }
  }

  // 场景  输入搜索   抢购  页面滑动  页面缩放