<template>
  <div>
    <MyDialog>
      <!-- v-slot可以简写为# -->
      <template #head>大标题</template>
      <template #content>内容区</template>
      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>