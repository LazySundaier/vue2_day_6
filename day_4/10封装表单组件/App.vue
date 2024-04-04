<template>
  <div class="app">
    <!-- #event可以获得对应的形参 -->
    <BaseSelect :cityId="selectId" @selectCity="selectId = $event"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  data() {
    return {
      selectId: "102",
    };
  },
  components: {
    BaseSelect,
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.selectId = e;
    },
  },
};
</script>

<style>
</style>