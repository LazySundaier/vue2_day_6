<template>
  <div>
    <select :value="value" @change="fn">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    //必须用value来接收数据
    value: String,
  },
  methods: {
    fn(e) {
      //事件名必须用input
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>