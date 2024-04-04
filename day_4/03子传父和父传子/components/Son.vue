<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件 
    {{ title }}
    <button @click="fn">修改父组件的data</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  // 2.通过props来接受
  props:['title'],
  methods:{
    fn(){
      //通过$emit向父组件发送消息通知
      this.$emit('changeTitle','双休日')
    },
  }
}
</script>

<style>

</style>