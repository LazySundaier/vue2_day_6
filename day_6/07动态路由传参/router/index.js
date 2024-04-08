import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    //words可以匹配到网址中对应的数据
    //words后面的?是可选符,即不传参也可以匹配到网页
    { path: '/search/:words?', component: Search }
  ]
})

export default router