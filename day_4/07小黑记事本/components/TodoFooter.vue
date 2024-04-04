<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count"
      >合 计:<strong> {{ totalCount }} </strong></span
    >
    <!-- 清空 -->
    <button 
    @click="clear"
    class="clear-completed">清空任务</button>
  </footer>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  computed: {
    totalCount() {
      return this.list.length;
    },
  },
  methods:{
    clear(){
      this.$emit('clear')
    }
  }
};
</script>

<style>
</style>