import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Article from '@/views/Article.vue';
import Collect from '@/views/Collect.vue';
import Like from '@/views/Like.vue';
import User from '@/views/User.vue';
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    //两个一级路由
    {
      path:'/',
      redirect:'/article',
      component:Layout,
      //通过children配置项,用来配置子路由
      //要在对应的父级页面中配置路由出口
      children:[
        {
          path:'/article',
          component:Article,
        },
        {
          path:'/collect',
          component:Collect,
        },
        {
          path:'/like',
          component:Like,
        },
        {
          path:'/user',
          component:User,
        }
      ]
    },
    {
      //配置动态路由
      path:'/detail/:id',
      component:ArticleDetail,
    }
  ]
})

export default router