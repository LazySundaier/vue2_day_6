<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @Add="handleAdd"></TodoHeader>
    <TodoMain @del="del" :list="list"></TodoMain>
    <TodoFooter @clear="clear" :list="list"></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";

/**
 * 渲染功能:
 * 1.提供数据->提供在公共的父组件中 App.vue
 * 2.通过父传子的方式
 * 3.用v-for渲染
 */
/**
 * 添加功能:
 * 1.收集表单数据->v-model
 * 2.监听事件(回车+点击)
 * 3.通过子传父,修改父组件的数据
 */
/**
 * 删除功能:
 * 1.监听事件(删除的点击事件)要携带id
 * 2.子传父,传id
 */
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [
        { id: 1, name: "打篮球" },
        { id: 2, name: "看电影" },
        { id: 3, name: "骑车" },
      ],
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    handleAdd(value) {
      this.list.unshift({
        id: new Date(),
        name: value,
      });
    },
    del(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    clear() {
      this.list = [];
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newvalue) {
        localStorage.setItem("list", JSON.stringify(newvalue));
      },
    },
  },
};
</script>

<style>
</style>
