<template>
  <div>
    <!-- 2.在使用组件时,在slot中填入相应内容 -->
    <MyDialog>
      你确认要删除吗
    </MyDialog>
    <MyDialog>
      <p>111</p>
      <p>333</p>
      <p>222</p>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>