const Toast = {};
Toast.install = (Vue, options) => {
  Vue.prototype.$msg = 'hello world';
}
module.exports = Toast;
