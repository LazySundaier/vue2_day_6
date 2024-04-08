<template>
  <div class="h5-wrapper">
    <div class="content">
      <router-view></router-view>
    </div>
    <nav class="tabbar">
      <!-- 将a标签换成router-link -->
      <router-link to="/article">面经</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/user">我的</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  //组件名
  name: "LayoutPage",
  //由于组件被缓存了,created和mounted不会被二次触发,destoryed不会被触发
  created(){
    console.log('组件被加载');
  },
  mounted(){
    console.log('dom渲染结束');
  },
  destroyed(){
    console.log('组件被销毁');
  },
  //取而代之的是激活和失活
  activated(){
    console.log('组件被激活');
  },
  deactivated(){
    console.log('组件失活');
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }
    a.router-link-active {
      color: orange;
    }
  }
}
</style>