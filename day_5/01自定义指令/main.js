import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局注册
// Vue.directive('focus', {
//   //inserted会在指令所在元素被插入页面中时被添加
//   inserted(el) {
//     console.log(el);
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
