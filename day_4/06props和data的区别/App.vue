<template>
  <div class="app">
    <BaseCount @changeCount="change"
    :Fcount="Fcount"></BaseCount>
  </div>
</template>

<script>
import BaseCount from "./components/BaseCount.vue";
export default {
  components: {
    BaseCount,
  },
  data() {
    return {
      Fcount: 100,
    };
  },
  methods: {
    change(newvalue) {
      this.Fcount = newvalue;
    },
  },
};
</script>

<style>
</style>