<template>
  <div>
    <select :value="cityId" @change="fn">
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
    cityId: String,
  },
  methods: {
    fn(e) {
      this.$emit("selectCity", e.target.value);
    },
  },
};
</script>

<style>
</style>