<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "red",
      color2: "green",
    };
  },
  directives: {
    color: {
      inserted(el, binding) {
        console.log(el);
        el.style.color = binding.value;
      },
      //指令的值被修改时触发
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
  },
};
</script>

<style>
</style>