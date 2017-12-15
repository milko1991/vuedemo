
var MyPlugin = {}

MyPlugin.install = function (Vue, options) {
  //获取缓存
  Vue.prototype.getCookie = function (name) {
    // 逻辑...
    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }
  //设置缓存
  Vue.prototype.setCookie  = function (name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  }
  //删除缓存
  Vue.prototype.delCookie = function (name) {
    this.setCookie(name, '', -1);
  };
}

module.exports = MyPlugin;
