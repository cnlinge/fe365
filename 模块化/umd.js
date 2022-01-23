// 运行时加载


// 编译时加载

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'))
  } else {
    root.returnExport = factory(root.jQuery)
  }
})(this, function($) {
  function myFun() {

  }
})